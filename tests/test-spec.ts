import {PersonenPage} from './pages/personen/PersonenPage';

describe('KV Happy Case', () => {
  it('should run until the end', () => {
    let personenPage = new PersonenPage();
    personenPage.get();
  });
});