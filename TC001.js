// const { describe, before, after, it } = require('node:test');
const {Builder, By, Key, until} = require('selenium-webdriver');
var expect = require('chai').expect;
require('chromedriver')

describe('', function(){
    before(async function(){
        driver = await new Builder().forBrowser('chrome').build();
        vars = {}
    })
    after(async function(){
        await driver.quit();
    })
    it('Order Hotel', async function() {
        await driver.get("https://www.traveloka.com/en-id/");
        await driver.manage().window().maximize();

        //Klik Hotel
        await driver.findElement(By.className('css-1dbjc4n r-1loqt21 r-1otgn73 r-1x4r79x')).click();
        await driver.sleep(2000);
        
        //Klik Kota Bandung
        await driver.findElement(By.className('css-11aywtz r-cwxd7f r-13awgt0 r-1sixt3s r-ubezar r-135wba7 r-bcqeeo r-1ny4l3l r-10paoce r-13n6l4s')).click();
        await driver.sleep(2000);
        await driver.findElement(By.className('css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep r-zl2h9q')).click();
        await driver.sleep(2000);
    })
})