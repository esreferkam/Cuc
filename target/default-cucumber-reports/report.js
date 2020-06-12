$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/BooksTable.feature");
formatter.feature({
  "name": "books table",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify search results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login to application as a student",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_to_application_as_a(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to \"Books\" page",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.i_go_to_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"The Goldfinch\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.UsersTableStepDefs.i_search_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Verify search results");
formatter.after({
  "status": "passed"
});
});