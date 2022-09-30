import { device, element, by } from 'detox';

describe('Movieflix', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('home screen render correctly', async () => {
    await element(by.id('MainNavigator')).takeScreenshot('Home-Screen');
    await element(by.id('HomeFlatList')).scroll(200, 'down');
    await element(by.id('MainNavigator')).takeScreenshot('Home-Screen-Scroll-Down');
    await element(by.id('HomeFlatList')).swipe('down', 'fast');
    await element(by.id('MainNavigator')).takeScreenshot('Home-Screen-Scroll-Top');
  });
});
