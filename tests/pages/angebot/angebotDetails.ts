import {browser, element, by} from 'protractor';


export class DetailsPage {

    async isStandardmodellAusgewaehlt(): Promise<boolean> {
        return element(by.cssContainingText('.product-detail', 'Standard Modell')).isDisplayed();
    }

}