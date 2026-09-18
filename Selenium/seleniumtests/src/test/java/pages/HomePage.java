package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage extends BasePage{

    private By viewDetailsButton = By.linkText("View Details");

    public HomePage(WebDriver driver){
        super(driver);
    }
    
    public HobbyDetailsPage goToHobbyDetailsPage(){
        
        waitForVisible(viewDetailsButton);
        click(viewDetailsButton);
        return new HobbyDetailsPage(driver);
    }
}
