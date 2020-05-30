Feature: Show records functionality

  Background:
    Given I am on the login page
    And I login as a librarian

  Scenario: verify default values in Users page
    When I click on "Users" link
    Then show records default value should be 10
    And show records should have following options:
      | 5   |
      | 10  |
      | 15  |
      | 50  |
      | 100 |
      | 200 |
      | 500 |

  Scenario: Change number of rows in Users pagew
    And I click on "Users" link
    When I select Show 50 records
    Then users table must display 50 records

