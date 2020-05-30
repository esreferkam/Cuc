package com.cybertek.library.step_definitions;

import com.cybertek.library.pages.LoginPage;
import com.cybertek.library.utilities.ConfigurationReader;
import com.cybertek.library.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.Map;

public class LoginStepDefs{
    LoginPage loginPage = new LoginPage();
    @Given("I am on the login page")
    public void i_am_on_the_login_page() {

        System.out.println("Going to the login page");
        //login
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @When("I login as a librarian")
    public void i_login_as_a_librarian() {

        System.out.println("Logging in as a librarian");
        loginPage.login(ConfigurationReader.getProperty("librarian_email"), ConfigurationReader.getProperty("librarian_password"));

    }

    @Then("dashboard should be displayed")
    public void dashboard_should_be_displayed() {

        System.out.println("Verifying dashboard page");

    }
    @When("I login as a student")
    public void i_login_as_a_student() {

        System.out.println("Logging in as a student");
    }
    @When("I login as an admin")
    public void i_login_as_an_admin() {
        System.out.println("Logging in as an admin");
    }
    @Given("I login using following credentials:")
    public void i_login_using_following_credentials(Map<String,String> credentials) {
        System.out.println(credentials);
        String email = credentials.get("email");
        String password = credentials.get("password");
        System.out.println(email);
        System.out.println(password);

        loginPage.login(email,password);
    }

}
