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
  it('should run until the end', async function() {
    let personenPage = new PersonenPage();
    let neuePerson: NeuePersonComponent = await personenPage.get();
    await neuePerson.setGeschlecht(Geschlecht.WEIBLICH);
    await neuePerson.setGeburtsdatum(19, 8, 1981);
    await neuePerson.setVorname('Test');
    await neuePerson.setPostleitzahl(6006, 'Luzern');
    await neuePerson.speichern();
    await personenPage.individuellZusammenstellen();
    let individuellPage = new IndividuellPage();
    await individuellPage.setzeGrundversicherung(Grundversicherung.STANDARD)
    await individuellPage.setzeBudgetTyp(BudgetTyp.SPARSAM);        
    await individuellPage.setzeSpitalTyp(SpitalTyp.HALBPRIVAT);
    await individuellPage.setzeWeitereLeistungen([WeitereLeistungen.ALTERNATIV, WeitereLeistungen.FITNESS])
  });
});