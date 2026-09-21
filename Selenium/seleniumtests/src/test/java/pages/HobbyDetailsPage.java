package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HobbyDetailsPage extends BasePage{

    private By headerCard = By.cssSelector("header h1");
    private By featuresBar = By.cssSelector("main > div");
    private By descriptionCard = By.cssSelector("section:first-of-type");
    private By youtubeVideo = By.cssSelector("iframe");

    public HobbyDetailsPage(WebDriver driver){
        super(driver);
    }
    
    public WebElement getHeaderCard(){
        return waitForVisible(headerCard);
    }

    public WebElement getFeaturesBar(){
        return waitForVisible(featuresBar);
    }

    public WebElement getDescriptionCard(){
        return waitForVisible(descriptionCard);
    }

    public WebElement getYoutubeVideo(){
        return waitForVisible(youtubeVideo);
    }

}
