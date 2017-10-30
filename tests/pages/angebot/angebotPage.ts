import {browser, element, by, ElementFinder} from 'protractor';
import {Vertragsdauer} from './Vertragsdauer';
import {DetailsPage} from './angebotDetails';

export class AngebotPage {
    private vertragsdauerSelektor: string = 'label.button:nth-child(';
    private weiterButton: ElementFinder = element(by.css('field-button.test-goforward:nth-child(3) > button:nth-child(1)'));
    async setVertragsdauer(vertragsdauer: Vertragsdauer): Promise<void> {
        await element(by.css(this.vertragsdauerSelektor + vertragsdauer + ')')).click();
    }

    async weiter(): Promise<void> {
        await this.weiterButton.click(); 
    }

    async details(): Promise<DetailsPage> {
        await element(by.css('.test-detail-button > button:nth-child(1)')).click();
        return new DetailsPage();
    }

}