import { ExampleWebPage } from './app.po';

describe('example-web App', () => {
  let page: ExampleWebPage;

  beforeEach(() => {
    page = new ExampleWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
