import { Page } from 'playwright';
import { BasePage } from './basePage';
import { AddToCartPage } from './addToCartPage';
import { selectors } from '../pageobjects/selectors';

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async printedSummerDress(): Promise<void> {
    await this.waitAndClick(selectors.printedSummerDress);
  }

  async verifyTitle(): Promise<string> {
    return await this.getTitle();
  }

  async blackColour(): Promise<string> {
    await this.waitAndClick(selectors.colourBlack);
    return selectors.itemSelected;
  }

  async blackColourImageUpdated(): Promise<boolean> {
    return await this.isElementVisible(selectors.imagePicture);
  }

  async orangeColour(): Promise<string> {
    await this.waitAndClick(selectors.colourOrange);
    return selectors.itemSelected;
  }

  async orangeColourImageUpdated(): Promise<boolean> {
    return await this.isElementVisible(selectors.imagePicture);
  }

  async blueColour(): Promise<string> {
    await this.waitAndClick(selectors.colourBlue);
    return selectors.itemSelected;
  }

  async blueColourImageUpdated(): Promise<boolean> {
    return await this.isElementVisible(selectors.imagePicture);
  }

  async yellowColour(): Promise<string> {
    await this.waitAndClick(selectors.colourYellow);
    return selectors.itemSelected;
  }

  async yellowColourImageUpdated(): Promise<boolean> {
    return await this.isElementVisible(selectors.imagePicture);
  }

  async colourSelected(): Promise<boolean> {
    return await this.isElementVisible(selectors.colourSelected);
  }

  async navigateToHomePage(): Promise<void> {
    await this.waitAndClick(selectors.headerLogo);
  }

  async addQuantity(): Promise<void> {
    await this.waitAndType(selectors.quantityWanted, selectors.numberOfItems);
    const cartPage = new AddToCartPage(this.page);
    await cartPage.clickAddToCart();
    await cartPage.cartSuccessMessage();
    await cartPage.cartAddedMessage();
    await this.waitAndClick(selectors.checkout);
  }

  async verifyTotalPrice(): Promise<string> {
    return await this.getText(selectors.productPrice);
  }
}
