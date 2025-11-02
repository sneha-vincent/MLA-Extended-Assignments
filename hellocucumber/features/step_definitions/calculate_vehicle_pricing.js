const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given(
  'a registered user {string} with a {string} loyalty tier and a {string} risk profile',function (username, tier, riskLevel){
  }
);

When('the user selects a vehicle of category {string} with a base rate of {int} per day', function (category, rate) {
  
});
When('selects a rental period from {string} to {string}', function (startDate, endDate) {
});

Then('the system should calculate the total rental price', function () {

});

Then('apply any discounts or surcharges based on the driver profile', function () {
  console.log('Applying discounts and surcharges');
});

Then('display the final price', function () {
  console.log('Displaying final price to user');
});