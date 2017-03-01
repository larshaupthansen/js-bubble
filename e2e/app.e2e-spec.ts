import { JsBubblePage } from './app.po';

describe('js-bubble App', function() {
  let page: JsBubblePage;

  beforeEach(() => {
    page = new JsBubblePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
