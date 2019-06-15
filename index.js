// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!! WARNING: ONLY CHANGE THIS FILE IF OUTPUT FOLDER CHANGES !!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
'use strict';

// This determines which build to use based on the `NODE_ENV` of your end user.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/production/react-yandex-maps.js');
} else {
  module.exports = require('./dist/development/react-yandex-maps.js');
}
