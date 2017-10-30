import {Grundversicherung} from "./Grundversicherung";
import {SpitalTyp} from "./SpitalTyp";
import{BudgetTyp} from "./BudgetTyp";
import{WeitereLeistungen} from "./WeitereLeistungen";
import {browser, element, by} from 'protractor';

export class IndividuellPage {

    setzeGrundversicherung(grundversicherung :Grundversicherung){
        element(by.cssContainingText('div.scala-value > .value', grundversicherung)).click();
    }

    setzeBudgetTyp(budgegtTyp : BudgetTyp){
        element(by.cssContainingText('div.scala-value > .value', budgegtTyp)).click();
    }

    setzeSpitalTyp(spitalTyp : SpitalTyp){
        element(by.cssContainingText('div.scala-value > .value', spitalTyp)).click();
    }

    setzeWeitereLeistungen(weitereLeistungen : WeitereLeistungen[]){
        for ( let leistung of weitereLeistungen){
            element(by.cssContainingText('div.tile > .leistung-text', leistung)).click();
        }

    }

}