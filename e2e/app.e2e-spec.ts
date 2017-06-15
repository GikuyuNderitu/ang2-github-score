import { Ang2GithubScorePage } from './app.po';

describe('ang2-github-score App', () => {
  let page: Ang2GithubScorePage;

  beforeEach(() => {
    page = new Ang2GithubScorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
