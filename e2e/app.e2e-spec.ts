import { JrsingleyPage } from './app.po';

describe('jrsingley App', () => {
  let page: JrsingleyPage;

  beforeEach(() => {
    page = new JrsingleyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
