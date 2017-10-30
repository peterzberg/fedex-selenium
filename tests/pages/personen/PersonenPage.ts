import {browser, element, by} from 'protractor';
import {NeuePersonComponent} from './NeuePersonComponent';

export class PersonenPage {

  get() : NeuePersonComponent {
    browser.get('https://www.css.ch/de/home/privatpersonen/krankenkasse/praemienrechner.html/personen');
    return new NeuePersonComponent();
  }

}