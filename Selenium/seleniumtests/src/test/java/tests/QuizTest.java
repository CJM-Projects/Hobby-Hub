package tests;

import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import pages.HomePage;
import pages.QuizPage;
import shared.BaseTest;
import testData.QuizTestData;

public class QuizTest extends BaseTest{

    private QuizPage quizPage;

    @BeforeMethod 
    private void setUpQuizPage(){
        quizPage = new HomePage(driver).goToQuizPage();
    }

// Quiz
// Quiz loads
// Validation prevents unanswered question
// User progresses through quiz
// User completes quiz
// Quiz Results 
// Five recommendations are returned
// Results display match percentages
// Top result is displayed correctly

    // @Test 
    // private void openingQuizPageShouldLoadQuiz(){

    // }

    @DataProvider(name = "quizData")
    public Object[][] quizData(){
        return new Object[][] {
            {
                new QuizTestData(
                    "Not moving unless snacks are involved", 
                    "I look for the instructions", 
                    "Slow and unhurried", 
                    "The more the merrier", 
                    "Happy either way", 
                    "Wing it and see what happens", 
                    "Just show me where to swipe the card", 
                    "Every now and then"
                )
            }
        };
    } 
    
    @Test 
    private void nextButtonShouldBeDisabledWhenUserHasNotAnsweredQuestion(){
        WebElement nextButton = quizPage.getNextButton();
        Assert.assertFalse(nextButton.isEnabled());
    }

    @Test 
    private void userShouldProgressThroughQuizWhenSelectingAnswer(){
        quizPage.clickQuizAnswerButton();
        String nextQuestion = quizPage.questionText();
        Assert.assertEquals(nextQuestion, "You just got a blank canvas (literal or metaphorical). What happens?");
    }
    
    @Test(dataProvider = "quizData")
    private void userShouldBeRedirectedToResultsPageOnceAllQuestionsAreAnswered(QuizTestData testData){
        quizPage.selectAnswer(testData.getQuestion1());
        quizPage.selectAnswer(testData.getQuestion2());
        quizPage.selectAnswer(testData.getQuestion3());
        quizPage.selectAnswer(testData.getQuestion4());
        quizPage.selectAnswer(testData.getQuestion5());
        quizPage.selectAnswer(testData.getQuestion6());
        quizPage.selectAnswer(testData.getQuestion7());
        quizPage.selectAnswer(testData.getQuestion8());

        Assert.assertTrue(driver.getCurrentUrl().contains("results"), "User was not navigated to the results page. Current URL: " + driver.getCurrentUrl());
    }

}
