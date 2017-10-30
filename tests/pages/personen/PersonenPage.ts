import {browser, element, by} from 'protractor';
import {NeuePersonComponent} from './NeuePersonComponent';

export class PersonenPage {

  individuellZusammenstellenButton = element(by.css('.test-configure-yourself > button:nth-child(1)'))

  async get() : Promise<NeuePersonComponent> {
    await browser.get('https://www.css.ch/de/home/privatpersonen/krankenkasse/praemienrechner.html/personen');
    return new NeuePersonComponent();
  }

  async individuellZusammenstellen(){
    await this.individuellZusammenstellenButton.click();
  }

}