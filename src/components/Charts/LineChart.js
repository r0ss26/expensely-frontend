import React, { useEffect, useContext, useState } from 'react';
import { Line } from 'react-chartjs-2';
import AuthContext from '../../context/auth/authContext';
import { getPrevious30DaysTotals } from '../../utils/helper';
import moment from 'moment';

const LineChart = () => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const prev30Days = [...new Array(30)]
    .map((i, idx) =>
      moment().startOf('day').subtract(idx, 'days').format('Do MMM')
    )
    .reverse();

  const initialChartData = {
    labels: prev30Days,
    datasets: [
      {
        label: 'Daily Totals (30 Days)',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
    ],
  };

  const [data, setData] = useState(initialChartData)

  useEffect(() => {
    if (user) {
      setData({
        ...data,
        datasets: [
          {
            ...data.datasets[0],
            data: getPrevious30DaysTotals(user.transactions)
          }
        ]
      })
    }
  }, [user, data]);

  return (
    <div>
      <Line
        data={data}
        options={{
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Daily Total ($)',
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Date',
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default LineChart;
