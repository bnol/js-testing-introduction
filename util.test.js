// const {
//   generateText,
//   validateInput,
//   checkAndGenerate,
//   createElement,
// } = require("./util");

// test("should output name and age", () => {
//   const text = generateText("BnoL", 30);
//   expect(text).toBe("BnoL (30 years old)");
//   const text2 = generateText("Leo", 20);
//   expect(text2).toBe("Leo (20 years old)");
// });

// test("should validate the input", () => {
//   expect(validateInput("BnoL", true, false)).toBe(true);
//   expect(validateInput("", true, false)).toBe(false);
//   expect(validateInput(20, false, true)).toBe(true);
//   expect(validateInput("", false, true)).toBe(false);
//   expect(validateInput(" ", true, false)).toBe(false);
//   expect(validateInput("phuc", true, true)).toBe(false);
// });

// test("should generate a valid text output", () => {
//   const text = checkAndGenerate("Phuong Trinh", 28);
//   expect(text).toBe("Phuong Trinh (28 years old)");
//   const text2 = checkAndGenerate("", 28);
//   expect(text2).toBe(false);
// });

// test("should create correct element", () => {
//   const element = createElement("div", "Hello World!", "test-class-name");
//   expect(element).toBeInstanceOf(HTMLDivElement);
//   expect(element.classList[0]).toEqual("test-class-name");
//   expect(element.textContent).toEqual("Hello World!");
// });

const puppeteer = require("puppeteer");
test("should create an element with text and correct class", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:5000");
  await page.click("#name");
  await page.type("#name", "BnoL");
  await page.click("#age");
  await page.type("#age", "30");
  await page.click("#submit");
  const finalText = await page.$eval(".user-item", el => el.textContent);
  expect(finalText).toBe("BnoL (30 years old)");
});
