$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As I user, I should be able to login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@lib-100"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Login as a librarian",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@lib-100"
    },
    {
      "name": "@login"
    },
    {
      "name": "@librarian"
    },
    {
      "name": "@staff"
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
  "name": "I login as a librarian",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_as_a_librarian()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Login as a librarian");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as a student",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@lib-100"
    },
    {
      "name": "@login"
    },
    {
      "name": "@student"
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
  "name": "I login as a student",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_as_a_student()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Login as a student");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login as a admin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@lib-100"
    },
    {
      "name": "@login"
    },
    {
      "name": "@admin"
    },
    {
      "name": "@staff"
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
  "name": "I login as an admin",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_as_an_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Login as a admin");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/PageNavigation2.feature");
formatter.feature({
  "name": "Page navigation links",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@lib-132"
    },
    {
      "name": "@navigation"
    }
  ]
});
formatter.scenario({
  "name": "Go to users page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@lib-132"
    },
    {
      "name": "@navigation"
    },
    {
      "name": "@db"
    }
  ]
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
  "name": "\"Users\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.write("Complete scenario: Go to users page");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to books page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@lib-132"
    },
    {
      "name": "@navigation"
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
  "name": "I login as a librarian",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_as_a_librarian()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Books\" link",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.i_click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Books\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Go to books page");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to dashboard page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@lib-132"
    },
    {
      "name": "@navigation"
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
  "name": "I login as a librarian",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_as_a_librarian()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Books\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.i_click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Dashboard\" link",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.i_click_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Dashboard\" page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.PageNavigationStepDefs.page_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.write("Complete scenario: Go to dashboard page");
formatter.after({
  "status": "passed"
});
});