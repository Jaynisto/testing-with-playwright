import { test, expect } from '@playwright/test';

// Reset the counter before each test
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8081/reset');
});

test("Logging in", async ({ page }) => {
  await page.goto('http://localhost:8081/login');
  await page.fill('#textfield', 'Fanie');
  await page.click('#login-btn');
  const greetingUser = await page.textContent("#greeting");
  await expect(greetingUser).toEqual("Hello, Fanie");
});

test("Incrementing Once", async ({ page }) => {
  await page.goto('http://localhost:8081/login');
  await page.fill('#textfield', 'Johnson');
  await page.click('#login-btn');

  // Incrementing
  await page.click('#add-btn');
  const incrementCounter = await page.textContent("#counter");
  await expect(incrementCounter?.trim()).toEqual("Your counter value is 1.");
});

test("Incrementing Twice", async ({ page }) => {
  await page.goto('http://localhost:8081/login');
  await page.fill('#textfield', 'Johnson');
  await page.click('#login-btn');

  // Incrementing
  await page.click('#add-btn');
  const incrementCounter = await page.textContent("#counter");
  await expect(incrementCounter?.trim()).toEqual("Your counter value is 2.");
});


test("Decrementing Once", async ({ page }) => {
  await page.goto('http://localhost:8081/login');
  await page.fill('#textfield', 'Johnson');
  await page.click('#login-btn');

  // Decrementing
  await page.click('#sub-btn')
  const decrementCounter = await page.textContent("#counter")
  await expect(decrementCounter?.trim()).toEqual("Your counter value is 1.")
});

test("Clearing The Counter", async ({ page }) => {
  await page.goto('http://localhost:8081/login');
  await page.fill('#textfield', 'Johnson');
  await page.click('#login-btn');

  // Decrementing
  await page.click('#sub-btn')
  const decrementCounter = await page.textContent("#counter")
  await expect(decrementCounter?.trim()).toEqual("")
});


test("Logging Out", async ({ page }) => {
  await page.goto('http://localhost:8081/login');
  await page.fill('#textfield', 'Johnson');
  await page.click('#login-btn'); 

  // Logging out
  await page.click('#logout-btn');
  console.log("Current URL after clicking logout:", await page.url());
  await expect(page.url()).toContain('http://localhost:8081/');
});







  


