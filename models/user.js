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
})