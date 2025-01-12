import mongoose from "mongoose";
import bcrypt from "bcrypt"

const user = mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"]
    },
    email:{
        type: String,
        required: [true, "email address is required"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

// user.pre("save", async function(next) {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(this.password, salt);
//         this.password = hashedPassword;
//         next();
//       } catch (error) {
//         return next(error);
//       }
// })

export default mongoose.model('userData', user);

