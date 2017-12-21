import { AartiCollectionUiPage } from './app.po';

describe('aarti-collection-ui App', () => {
  let page: AartiCollectionUiPage;

  beforeEach(() => {
    page = new AartiCollectionUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
