import { Schema, model, models } from "mongoose"

// To create a new schema, the "newSchema" keyword is used

const userSchema = newSchema({
    
    // Now here, one by one all atributes  of our User will be added to this schema.

    email: {
        type: String, //  This means that it can only store strings in MongoDB
        unique: [true, "Email already exists!"], //  The true parameter makes sure that every email must be different for new users.
        required: [true, "Email is required!"] //  The second parameter is a validation message if the field is empty.
    },

    // Now from here, all other needed  attributes are going to follow the same pattern as above.

    userName: {
        type: String,
        required: [true, "User name is required!"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },

    image: {
        type: String
    }
})

// The "models" object is provided by the mongoose library and stores all the registered models.
// If a model named "User" already exists in the "models" object, it asigns the existing model to the "User" variable.
// This prevents redefinition of models and existing model is reused
// If a model named "User" does not exist in the "models" object, the "model" function from mongoose is called to create a new model.
// The newly created model is then assigned to te "User" variable.

const User = models.User || model("User", userSchema);

export default User