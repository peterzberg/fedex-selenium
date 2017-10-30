import {Grundversicherung} from "./Grundversicherung";
import {SpitalTyp} from "./SpitalTyp";
import {BudgetTyp} from "./BudgetTyp";
import {WeitereLeistungen} from "./WeitereLeistungen";
import {browser, element, by} from 'protractor';
import {AngebotPage} from '../angebot/angebotPage';

export class BeduerfnisPage {

    async setzeGrundversicherung(grundversicherung : Grundversicherung): Promise<void> {
        await element(by.cssContainingText('div.scala-value > .value', grundversicherung)).click();
    }

    async setzeBudgetTyp(budgegtTyp : BudgetTyp): Promise<void> {
        await browser.waitForAngular(); // implementation verwendet window.setTimeout (sleep vermutlich besser)
        await element(by.cssContainingText('div.scala-value > .value', budgegtTyp)).click();
    }

    async setzeSpitalTyp(spitalTyp : SpitalTyp): Promise<void> {
        await element(by.cssContainingText('div.scala-value > .value', spitalTyp)).click();
    }

    async setzeWeitereLeistungen(weitereLeistungen : WeitereLeistungen[]): Promise<void> {
        for ( let leistung of weitereLeistungen){
            await element(by.cssContainingText('div.tile > .leistung-text', leistung)).click();
        }
    }

    async weiter(): Promise<AngebotPage>{
        await element(by.css('field-button.test-goforward:nth-child(3) > button:nth-child(1)')).click();
        await browser.driver.sleep(10 * 1000); // wait for animation to be finished
        return new AngebotPage();
    }
}