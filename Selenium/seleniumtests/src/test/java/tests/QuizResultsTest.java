package tests;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import config.ConfigReader;
import pages.ResultsPage;
import shared.BaseTest;

public class QuizResultsTest extends BaseTest{

    private ResultsPage resultsPage;

    @BeforeClass 
    private void setUpResultsPage(){
        driver.get(ConfigReader.resultsUrl());
        resultsPage = new ResultsPage(driver);
    }


    @Test 
    private void userShouldSee5HobbyRecommendationWhenResultsPageLoads(){
        Assert.assertEquals(resultsPage.getAllResultsNames().size(), 5);
    }

    @Test 
    private void resultsDisplayedShouldShowPercentagesInDescendingOrderForEachCard(){
        List<Double> percentages = resultsPage.getAllResultsPercentages();
        List<Double> expected = new ArrayList<>(percentages);
        expected.sort(Comparator.reverseOrder());
        Assert.assertEquals(expected, percentages);
    }

    @Test 
    private void topResultShouldBeDisplayedCorrectly(){
        Assert.assertTrue(resultsPage.getTopResultCard().getText().contains("Your Best Match:"));
    }
}
    

