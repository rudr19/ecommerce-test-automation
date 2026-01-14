import { Page } from 'playwright';
import { config } from '../config';
import logger from '../utils/logger';

export class BasePage {
  constructor(protected page: Page) {}

  async getTitle(): Promise<string> {
    logger.info('Getting page title');
    return await this.page.title();
  }

  async open(url?: string): Promise<void> {
    const navigateUrl = url || config.baseUrl;
    logger.info(`Navigating to ${navigateUrl}`);
    await this.page.goto(navigateUrl);
  }

  async getUrl(): Promise<string> {
    logger.info('Getting current URL');
    return this.page.url();
  }

  async waitForPageLoad(): Promise<boolean> {
    logger.info('Waiting for page to load');
    try {
      await this.page.waitForLoadState('networkidle', { timeout: config.timeout });
      return true;
    } catch {
      logger.error('Page load timeout');
      return false;
    }
  }

  async isElementVisible(selector: string): Promise<boolean> {
    logger.info(`Checking element visible: ${selector}`);
    try {
      await this.page.waitForSelector(selector, {
        state: 'visible',
        timeout: config.timeout
      });
      return true;
    } catch {
      logger.error(`Element not visible: ${selector}`);
      return false;
    }
  }

  async waitAndType(selector: string, text: string): Promise<void> {
    logger.info(`Typing text into: ${selector}`);
    await this.page.waitForSelector(selector);
    await this.page.click(selector, { clickCount: 3 });
    await this.page.keyboard.press('Backspace');
    await this.page.type(selector, text);
  }

  async waitAndClick(selector: string): Promise<void> {
    logger.info(`Clicking element: ${selector}`);
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }

  async getText(selector: string): Promise<string> {
    logger.info(`Getting text from: ${selector}`);
    await this.page.waitForSelector(selector);
    const text = await this.page.locator(selector).textContent();
    return text || '';
  }

  async getCount(selector: string): Promise<number> {
    logger.info(`Getting element count for: ${selector}`);
    return await this.page.locator(selector).count();
  }
}
