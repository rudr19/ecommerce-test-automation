import { Page } from 'playwright';
import { BasePage } from './basePage';
import { selectors } from '../pageobjects/selectors';

export class AddToCartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async printedChiffonDress(): Promise<boolean> {
    return await this.isElementVisible(selectors.printedChiffonDress);
  }

  async clickChiffonDress(): Promise<void> {
    await this.waitAndClick(selectors.printedChiffonDress);
  }

  async clickAddToCart(): Promise<void> {
    await this.waitAndClick(selectors.addToCartButton);
  }

  async cartAddedMessage(): Promise<boolean> {
    return await this.isElementVisible(selectors.cartAddedMessage);
  }

  async cartSuccessMessage(): Promise<boolean> {
    return await this.isElementVisible(selectors.successMessage);
  }

  async cartCount(): Promise<string> {
    await this.waitAndClick(selectors.closeBtn);
    return await this.getText(selectors.itemCount);
  }
}
