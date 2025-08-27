const inputElements = document.querySelectorAll('.card-input');
const submitButton = document.querySelector('.card-button');

const calculateAge = (year, month, day) => {
  const today = new Date();
  const birthdayDate = new Date(year, month - 1, day);

  let age = today.getFullYear() - birthdayDate.getFullYear();
  const monthDiff = today.getMonth() - birthdayDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdayDate.getDate())) {
    age--;
  }

  return age;
};

const onClickHandler = () => {
  const dayElement = document.getElementById('day');
  const monthElement = document.getElementById('month');
  const yearElement = document.getElementById('year');
  const resultElement = document.querySelector('.card-resultValue');

  const age = calculateAge(
    parseInt(yearElement.value),
    parseInt(monthElement.value),
    parseInt(dayElement.value)
  );

  resultElement.textContent = `You are ${age} years old`;
  console.log('you clicked me');
};

submitButton.addEventListener('click', onClickHandler);
