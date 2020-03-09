const priceData = require('./misoPrice.json');
const nodesData = require('./miso.json');

var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/miso', function() {
  // Load Mongoose models
  seeder.loadModels(['models/MisoPriceSchema.js']);
  seeder.loadModels(['models/nodesSchema.js']);

  // Clear specified collections
  seeder.clearModels(['misoPrice'], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(priceData, function() {
      seeder.disconnect();
    });
  });
    seeder.clearModels(['nodes'], function() {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(nodesData, function() {
        seeder.disconnect();
      });
    });
});
