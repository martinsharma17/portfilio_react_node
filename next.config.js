const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'media.dev.to']
  }
}
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For static exports
    // domains: ['media2.dev.to'], // Add external domains here
  },
  assetPrefix: isProd ? '/portfolio_react_node/' : '',
  basePath: isProd ? '/portfolio_react_node' : '',
  output: 'export',
};

module.exports = nextConfig; // Or export default if using ES modules
