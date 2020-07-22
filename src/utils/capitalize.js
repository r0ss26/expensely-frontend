const capitalize = (string) => {
  let splitString = string.split(' ');
  for (let i = 0; i <= splitString.length - 1; i++) {
    splitString[i] =
      splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
  }
  return splitString.join(' ');
};

export default capitalize;