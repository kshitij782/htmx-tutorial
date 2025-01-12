import userModel from "../../models/userModel.js";

export const register = async(req, res) => {
    console.log("data --->", req.body);
    const {name,email,password} = req.body;

    if(!name || !email || !password){
    return res.status(400).send({ message: "All fields are required" });
    }

    try{
        const existingUser = await userModel.findOne({email: email});
        console.log("existing user",existingUser);
        if(existingUser){
            return res.send({message: "User already exists"});
        }

        const data = await new userModel({
            name,
            email,
            password
        });
        await data.save();  
        res.set("HX-Redirect", "/success");
        res.status(200).send({status: 'Success', msg: 'User registered successfully', data: data});
    } catch(err){
        console.error(err); 
        res.status(500).send({error: "Internal server error"});
    }
};