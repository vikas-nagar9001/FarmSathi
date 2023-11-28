const puppeteer = require('puppeteer');

async function scrapeWebsite() {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('https://www.khetiwadi.com/mandi/indore-mandi-bhav');

  // Example: Extracting table data (adjust based on your HTML structure)
  const tableRows = await page.$$('table tr');

  // Example: Process each row and extract relevant data
  for (const row of tableRows.slice(1)) { // Skip the header row if it exists
    const columns = await row.$$('td');
    const crop = await columns[0].evaluate(td => td.innerText.trim());
    const price = await columns[1].evaluate(td => td.innerText.trim());
    const date = await columns[2].evaluate(td => td.innerText.trim());

    // Example: Update your database or table with the extracted data
    // Add your database update logic here
    // For demonstration purposes, print the extracted data
    console.log(`Crop: ${crop}, Price: ${price}, Date: ${date}`);
  }

  // Close the browser
  await browser.close();
}

// Run the scraping function
scrapeWebsite().then(() => console.log('Scraping and updating completed successfully!')).catch(error => console.error(`Error: ${error}`));










<script>
const puppeteer = require('puppeteer');

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://www.khetiwadi.com/mandi/indore-mandi-bhav');

const data = await page.evaluate(() => {
    const rows = document.querySelectorAll('.table-data-row');
    return Array.from(rows, row => {
      const columns = row.querySelectorAll('td');
      return Array.from(columns, column => column.textContent.trim());
    });
  });

  console.log('Scraped data:', data);

  await browser.close();
})();


    </script>