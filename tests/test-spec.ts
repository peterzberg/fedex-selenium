import {PersonenPage} from './pages/personen/PersonenPage';
import {NeuePersonComponent} from './pages/personen/NeuePersonComponent';
import {BeduerfnisPage} from './pages/beduerfnis/BeduerfnisPage';
import {Grundversicherung} from './pages/beduerfnis/Grundversicherung';
import {BudgetTyp} from './pages/beduerfnis/BudgetTyp';
import {SpitalTyp} from './pages/beduerfnis/SpitalTyp';
import {WeitereLeistungen}  from './pages/beduerfnis/WeitereLeistungen';
import {AngebotPage} from './pages/angebot/angebotPage';
import {Vertragsdauer} from './pages/angebot/Vertragsdauer';
import {Geschlecht} from './pages/Geschlecht';
import {browser, element, by} from 'protractor';
import {DetailsPage} from './pages/angebot/angebotDetails';

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
    let beduerfnisPage: BeduerfnisPage = new BeduerfnisPage();
    await beduerfnisPage.setzeGrundversicherung(Grundversicherung.STANDARD)
    await beduerfnisPage.setzeBudgetTyp(BudgetTyp.SPARSAM);        
    await beduerfnisPage.setzeSpitalTyp(SpitalTyp.HALBPRIVAT);
    await beduerfnisPage.setzeWeitereLeistungen([WeitereLeistungen.ALTERNATIV, WeitereLeistungen.FITNESS])
    let angebot: AngebotPage = await beduerfnisPage.weiter();
    let details: DetailsPage = await angebot.details();
    let hasStandardmodell: boolean = await details.isStandardmodellAusgewaehlt();

    expect(hasStandardmodell).toBe(true);
    
    await angebot.setVertragsdauer(Vertragsdauer.FUENF_JAHRE);
    await angebot.weiter();
  });
});