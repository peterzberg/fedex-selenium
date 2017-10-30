import {Grundversicherung} from "./Grundversicherung";
import {SpitalTyp} from "./SpitalTyp";
import {BudgetTyp} from "./BudgetTyp";
import {WeitereLeistungen} from "./WeitereLeistungen";
import {browser, element, by} from 'protractor';
import {promise} from 'selenium-webdriver'

export class IndividuellPage {

    async setzeGrundversicherung(grundversicherung : Grundversicherung): Promise<void> {
        await element(by.cssContainingText('div.scala-value > .value', grundversicherung)).click();
    }

    async setzeBudgetTyp(budgegtTyp : BudgetTyp): Promise<void> {
        await browser.waitForAngular();
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
}