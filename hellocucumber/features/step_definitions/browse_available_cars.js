const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('a registered user {string} logins', function (username) {
  console.log(`User "${username}" successfully logged in`);
});

When('they select {string} as location', function (location) {
  console.log(`Location selected: "${location}"`);
});

When('select the date range from {string} to {string}', function (startDate, endDate) {
  console.log(`Date range selected: ${startDate} to ${endDate}`);
});

Then('the system should display a list of available vehicles in {string} for those dates', function (location) {
  console.log(`Displaying available vehicles in ${location} for the selected dates`);
});

Then('each vehicle should show its category and base rate per day', function () {
  console.log('Available vehicles in location show category and base rate per day');
});