'use strict';

const inputName = document.querySelector('#name');
const inputDate = document.querySelector('#dob');
const inputGender = document.querySelector('.form-input-location');
const inputReset = document.querySelector('.reset-button');

const btnSubmit = document.querySelector('.submit-button');
const btnReset = document.querySelector('.reset-button');

const modal = document.querySelector('.result-container');

const femaleNames = {
  sunday: 'Akosua',
  monday: 'Adwoa',
  tuesday: 'Abenaa',
  wednesday: 'Akua',
  thursday: 'Yaa',
  friday: 'Afua',
  saturday: 'Ama',
};
const maleNames = {
  sunday: 'Kwasi',
  monday: 'Kwadwo',
  tuesday: 'Kwabena',
  wednesday: 'Kwaku',
  thursday: 'Yaw',
  friday: 'Kofi',
  saturday: 'Kwame',
};

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let dob;
let dayOfWeek;
let userName;
let akanName;
let userGender;
let gender;
let today;

const nameProperCase = function (str) {
  if (str != undefined) {
    let s = str.toLowerCase().split('');
    let newStr = s[0].toUpperCase() + s.slice(1).join('');
    return newStr;
  }
};

const getUser = function (e) {
  e.preventDefault();
  // Check the Date Today
  today = new Date();

  // Validation that All Inputs Added
  if (!inputName.value) {
    alert('Please fill all fields.');
    return;
  }

  // Validate Date
  if (!inputDate.value || today <= new Date(inputDate.value)) {
    alert('Invalid DOB');
    return;
  }

  // Get the Users Name
  userName = inputName.value;

  // User DOB
  dob = new Date(inputDate.value);
  dayOfWeek = dob.getDay();

  // User Gender
  userGender = inputGender.value;
  gender = userGender === 'male' ? maleNames : femaleNames;

  // User Akan Name
  akanName = Object.values(gender)[dayOfWeek];

  // HTML to Show Result
  const html = `
      <h2>Your Akan Name Details</h2>
      <p id="resultName">Name: ${nameProperCase(userName)}</p>
      <p id="resultDOB">Date of Birth: ${days[dayOfWeek]} ${dob.getDate()} ,    
          ${months[dob.getMonth()]} ${dob.getFullYear()}</p>
      <p id="resultGender">Gender: ${nameProperCase(userGender)}</p>
      <p id="resultAkanName">Akan Name: ${nameProperCase(akanName)}</p> `;

  modal.insertAdjacentHTML('afterbegin', html);

  // RemoveEventListener
  btnSubmit.removeEventListener('click', getUser);
};

// Add EventListener
btnSubmit.addEventListener('click', getUser);

const resetApp = function (e) {
  let dob;
  let dayOfWeek;
  let userName;
  let akanName;
  let userGender;
  let gender;

  modal.innerHTML = '';
  btnSubmit.addEventListener('click', getUser);
};

// Reset App for the next User
btnReset.addEventListener('click', resetApp);
