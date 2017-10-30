import {PersonenPage} from './pages/personen/PersonenPage';
import {NeuePersonComponent} from './pages/personen/NeuePersonComponent';
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
  });
});