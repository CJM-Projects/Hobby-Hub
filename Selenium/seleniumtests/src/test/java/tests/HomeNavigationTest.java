package tests;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.Test;

import config.ConfigReader;
import pages.HomePage;
import pages.QuizPage;
import shared.BaseTest;

public class HomeNavigationTest extends BaseTest{
     
    @AfterMethod 
    private void teardownPage(){
        driver.get(ConfigReader.baseUrl());
    }

    @Test 
    public void clickingBrowseAllShouldNavigateToBrowseAllPage(){
        HomePage homePage = new HomePage(driver);
        homePage.goToBrowseAllPage();
        String url = driver.getCurrentUrl();
        Assert.assertTrue(url.contains("browse"), "The URL does not contain browse, instead it is: " + url);
    }

    @Test 
    public void clickingAboutUsShouldNavigateToAboutUsPage(){
        HomePage homePage = new HomePage(driver);
        homePage.goToAboutUsPage();
        String url = driver.getCurrentUrl();
        
        Assert.assertTrue(url.contains("about"), "The URL does not contain about, instead it is: " + url);
    }

    @Test 
    public void clickingViewAllOnActiveHobbiesShouldNavigateToActiveHobbiesCategoryPage(){
        HomePage homePage = new HomePage(driver);
        homePage.goToViewAllActivePage();
        String url = driver.getCurrentUrl();
        Assert.assertTrue(url.contains("active"), "The URL does not contain active, instead it is: " + url);
    }
    @Test 
    public void clickingQuizButtonShouldNavigateToQuizPage(){
        HomePage homePage = new HomePage(driver);
        QuizPage quizPage = homePage.goToQuizPage();
        String url = driver.getCurrentUrl();
        Assert.assertTrue(url.contains("quiz"), "The URL does not contain quiz, instead it is: " + url);
        Assert.assertEquals("Your ideal Saturday afternoon looks like...", quizPage.questionText());

    }
}
