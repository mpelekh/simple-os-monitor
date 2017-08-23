import { MonitorPage } from './app.po';

describe('monitor App', () => {
  let page: MonitorPage;

  beforeEach(() => {
    page = new MonitorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
