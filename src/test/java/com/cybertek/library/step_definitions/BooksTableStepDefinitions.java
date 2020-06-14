package com.cybertek.library.step_definitions;

import com.cybertek.library.pages.BooksPage;
import com.cybertek.library.pojos.Book;
import com.cybertek.library.utilities.BrowserUtils;
import com.cybertek.library.utilities.Driver;
import io.cucumber.java.DataTableType;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;

import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class BooksTableStepDefinitions {
    BooksPage booksPage = new BooksPage();
    @Then("books table should contain results matching {}")
    public void books_table_should_contain_results_matching(String book) {
        List<String> actualRows = BrowserUtils.getElementsText(booksPage.allRows);

        boolean found = true;
        for(String row : actualRows){
            if(!row.contains(book)){
                found = false;
            }
        }
        assertTrue(book + " was not found in books table", found);
        System.out.println(book+" was found");
    }
    @When("I edit/open book {}")
    public void i_edit_book_The_kiterunner(String book) {
        System.out.println("book = " + book);
        BrowserUtils.waitForClickability(booksPage.search, 5).sendKeys(book);
        BrowserUtils.waitForClickability(Driver.getDriver().findElement(By.xpath("//*[@id=\"tbl_books\"]/tbody[1]/tr[1]/td[1]/a[1]")), 5).click();

    }
    @DataTableType
    // register a data table type that uses a custom class
    public Book convertBook(Map<String, String> dataTable){
        Book book = new Book(dataTable.get("name"),
                dataTable.get("author"),
                dataTable.get("year"));
        return book;

    }
    @Then("I verify book information")
    public void i_verify_book_information(Book book) {
        System.out.println(book);

        assertEquals("Book name did not match",
                book.getName(), booksPage.bookName.getAttribute("value"));
        assertEquals("Author did not match",
                book.getAuthor(), booksPage.author.getAttribute("value"));
        assertEquals("Year did not match",
                book.getYear(), booksPage.year.getAttribute("value"));






    }


}
