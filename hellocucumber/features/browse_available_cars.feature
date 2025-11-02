Feature: Browse available cars

  Scenario: Registered user selects location and date range
    Given a registered user "Driver X" logins
    When they select "Bangalore" as location
    And select the date range from "2025-11-10" to "2025-11-13"
    Then the system should display a list of available vehicles in "Bangalore" for those dates
    And each vehicle should show its category and base rate per day