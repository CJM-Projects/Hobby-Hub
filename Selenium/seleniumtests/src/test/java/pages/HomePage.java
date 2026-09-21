package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage extends BasePage{

    private By viewDetailsButton = By.linkText("View Details");
    private By quizButton = By.linkText("Take the Quiz");
    private By hoverBrowse = By.cssSelector("button[aria-haspopup='true']");
    private By browseAllButton = By.cssSelector("a[href='#/browse-all']");
    private By aboutUsButton = By.linkText("About Us");
    private By viewAllActiveButton = By.xpath("//*[@id=\"root\"]/div/main/div/section[2]/div/div[1]/a");

    public HomePage(WebDriver driver){
        super(driver);
    }
    
    public HobbyDetailsPage goToHobbyDetailsPage(){
        
        waitForVisible(viewDetailsButton);
        click(viewDetailsButton);
        return new HobbyDetailsPage(driver);
    }

    public QuizPage goToQuizPage(){
        waitForVisible(quizButton);
        click(quizButton);
        return new QuizPage(driver);
    }

    public BrowseAllPage goToBrowseAllPage(){
        hoverAndClick(hoverBrowse, browseAllButton);
        return new BrowseAllPage(driver);
    }

    public AboutUsPage goToAboutUsPage(){
        waitForVisible(aboutUsButton);
        click(aboutUsButton);
        return new AboutUsPage(driver);
    }

    public ViewAllActiveCategoryPage goToViewAllActivePage(){
        waitForVisible(viewAllActiveButton);
        click(viewAllActiveButton);
        return new ViewAllActiveCategoryPage(driver);
    }

}
