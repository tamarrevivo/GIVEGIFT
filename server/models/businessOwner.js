const mongoose = require("mongoose");
const businessOwnerSchema = new mongoose.Schema({

    //שם 
    nameBusinessOwner: {
        type: String,
        minLength: 2,
        required: true
    },
    // טלפון של בעל החנות
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} המספר אינו תקין`
        },
        required: true
    },
    //כתובת
    address: {
        type: String,
        //required: true
    },
    //תשלומים
    payments: [{
        date: Date,
        uiId: String,
     // required: true,
        sum: Number   
    }],
    // תמונות של פרסומות
    photoAdvertising: [{
        imageUrl: String,
        countShow: Number,
        //required: true
    }],
    //מה לעשות איזה דרך????????????????
    //רשימת קטגוריות 
    categories: { type: [String], required: true },
//    categories:[ {
//     //required: true,
//     type: mongoose.SchemaTypes.ObjectId,
//     ref: "categories"
//     }],
    //משתמש
    // user: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "users"
    // }

});
const BusinessOwner = mongoose.model("businessOwners", businessOwnerSchema);
module.exports = BusinessOwner;