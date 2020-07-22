
import React, { useState } from 'react';
import AuthContext from "../../context/auth/authContext"
import './pageStyle.css'
import user from '../charts/data'

const Categories = () => {

    //sort category alphetically
    let sortedCategories = user.categories.sort((a, b) => {
        let catA = a.name.toLowerCase()
        let catB = b.name.toLowerCase()
        return catA.localeCompare(catB)
    })

    const [inputValue, setInputValue] = useState('')
    const [filteredOptions, setFilteredptions] = useState(sortedCategories)

    //console.log(user.categories)

    const handleChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)

        const filtered = sortedCategories.filter(result => {
            return result.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        console.log(filtered)
        setFilteredptions(filtered)
    }

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            setInputValue('')
        }
    }

    const handleReset = () => {
        setInputValue('')
        setFilteredptions(sortedCategories)
    }

    const handleType = (e) => {
        const type = e.target.getAttribute('data-tag')
        setFilteredptions(sortedCategories.filter(item => item.type === type))
    }

    return (
        <div className='container-wrapper'>
            <h1>This is show all categories page</h1>
            <button className='btn' onClick={() => handleReset()}>Reset</button>
            <form>
                <div className="input-field">
                    <input
                        id="search"
                        type="search"
                        value={inputValue}
                        onChange={handleChange}
                        onKeyUp={(e) => handleKeyUp(e)}
                    />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
            <div>
                <button className="waves-effect waves-light btn" data-tag='expense' onClick={handleType}>Expense</button>
                <button className="waves-effect waves-light btn" data-tag='income' onClick={handleType}>Income</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOptions.map((item, i) =>
                        (
                            <tr key={i}>
                                <td><span> <i className="material-icons left">{item.icon}</i></span>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
                                <td>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
                                <td><span className='dot' style={{ backgroundColor: `${item.color}` }}></span></td>
                            </tr>
                        )
                    )}

                </tbody>
            </table>
        </div>
    )
}

export default Categories
