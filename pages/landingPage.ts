import { Page } from 'playwright';
import { BasePage } from './basePage';
import { selectors } from '../pageobjects/selectors';
import { config } from '../config';
import logger from '../utils/logger';

export class LandingPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    logger.info('Opening landing page');
    await super.open(config.baseUrl);
    await super.waitForPageLoad();
  }

  async fadedShortSleeveTshirts(): Promise<boolean> {
    return await this.isElementVisible(selectors.fadedShortSleeveTshirts);
  }

  async blouse(): Promise<boolean> {
    return await this.isElementVisible(selectors.blouse);
  }

  async printedDress(): Promise<boolean> {
    return await this.isElementVisible(selectors.printedDress);
  }

  async printedDressTwo(): Promise<boolean> {
    return await this.isElementVisible(selectors.printedDressTwo);
  }

  async printedSummerDress(): Promise<boolean> {
    return await this.isElementVisible(selectors.printedSummerDress);
  }

  async printedSummerDressTwo(): Promise<boolean> {
    return await this.isElementVisible(selectors.printedSummerDressTwo);
  }

  async printedChiffonDress(): Promise<boolean> {
    return await this.isElementVisible(selectors.printedChiffonDress);
  }
}
