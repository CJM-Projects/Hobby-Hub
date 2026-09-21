package pages;

import java.util.List;
import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class QuizPage extends BasePage{
    
    private By question = By.cssSelector("h1");
    private By nextButton = By.cssSelector("#root > div > main > div > div > div.flex.w-full.justify-between > button.max-w-100.h-fit.text-xl.py-1.px-4.text-center.font-medium.rounded-xl.border.border-slate-200.bg-white.text-slate-700.transition-all.duration-200.hover\\:border-indigo-500.hover\\:bg-indigo-50\\/50.hover\\:text-indigo-900.shadow-sm.disabled\\:cursor-not-allowed.disabled\\:bg-zinc-300.disabled\\:border-transparent.disabled\\:text-black");
    private By quizAnswerButton = By.xpath("//*[@id=\"root\"]/div/main/div/div/div[3]/div/div[2]/button[1]");
    private By answerButtons = By.cssSelector("main button:not([aria-label])");

    public QuizPage(WebDriver driver) {
        super(driver);
    }

        public String questionText(){
        return textOf(question);
    }
    
    public WebElement getNextButton(){
        return waitForVisible(nextButton);
        
    }

    public void clickQuizAnswerButton(){
        waitForVisible(quizAnswerButton);
        click(quizAnswerButton);
    }

    public void selectAnswer(String answer){
        List<WebElement> buttons = wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(answerButtons));
        
        for(WebElement button : buttons){
            if(button.getText().trim().contains(answer)){
                button.click();
                return;
            }
        }

        throw new NoSuchElementException("Could not find quiz answer: " + answer);
    }
}
