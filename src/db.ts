// const mongoose = require('mongoose');

// export default () => {
//   function connect() {
//     mongoose.connect('mongodb://localhost', function(err) {
//       if (err) {
//         console.error('mongodb connection error', err);
//       }
//       console.log('mongodb connected');
//     });
//   }
//   connect();
//   mongoose.connection.on('disconnected', connect);
//   require('./models/Projects.js');
// };