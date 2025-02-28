const DoctorModel= require("../models/doctorModel");
const PatientModel= require("../models/patientModel");

const doctorDisplay=async(req, res)=>{
   const {id} =req.query;
   try {
     const Doctor = await DoctorModel.findById(id);
     console.log(Doctor);
     res.status(200).send(Doctor);
   } catch (error) {
      console.log(error);
   }
}

const patientSave=async(req, res)=>{
 
    const {docid, name, disease,  city, mobile, email} = req.body; 
    const pateint = await PatientModel.create(
        {
            name:name,
           disease:disease, 
           city:city,
           mobile:mobile,
           email:email,
           doctorId:docid
        }
    )
    console.log(pateint);
     res.status(200).send({msg:"Your Appointment Booked!"});
}

module.exports={
    doctorDisplay,
    patientSave
}