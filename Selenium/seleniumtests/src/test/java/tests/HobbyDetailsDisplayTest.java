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
        WebElement headerCard = hobbyDetailsPage.getHeaderCard();
        Assert.assertTrue(headerCard.isDisplayed(), "The hobby header card is not displayed");
    }

    @Test 
    public void hobbyDetailsFeaturesBarShouldDisplayCorrectly(){
        WebElement featuresCard = hobbyDetailsPage.getFeaturesBar();
        Assert.assertTrue(featuresCard.getText().contains("Skill Level:"));
        Assert.assertTrue(featuresCard.getText().contains("Price:"));
        Assert.assertTrue(featuresCard.getText().contains("Personality:"));
        Assert.assertTrue(featuresCard.getText().contains("Type:"));
    }

    @Test 
    public void hobbyDetailsDescriptionShouldDisplayCorrectly(){
        WebElement descriptionCard = hobbyDetailsPage.getDescriptionCard();
        Assert.assertTrue(descriptionCard.getText().contains("Description"));
    }

    @Test 
    public void hobbyDetailsYoutubeVideoShouldDisplayCorrectly(){
        WebElement youtubeVideo = hobbyDetailsPage.getYoutubeVideo();
        Assert.assertTrue(youtubeVideo.isDisplayed());
    }

}
