package pages;

import java.util.List;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class BrowseAllPage extends BasePage{

    private By filterMenu = By.cssSelector("#root > div > main > div.flex.flex-col.w-2xs.px-2.me-12.border-r-2");
    private By hobbyCards = By.cssSelector("#root > div > main > div.w-full > div");
    private By hobbyNames = By.cssSelector("#root > div > main > div.w-full > div > div > div > h2");
    private By noResultMessage = By.cssSelector("p");
    


    public BrowseAllPage(WebDriver driver) {
        super(driver);
    }
    
    public void selectFilter(String visibleText){

        waitForVisible(filterMenu);
        click(By.cssSelector("input[value='" + visibleText + "']"));
    }

    public List<WebElement> getAllHobbyCards(){
        return waitForAllVisible(hobbyCards);
    }

    public List<String> getAllHobbyNames(){
        return waitForAllVisible(hobbyNames).stream().map(WebElement::getText).collect(Collectors.toList());
    }

    public String getNoResultMessage(){
        return waitForVisible(noResultMessage).getText();
    }





    
}
