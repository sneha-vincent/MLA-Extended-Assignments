Feature: Calculate vehicle pricing
  Scenario: Apply surcharges or discounts based on user profile
    Given a registered user "Driver X" with a "Silver" loyalty tier and a "Low" risk profile
    When the user selects a vehicle of category "SUV" with a base rate of 2500 per day
    And selects a rental period from "2025-11-10" to "2025-11-13"
    Then the system should calculate the total rental price
    And apply any discounts or surcharges based on the driver profile
    And display the final price