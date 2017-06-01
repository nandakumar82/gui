import { PhoenixPage } from './app.po';

describe('phoenix App', () => {
  let page: PhoenixPage;

  beforeEach(() => {
    page = new PhoenixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
