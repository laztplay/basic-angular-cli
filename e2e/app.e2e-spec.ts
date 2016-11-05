import { KkhAppPage } from './app.po';

describe('kkh-app App', function() {
  let page: KkhAppPage;

  beforeEach(() => {
    page = new KkhAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
