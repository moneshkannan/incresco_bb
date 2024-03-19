const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var jobSchema = new mongoose.Schema({
    role:{
        type:String,
        required:true,
    },
    company_name:{
        type:String,
        required:true,
        // unique:true,
    },
    experience:{
        type:Number,
        required:true,
    },
    date_posted:{
        type:Date,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    tech_stack:{
        type:[String],
        required:true,
    },
    salary:{
        type: Number
    },
    education:{
        type:[String]
    }
});

//Export the model
module.exports = mongoose.model('Job', jobSchema);