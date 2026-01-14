import dotenv from 'dotenv';

dotenv.config();

export const config = {
  timeout: parseInt(process.env.TIMEOUT || '2000'),
  waitTime: parseInt(process.env.WAIT_TIME || '5000'),
  jestTimeout: parseInt(process.env.JEST_TIMEOUT || '30000'),
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
  headless: process.env.HEADLESS !== 'false',
  browserType: process.env.BROWSER_TYPE || 'chromium',
  logLevel: process.env.LOG_LEVEL || 'info',
};
