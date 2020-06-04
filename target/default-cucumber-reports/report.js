$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DataDrivenLoginTest.feature");
formatter.feature({
  "name": "User account tests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Another verify user information \u003cname\u003e",
  "description": "",
  "keyword": "Scenario Template",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I login using following credentials:",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "email",
        "\u003cemail\u003e"
      ]
    },
    {
      "cells": [
        "password",
        "\u003cpassword\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "account holder name should be \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Scenarios",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "name"
      ]
    },
    {
      "cells": [
        "student27@library",
        "kkMksO2i",
        "Test Student 27"
      ]
    },
    {
      "cells": [
        "student28@library",
        "19Ceq2sT",
        "Test Student 28"
      ]
    },
    {
      "cells": [
        "student29@library",
        "WyIUNpDI",
        "Test Student 29"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Another verify user information Test Student 27",
  "description": "",
  "keyword": "Scenario Template",
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
  "name": "I login using following credentials:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_using_following_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "account holder name should be \"Test Student 27\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.DashboardStepDefs.account_holder_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Another verify user information Test Student 28",
  "description": "",
  "keyword": "Scenario Template",
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
  "name": "I login using following credentials:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_using_following_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "account holder name should be \"Test Student 28\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.DashboardStepDefs.account_holder_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Another verify user information Test Student 29",
  "description": "",
  "keyword": "Scenario Template",
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
  "name": "I login using following credentials:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.LoginStepDefs.i_login_using_following_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "account holder name should be \"Test Student 29\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.DashboardStepDefs.account_holder_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});