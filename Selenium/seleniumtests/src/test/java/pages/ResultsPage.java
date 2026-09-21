package pages;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ResultsPage extends BasePage{

    private By topResultCard = By.cssSelector("#root > div > main > div > div.mx-auto.mb-6.overflow-hidden.rounded-3xl.transition-all.max-w-5xl.border-2.border-green-900.bg-green-50.shadow-xl > div > div.flex.flex-1.flex-col.justify-center.p-8.md\\:p-10 > h2");
    private By resultsNames = By.cssSelector("#root > div > main > div > div > div > div > h2");
    private By resultsPercentage = By.cssSelector("#root > div > main > div > div > div > div> div > div > span");

    public ResultsPage(WebDriver driver) {
        super(driver);
    }

    public List<String> getAllResultsNames(){
        
        return waitForAllVisible(resultsNames).stream().map(WebElement::getText).collect(Collectors.toList());
    }

    public List<Double> getAllResultsPercentages(){
        
        List<String> percentageStringList  = waitForAllVisible(resultsPercentage).stream().map(WebElement::getText).collect(Collectors.toList());
        List<Double> percentageList = new ArrayList<Double>();

        for(int i = 0 ; i < percentageStringList.size(); i++){
            String text = percentageStringList.get(i);
            
            percentageList.add(Double.parseDouble(text.split("%")[0]));
        }

        return percentageList;
    }

    public WebElement getTopResultCard(){
        return waitForVisible(topResultCard);
    }
    
}
