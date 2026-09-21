package tests;

import java.util.List;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import pages.BrowseAllPage;
import pages.HomePage;
import shared.BaseTest;

public class BrowseAllFiltersTest extends BaseTest{

    private BrowseAllPage browseAllPage;

    // @BeforeMethod 
    // private void setUpBrowseAllPage(){
    //     browseAllPage = new HomePage(driver).goToBrowseAllPage();
    // }


    // @Test 
    // private void selectingCategoryFilterShouldShowFilteredResultsBySelectedCategory(){
    //     browseAllPage.selectFilter("Creative");
    //     List<String> allCreativeHobbies = browseAllPage.getAllHobbyNames();
    //     String firstHobby = allCreativeHobbies.get(0);
    //     int sizeOfList = allCreativeHobbies.size();
    //     System.out.println(sizeOfList);

    //     Assert.assertTrue(sizeOfList == 15);
    //     Assert.assertEquals(firstHobby,"Barre");
    //     browseAllPage.selectFilter("Creative");
    //     }

    // @Test 
    // private void selectingPriceFilterShouldFilterResultsBySelectedPriceCategory(){
    //     browseAllPage.selectFilter("£");
    //     List<String> allLowPriceHobbies = browseAllPage.getAllHobbyNames();
    //     String firstHobby = allLowPriceHobbies.get(0);
    //     int sizeOfList = allLowPriceHobbies.size();
    //     System.out.println(sizeOfList);
    //     Assert.assertTrue(sizeOfList == 22);
    //     Assert.assertEquals(firstHobby, "Running");
    //     browseAllPage.selectFilter("£");
    // }

    // @Test 
    // private void selectingCategoryAndPriceFiltersShouldReturnResultsFilteredByCategoryAndPrice(){
    //     browseAllPage.selectFilter("Creative");
    //     browseAllPage.selectFilter("£");
    //     List<String> allCreativeAndLowPriceHobbies = browseAllPage.getAllHobbyNames();
    //     String firstHobby = allCreativeAndLowPriceHobbies.get(0);
    //     int sizeOfList = allCreativeAndLowPriceHobbies.size();
    //     System.out.println(sizeOfList);
    //     Assert.assertTrue(sizeOfList == 7);
    //     Assert.assertEquals(firstHobby, "Crocheting");
    //     browseAllPage.selectFilter("Creative");
    //     browseAllPage.selectFilter("£");
    // }

    // @Test 
    // private void selectingCategoryFilterThenClearingFilterShouldShowAllResults(){
    //     browseAllPage.selectFilter("Creative");
    //     List<String> allCreativeAndLowPriceHobbies = browseAllPage.getAllHobbyNames();
    //     int sizeOfList = allCreativeAndLowPriceHobbies.size();
    //     System.out.println(sizeOfList);
    //     Assert.assertTrue(sizeOfList == 15);

    //     browseAllPage.selectFilter("Creative");
    //     List<String> allHobbies = browseAllPage.getAllHobbyNames();
    //     int numberOfAllHobbies = allHobbies.size();
    //     Assert.assertTrue(numberOfAllHobbies == 37);
    // }

    // @Test
    // private void selectingFilterWhichHasNoResultsShouldReturnStingMessage(){
    //     browseAllPage.selectFilter("£££");
    //     String noResultMessage = browseAllPage.getNoResultMessage();
    //     Assert.assertEquals(noResultMessage, "Sorry! We have no hobbies with these filters, please try again or complete our quiz.");
    // }
}
