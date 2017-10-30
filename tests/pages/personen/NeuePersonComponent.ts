import {Geschlecht} from '../Geschlecht';
import {browser, element, by} from 'protractor';

export class NeuePersonComponent {  
    vornameInput = element(by.css('#string_field_2'))
    speichernButton = element(by.css('button.right'))


    setGeschlecht(geschlecht: Geschlecht)  {
        element(by.css('label.button:nth-child(' + geschlecht + ')')).click();
    }

    setGeburtsdatum(tag: number, monat: number, jahr: number){
        element(by.css('.test-day')).sendKeys(tag);
        element(by.css('.test-month')).sendKeys(monat);
        element(by.css('.test-year')).sendKeys(jahr);
        
    }

    setVorname(input: string){
        this.vornameInput.sendKeys(input);
    }

    setPostleitzahl(plz: number, ort: string, gemeinde?: string){
        element(by.css('#zip_field_1')).sendKeys(plz);
        let expected = ort + (gemeinde ? ' (' + gemeinde +')' : '');
        element(by.cssContainingText('.item', expected)).click();
    }

    speichern() {
        this.speichernButton.click();
    }
    
}