package tests;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pages.HobbyDetailsPage;
import pages.HomePage;
import shared.BaseTest;

import org.openqa.selenium.WebElement;
import org.testng.Assert;


public class HobbyDetailsDisplayTest extends BaseTest{

    private HobbyDetailsPage hobbyDetailsPage;
    
    @BeforeMethod 
    public void setUpHobbyDetails(){
        hobbyDetailsPage = new HomePage(driver).goToHobbyDetailsPage();
    }

    @Test 
    public void hobbyDetailsHeaderCardShouldDisplayCorrectly(){
        System.out.println(driver.getCurrentUrl()); 
        WebElement headerCard = hobbyDetailsPage.getHeaderCard();
        Assert.assertTrue(headerCard.isDisplayed());
    }

       //Hobby details display correctly
        //header card
        //features bar
        //description
    //YouTube video is displayed

    // @Test 
    // public void hobbyDetailsFeaturesBarShouldDisplayCorrectly(){

    // }

    // @Test 
    // public void hobbyDetailsDescriptionShouldDisplayCorrectly(){

    // }

    // @Test 
    // public void hobbyDetailsYoutubeVideoShouldDisplayCorrectly(){

    // }

}
