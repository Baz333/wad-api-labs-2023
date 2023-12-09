import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const passwordValidator = (password) => {
    return passwordRegex.test(password);
}
UserSchema.path("password").validate(passwordValidator);

export default mongoose.model('User', UserSchema);