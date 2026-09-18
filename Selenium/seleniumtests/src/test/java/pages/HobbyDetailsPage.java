package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HobbyDetailsPage extends BasePage{

    private By headerCard = By.cssSelector("#root > div > main > header > div.absolute.inset-0.flex.items-center.justify-center.px-6 > div");
    // private By featuresBar = By.cssSelector(null);
    // private By descriptionCard = By.cssSelector(null);
    // private By youtubeVideo = By.cssSelector(null);

    public HobbyDetailsPage(WebDriver driver){
        super(driver);
    }
    
    public WebElement getHeaderCard(){
        return waitForVisible(headerCard);
    }




}
