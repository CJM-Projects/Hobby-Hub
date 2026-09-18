package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HobbyDetailsPage extends BasePage{

    private By headerCard = By.cssSelector("#root > div > main > header > div.absolute.inset-0.flex.items-center.justify-center.px-6 > div");
    private By featuresBar = By.cssSelector("#root > div > main > div > div");
    private By descriptionCard = By.cssSelector("#root > div > main > section.mx-auto.max-w-6xl.px-8.py-12");
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
