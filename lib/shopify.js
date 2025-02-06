import fetch from 'isomorphic-fetch';

const shopifyClient = async (query) => {
  const response = await fetch('https://your-shopify-store.myshopify.com/api/2021-01/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': 'your-storefront-access-token',
    },
    body: JSON.stringify({ query }),
  });

  return response.json();
};

export default shopifyClient;