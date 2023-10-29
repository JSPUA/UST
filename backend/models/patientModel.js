import mongoose from "mongoose";

// models/patient.js

const patientSchema = new mongoose.Schema({
  
  firstName: String,
  surname: String,
  dob: Date,
  mrnNo: String,
  icNo: String,
  gender: String,
  mobileNo: String,
  email: String,
  ethnicity: String,
  password: String,
  nextOfKin: {
    firstName: String,
    surname: String,
    mobileNo: String,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
