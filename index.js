require("dotenv").config();
const sequelize = require("./lib/sequelize");
const userModel = require("./models/user");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json())

sequelize.sync().then(()=>{
    console.log("Database connected and synced")
}).catch(error=>{
    console.log("Unable to connect to database", error);
})


app.get("/users", async (req, res)=>{
    try{
        let users = await userModel.findAll();
        res.status(200).json({users});
    }catch(error){
        res.status(500).json({error: "Failed to fetch all users from database"});
    }
    
})
app.get("/users/:id", async (req, res)=>{
    let id = parseInt(req.params.id);
    try{
        let user = await userModel.findByPk(id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({user});
    }catch(error){
        res.status(500).json({error: "Failed to fetch user from database"});   
    }
    
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server is listening on PORT ${PORT}`);
})