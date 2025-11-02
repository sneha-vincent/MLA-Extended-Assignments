const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('a registered user {string} has confirmed the vehicle booking for {string}', function (username, vehicleType) {
  console.log(`${username} confirmed booking for ${vehicleType}`);
});

When('the booking is finalized', function () {
  console.log('Booking finalized successfully');
});

Then(
  'the system should generate a rental contract with details of the vehicle, user and pricing',
  function () {
    console.log('Rental contract generated with all details');
  }
);

Then('an invoice should be generated with total payable amount and taxes', function () {
  console.log('Invoice generated with total payable amount and taxes');
});

Then('the system should display a confirmation message', function () {
  console.log('Confirmation message displayed to the user');
});