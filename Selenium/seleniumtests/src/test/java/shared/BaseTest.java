package shared;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.testng.ITestResult;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import config.ConfigReader;
import config.WebDriverFactory;

public abstract class BaseTest {
    
    protected WebDriver driver;

    @BeforeMethod 
    public void setup(){
        driver = WebDriverFactory.createDriver(ConfigReader.browser());
        driver.get(ConfigReader.baseUrl());
    }

    @AfterMethod  
    public void teardown(ITestResult result){
    
    if (ITestResult.FAILURE == result.getStatus()) {
        takeScreenshot(result.getName());
    }
    
    {
        if(driver != null){
            driver.quit();
        }
    }

    }
    
     private void takeScreenshot(String testName) {

        try {
            TakesScreenshot screenshot = (TakesScreenshot) driver;

            File source = screenshot.getScreenshotAs(OutputType.FILE);

            String timestamp = LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("yyyy-MM-dd_HH-mm-ss"));

            Path destination = Paths.get(
                    "screenshots",
                    testName + "_" + timestamp + ".png"
            );

            Files.createDirectories(destination.getParent());

            Files.copy(
                    source.toPath(),
                    destination
            );

            System.out.println(
                    "Screenshot saved to: " + destination.toAbsolutePath()
            );

        } catch (IOException e) {
            System.out.println(
                    "Failed to save screenshot: " + e.getMessage()
            );
        }
    }

}



