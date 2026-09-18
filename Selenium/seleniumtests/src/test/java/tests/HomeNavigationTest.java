package tests;

import org.testng.Assert;
import org.testng.annotations.Test;

import pages.HomePage;
import pages.QuizPage;
import shared.BaseTest;

public class HomeNavigationTest extends BaseTest{
     
    // @BeforeClass 
    // public void setUpHomePage(){
        
         
    // }
    
    // Home Page Navigation
    // Homepage → Quiz
    // Homepage → Browse All
    // Browse hobby → Hobby details
    
    @Test 
    public void clickingQuizButtonShouldNavigateToQuizPage(){
        HomePage homePage = new HomePage(driver);
        QuizPage quizPage = homePage.goToQuizPage();
        String url = driver.getCurrentUrl();
        Assert.assertTrue(url.contains("quiz"), "The URL does not contain quiz, instead it is: " + url);
        Assert.assertEquals("Your ideal Saturday afternoon looks like...", quizPage.questionText());

    }

    @Test 
    public void clickingBrowseAllShouldNavigateToBrowseAllPage(){
        HomePage homePage = new HomePage(driver);
        homePage.goToBrowseAllPage();
        String url = driver.getCurrentUrl();
        Assert.assertTrue(url.contains("browse"), "The URL does not contain browse, instead it is: " + url);
    }

    // @Test 
    // public void clickingAboutUsShouldNavigateToAboutUsPage(){
        
    // }

    // @Test 
    // public void clickingViewAllOnActiveHobbiesShouldNavigateToActiveHobbiesCategoryPage(){
        
    // }

}
