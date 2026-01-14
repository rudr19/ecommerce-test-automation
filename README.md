# 🧪 E-Commerce Test Automation Framework

<div align="center">

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Jest-27.5-red)](https://jestjs.io/)
[![Playwright](https://img.shields.io/badge/Playwright-1.48-green)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

**Professional SDET Test Automation Framework**

A production-grade end-to-end testing framework built with TypeScript, Jest, and Playwright for enterprise-level test automation.

[Quick Start](#-quick-start) • [Features](#-features) • [Documentation](#-documentation) • [Testing](#-testing) • [Contributing](#-contributing)

</div>

---

## 🎯 Overview

This is a complete SDET (Software Development Engineer in Test) framework designed to demonstrate enterprise-level automation practices. It provides a robust, maintainable, and scalable foundation for testing modern web applications.

### ✨ Key Highlights

- ✅ **Type-Safe TypeScript** - Full type checking with strict mode
- ✅ **Page Object Model** - Clean, maintainable test architecture
- ✅ **Cross-Browser Testing** - Chromium, Firefox, and WebKit support
- ✅ **Comprehensive Logging** - Winston-based logging system
- ✅ **HTML Test Reports** - Beautiful, interactive test reports
- ✅ **CI/CD Ready** - GitHub Actions integration
- ✅ **Docker Support** - Containerized test execution
- ✅ **Code Quality Tools** - ESLint and Prettier configuration

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher
- **Git** installed

### Installation

```bash
# Clone the repository
git clone https://github.com/rudr19/ecommerce-test-automation.git
cd ecommerce-test-automation

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env
```

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests in parallel
npm run test:parallel

# Run specific test suites
npm run test:products   # Product tests
npm run test:cart       # Shopping cart tests
npm run test:colors     # Color selection tests

# Generate coverage reports
npm run test:coverage
```

---

## ⭐ Features

### Testing Capabilities
- 🎭 Cross-browser automation (Chromium, Firefox, WebKit)
- 📝 Type-safe test writing with TypeScript
- ⚡ Parallel test execution
- 📊 Coverage reporting
- 🎥 Screenshot and video capture on failures
- 📋 Detailed HTML test reports

### Code Quality
- 🔍 TypeScript strict mode
- 📏 ESLint code linting
- 💅 Prettier code formatting
- ✅ Type checking validation

### DevOps & CI/CD
- 🐳 Docker containerization
- ⚙️ GitHub Actions workflows
- 📦 Automated dependency management
- 🔐 Secure environment configuration

### Logging & Monitoring
- 📊 Winston logging system
- 📈 Test metrics and analytics
- 🔗 Structured JSON logs
- 📁 Organized log files

---

## 📂 Project Structure

```
ecommerce-test-automation/
├── pages/                    # Page Object Models
│   ├── basePage.ts          # Base page functionality
│   ├── landingPage.ts       # Landing page
│   ├── productPage.ts       # Product details page
│   └── addToCartPage.ts     # Shopping cart page
│
├── tests/                    # Test Suites
│   ├── productNames.test.ts          # Product visibility tests
│   ├── addToCart.test.ts             # Cart functionality tests
│   └── toggleProductColour.test.ts   # Color selection tests
│
├── pageobjects/              # Selectors & Locators
│   └── selectors.ts          # CSS/XPath selectors
│
├── utils/                    # Utilities & Helpers
│   └── logger.ts             # Winston logger configuration
│
├── config.ts                 # Configuration management
├── jest.config.js            # Jest configuration
├── tsconfig.json             # TypeScript configuration
├── Dockerfile                # Docker image definition
├── docker-compose.yml        # Docker Compose setup
├── .github/
│   └── workflows/
│       └── test.yml          # GitHub Actions CI/CD
└── README.md                 # This file
```

---

## ⚙️ Configuration

All configuration is managed through environment variables in `.env` file:

```env
BASE_URL=https://www.saucedemo.com
BROWSER_TYPE=chromium
HEADLESS=true
TIMEOUT=2000
WAIT_TIME=5000
JEST_TIMEOUT=30000
LOG_LEVEL=info
```

Copy `.env.example` and customize for your environment:

```bash
cp .env.example .env
```

---

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Watch Mode (Re-run on Changes)
```bash
npm run test:watch
```

### Parallel Execution (4 Workers)
```bash
npm run test:parallel
```

### Generate Coverage Report
```bash
npm run test:coverage
```

### Debug Mode
```bash
npm run test:debug
```

---

## 🔍 Code Quality

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint          # Check for issues
npm run lint:fix      # Fix issues automatically
```

### Code Formatting
```bash
npm run format
```

---

## 🐳 Docker

### Build and Run
```bash
docker build -t sdet-tests .
docker run sdet-tests
```

### Using Docker Compose
```bash
docker-compose up
```

---

## 📊 Test Reports

### HTML Test Report
After running tests, view the interactive HTML report:

```bash
# Report is generated at:
open html-test-report/test-report.html
```

### Coverage Report
```bash
# View coverage report:
open coverage/index.html
```

---

## 🔄 CI/CD Pipeline

GitHub Actions automatically runs tests on:

- ✅ Every push to `master` branch
- ✅ Every pull request
- ✅ Daily schedule (2 AM UTC)

The pipeline:
1. Checks out code
2. Sets up Node.js 18.x and 20.x
3. Installs dependencies
4. Runs type checking
5. Runs linting
6. Executes tests in parallel
7. Generates coverage reports
8. Uploads test artifacts

---

## 📚 Page Object Model

### Example Page Object

```typescript
import { Page } from 'playwright';
import { BasePage } from './basePage';
import { selectors } from '../pageobjects/selectors';

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickProduct(): Promise<void> {
    await this.waitAndClick(selectors.product);
  }

  async getProductName(): Promise<string> {
    return await this.getText(selectors.productName);
  }
}
```

### Example Test

```typescript
import { ProductPage } from '../pages/productPage';

describe('Product Tests', () => {
  let productPage: ProductPage;

  beforeAll(async () => {
    productPage = new ProductPage(page);
    await productPage.open();
  });

  it('should display product name', async () => {
    const name = await productPage.getProductName();
    expect(name).toBeTruthy();
  });
});
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Standards
- Follow TypeScript strict mode
- Run `npm run lint:fix` before committing
- Ensure all tests pass: `npm test`
- Update documentation as needed

---

## 📋 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **TypeScript** | 4.9.5 | Type-safe development |
| **Jest** | 27.5.1 | Testing framework |
| **Playwright** | 1.48.0 | Browser automation |
| **Node.js** | 18+ | Runtime environment |
| **Winston** | 3.14.2 | Logging system |
| **ESLint** | 9.16.0 | Code linting |
| **Prettier** | 3.3.3 | Code formatting |

---

## 📞 Support

- 📖 [Playwright Documentation](https://playwright.dev/)
- 🧪 [Jest Documentation](https://jestjs.io/)
- 📘 [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- 🔗 [Page Object Model Pattern](https://playwright.dev/docs/pom)

---

## 📄 License

This project is licensed under the **ISC License** - see the LICENSE file for details.

---

## 👤 Author

**Rudra Kumar Pandey**
- GitHub: [@rudr19](https://github.com/rudr19)
- SDET | Test Automation Engineer

---

<div align="center">

**Made with ❤️ for the QA community**

*A production-grade SDET automation framework*

</div>
