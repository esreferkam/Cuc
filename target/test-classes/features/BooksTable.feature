Feature: books table



  Scenario: Verify search results
    Given I am on the login page
    And I login to application as a librarian
    When I go to "Books" page
    And I search for "The Goldfinch"
    Then books table should contain results matching The Goldfinch

  @run
  Scenario: Verify book information
    Given I am on the login page
    And I login to application as a librarian
    And I go to "Books" page
    When I edit book The kiterunner
    Then I verify book information
    | name | author | year |
  | 	Eira barbata | Rex Frisby| 1238454566|








