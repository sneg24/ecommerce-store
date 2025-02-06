# E-Commerce Store

This is an e-commerce store built with Next.js, integrating a headless CMS (Sanity.io or Shopify API), and Stripe payment gateway.

## Features

- Stripe payment gateway integration
- Product search & filtering
- Dynamic pages using server-side rendering
- Cart & Checkout system
- Headless CMS (Sanity.io, Contentful, or Shopify API)

## Live Demo

Check out the live demo of the project: [Live Demo](ecommerce-store-cnbmz2hdy-snehals-projects-ecbee2cb.vercel.app)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your CMS client (`sanity.js` or `shopify.js`)
4. Set up your Stripe keys (`stripe.js`)
5. Run the development server: `npm run dev`

## File Structure

- `components/`: Contains React components
- `context/`: Contains React context for managing state
- `lib/`: Contains CMS and Stripe client configurations
- `pages/`: Contains Next.js pages and API routes
- `public/`: Contains static assets
- `styles/`: Contains global CSS styles
- `.gitignore`: Specifies files to be ignored by Git
- `package.json`: Contains project metadata and dependencies
- `README.md`: Project documentation
