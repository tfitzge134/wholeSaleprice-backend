const data = require('./misoPrice.json');
var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/miso', function() {
  // Load Mongoose models
  seeder.loadModels(['db/models/MisoPriceSchema.js']);

  // Clear specified collections
  seeder.clearModels(['misoPrice'], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});
