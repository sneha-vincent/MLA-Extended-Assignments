Feature: Generate contract invoice
  Scenario: Generate contract and invoice for selected vehicle
    Given a registered user "Driver X" has confirmed the vehicle booking for "SUV"
    When the booking is finalized
    Then the system should generate a rental contract with details of the vehicle, user and pricing
    And an invoice should be generated with total payable amount and taxes
    And the system should display a confirmation message