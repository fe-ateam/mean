var mongoose = require('mongoose');

var costSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true, 'default': 0 },
  days: { type: Number, required: true, 'default': 1 }
});
var citySchema = mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  costs: [costSchema]
});
var City = mongoose.model('City', citySchema);

function createDefaultCities() {
  City.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      var city = new City();
      city.name = "San Jose";
      city.state = "CA";
      city.costs.push({ name: 'Meal, Inexpensive Restaurant', category: 'Food', amount: 10 });
      city.costs.push({ name: 'Meal, Mid-range Restaurant', category: 'Food', amount: 50 });
      city.costs.push({ name: 'Meal, Fastfood', category: 'Food', amount: 6 });
      city.costs.push({ name: 'Utilities', category: 'Utilities', amount: 177.11, days: 30 });
      city.costs.push({ name: '1-bedroom Apartment in City Centre', category: 'Rent', amount: 1965.00, days: 30 });
      city.costs.push({ name: '1-bedroom Apartment outside of Centre', category: 'Rent', amount: 1694.44, days: 30 });
      city.costs.push({ name: '3-bedroom big Apartment in City Centre', category: 'Rent', amount: 3070.71, days: 30 });
      city.costs.push({ name: '3-bedroom big Apartment outside of Centre', category: 'Rent', amount: 2575.00, days: 30 });
      city.save();
    }
  })
}

exports.createDefaultCities = createDefaultCities;