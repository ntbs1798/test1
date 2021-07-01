import mongoose from "mongoose";
const Schema = mongoose.Schema; //Schema alias

const ContactSchema1 = new Schema
({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String
},
{
    collection: "contacts1"
});

const Model = mongoose.model("Contact1", ContactSchema1);
export default Model;