import mongoose from "mongoose";
// const uri = "mongodb+srv://ramveersingharaon:<password>@cluster0.fo8a75a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const uri = "mongodb+srv://ramveersingharaon:ramveersingharaon@cluster0.fo8a75a.mongodb.net/my_database?retryWrites=true&w=majority&appName=Cluster0"


export default mongoose.connect(uri).then(()=>{
    console.log("The Database is connected successfully")
}).catch((e)=>{
    console.log("The Database is not connected successfully" +e)
})