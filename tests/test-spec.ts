import {PersonenPage} from './pages/personen/PersonenPage';
import {NeuePersonComponent} from './pages/personen/NeuePersonComponent';
import {IndividuellPage} from './pages/individuell/IndividuellPage';
import {Grundversicherung} from './pages/individuell/Grundversicherung';
import {BudgetTyp} from './pages/individuell/BudgetTyp';
import {SpitalTyp} from './pages/individuell/SpitalTyp';
import {WeitereLeistungen}  from './pages/individuell/WeitereLeistungen'
import {Geschlecht} from './pages/Geschlecht'
import {browser, element, by} from 'protractor';


describe('KV Happy Case', () => {
  it('should run until the end', () => {
    let personenPage = new PersonenPage();
    let neuePerson: NeuePersonComponent = personenPage.get();
    neuePerson.setGeschlecht(Geschlecht.WEIBLICH);
    neuePerson.setGeburtsdatum(19, 8, 1981);
    neuePerson.setVorname('Test');
    neuePerson.setPostleitzahl(6006, 'Luzern');
    neuePerson.speichern();
    personenPage.individuellZusammenstellen();
    let individuellPage = new IndividuellPage();
    individuellPage.setzeGrundversicherung(Grundversicherung.STANDARD);
    //individuellPage.setzeBudgetTyp(BudgetTyp.SPARSAM);
    individuellPage.setzeSpitalTyp(SpitalTyp.HALBPRIVAT);
    individuellPage.setzeWeitereLeistungen([WeitereLeistungen.ALTERNATIV, WeitereLeistungen.FITNESS])
    browser.sleep(10000);
  });
});