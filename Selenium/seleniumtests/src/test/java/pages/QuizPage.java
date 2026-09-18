package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class QuizPage extends BasePage{
    
    private By question = By.cssSelector("#root > div > main > div > div > div.flex.w-full.justify-between > div > h1");
    
    public QuizPage(WebDriver driver) {
        super(driver);
    }

        public String questionText(){
        return textOf(question);
    }
    
}
