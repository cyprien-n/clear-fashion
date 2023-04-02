const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://tournevisenrut:Soupeauxchoux92@clusterngn.thdwbs9.mongodb.net/test?retryWrites=true&writeConcern=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function Query(filter){
    try{
        await client.connect(); 
        const collection = client.db("clear-fashion").collection("products");
        const result = await collection.find({ filter }).toArray();
        console.log(result);
        console.log("#Items: ", result.length);
        return result;
    } finally {
        await client.close();
    }
}

async function ByBrand(brand) {
  try {
    await client.connect();

    const collection = client.db('clearfashion').collection('products');
    const products = await collection.find({ brand }).toArray();

    return products;
  } finally {
    await client.close();
  }
}

// async function ByBrand(brandon) {
//     Query({brandon})
//   }

async function getRecentProducts() {
    try {
      await client.connect();
  
      const collection = client.db('clearfashion').collection('products');
      const twoWeeksAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 14);
      const recentProducts = await collection.find({ timestamp: { $gte: twoWeeksAgo } }).toArray();
  
      return recentProducts;
    } finally {
      await client.close();
    }
  }

  async function main() {
    const brand = 'Montlimart';
    const products = await ByBrand(brand)
    //await scrapeWebsite(websites);
    //const recentProducts = await getRecentProducts();
    console.log(products);
  }
  
  main().catch(console.error);