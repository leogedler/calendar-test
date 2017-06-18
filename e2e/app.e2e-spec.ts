import { CalendarTestPage } from './app.po';

describe('calendar-test App', () => {
  let page: CalendarTestPage;

  beforeEach(() => {
    page = new CalendarTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
