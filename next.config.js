const path = require('path');
const { env } = require('process');

module.exports = {
  images: {
    domains: [process.env.REMOTE_IMAGE_SOURCE]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}