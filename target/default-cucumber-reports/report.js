$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/PageNavigation.feature");
formatter.feature({
  "name": "Page navigation links",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
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
  "name": "I login as a librarian",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_as_a_librarian()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to users page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I click on \"Users\" link",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.i_click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"UsersAD\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat com.cybertek.library.step_definitions.PageNavigationStepDefs.page_should_be_displayed(PageNavigationStepDefs.java:40)\n\tat ✽.\"UsersAD\" page should be displayed(file:///Users/esreferkam/IdeaProjects/cucumber-personal/src/test/resources/features/PageNavigation.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.write("Complete scenario: Go to users page");
formatter.embedding("image/png", "embedded0.png", "Go to users page");
formatter.after({
  "status": "passed"
});
});