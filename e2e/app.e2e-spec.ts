import { TappedInPage } from './app.po';

describe('tapped-in App', () => {
  let page: TappedInPage;

  beforeEach(() => {
    page = new TappedInPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
