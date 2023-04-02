module.exports.saveData = async (data, website) => {
    const fs = require('fs');
    const path = require('path');
  
    // Define the path where you want to save the JSON file
    //const dir = 'C:\\Users\\nguye\\Desktop\\ClearFashion\\clear-fashion\\server\\scraping_results';
    const dir = "C:\\Users\\Cyprien\\OneDrive - De Vinci\\Documents\\ESILV\\A4\\Web application architectures\\clear-fashion\\server\\scraping_results";
    const fileName = `${website[0]}.json`;
    const filePath = path.join(dir, fileName);
  
    // Create the directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  
    // Write the scraped data to the JSON file
    await fs.promises.writeFile(filePath, data);
  
    // Put the JSON path in the website object
    website[3] = filePath;
  
    console.log(`\n${website[0]}'s scraped data saved to file.\n`);
  };