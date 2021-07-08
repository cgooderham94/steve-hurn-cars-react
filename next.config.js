const path = require('path');

module.exports = {
  images: {
    domains: [process.env.REMOTE_IMAGE_SOURCE]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}