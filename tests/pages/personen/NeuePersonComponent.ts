import {Geschlecht} from '../Geschlecht';
import {promise, browser, element, by} from 'protractor';

export class NeuePersonComponent {  
    vornameInput = element(by.css('#string_field_2'))
    speichernButton = element(by.css('button.right'))


    async setGeschlecht(geschlecht: Geschlecht): Promise<void>  {
        await element(by.css('label.button:nth-child(' + geschlecht + ')')).click();
    }

    async setGeburtsdatum(tag: number, monat: number, jahr: number): Promise<void> {
        await element(by.css('.test-day')).sendKeys(tag);
        await element(by.css('.test-month')).sendKeys(monat);
        await element(by.css('.test-year')).sendKeys(jahr);
    }

    async setVorname(input: string): Promise<void>{
        await this.vornameInput.sendKeys(input);
    }

    async setPostleitzahl(plz: number, ort: string, gemeinde?: string): Promise<void>{
        await element(by.css('#zip_field_1')).sendKeys(plz);
        let expected = ort + (gemeinde ? ' (' + gemeinde +')' : '');
        await element(by.cssContainingText('.item', expected)).click();            
     }

    async speichern(): Promise<void> {
        await this.speichernButton.click();
    }
    
}