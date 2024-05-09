import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:{
        type:"String"
    },
    body:{
        type:"String"
    },
    userId:{
        type:"String",
        required:true
    }
})

const Note = new mongoose.model("Note",noteSchema);
export default Note;