import { ProyectoangularPage } from './app.po';

describe('proyectoangular App', () => {
  let page: ProyectoangularPage;

  beforeEach(() => {
    page = new ProyectoangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
