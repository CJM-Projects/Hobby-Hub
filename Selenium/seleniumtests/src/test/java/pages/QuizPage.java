package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class QuizPage extends BasePage{
    
    private By question = By.cssSelector("h1");
    
    public QuizPage(WebDriver driver) {
        super(driver);
    }

        public String questionText(){
        return textOf(question);
    }
    
}
