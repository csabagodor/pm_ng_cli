import { PmPage } from './app.po';

describe('pm App', function() {
  let page: PmPage;

  beforeEach(() => {
    page = new PmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
