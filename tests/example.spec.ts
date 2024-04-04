import { test, expect } from '@playwright/test';


test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:8081/reset');
})


test("Logging in", async ({page}) => {
  await page.goto('http://localhost:8081/login');
  await page.fill('#textfield', 'Fanie');
  await page.click('#login-btn')
  const greetingUser = await page.textContent("#greeting")
  await expect(greetingUser).toEqual("Hello, Fanie")
});

test("Incrementing", async ({page})=>{
  await page.goto('http://localhost:8081/login');
  await page.fill('#textfield', 'Fanie');
  await page.click('#login-btn')
  // Incrementing
  await page.click('#add-btn')
  const incrementCounter = await page.textContent("#counter")
  await expect(incrementCounter?.trim()).toEqual("Your counter value is 1.")
});


//   // Decrementing
//   await page.click('#decrement')
//   const decrementCounter = await page.textContent("#counter")
//   await expect(decrementCounter?.trim()).toEqual("")

  
//   // Logging out
//   await page.click('#logout-btn');
//   console.log("Current URL after clicking logout:", await page.url());

//   await expect(page.url()).toContain('http://localhost:8081/');
// })