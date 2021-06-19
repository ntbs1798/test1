import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema = new Schema
({
    FullName: String,
    EmalAddress: String,
    ContactNumber: String
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model;