import mongoose from 'mongoose';
import Model from './models/modelModel.js';
import Vehicle from './models/vehicleModel.js';
import dotenv from 'dotenv';

dotenv.config();

let models = {
  name: 'GOLF MK8',
  hour_price: 6.49,
};

// let vehicle = [
//   {
//     model_id: '6114e87d486d6b619c068644',
//     number_plate: 'FM-1234',
//     country_location: 'LV',
//   },
//   {
//     model_id: '6114e87d486d6b619c068644',
//     number_plate: '307RTB',
//     country_location: 'EE',
//   },
// ];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    Model.insertMany(models);
    // Vehicle.insertMany(vehicle);

    console.log('Data sended to MongoDB');
  });
