import client from '../../lib/sanity'; // or shopifyClient from '../../lib/shopify'

export default async function handler(req, res) {
  const query = '*[_type == "product"]'; // Sanity query, adjust for Shopify
  const products = await client.fetch(query); // Adjust for Shopify

  res.status(200).json(products);
}