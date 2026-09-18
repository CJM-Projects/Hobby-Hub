package shared;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;


import config.ConfigReader;
import config.WebDriverFactory;

public abstract class BaseTest {
    
    protected WebDriver driver;

    @BeforeClass 
    public void setup(){
        driver = WebDriverFactory.createDriver(ConfigReader.browser());
        driver.get(ConfigReader.baseUrl());
    }

    @AfterClass 
    public void teardown(){
        if(driver != null){
            driver.quit();
        }
    }
}



