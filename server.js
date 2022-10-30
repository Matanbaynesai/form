const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	phone: Number,
	email: String,
});
const userModel = mongoose.model("user", UserSchema);
mongoose
	.connect(
		"mongodb+srv://matanb:matanb@cluster0.apqcfch.mongodb.net/?retryWrites=true&w=majority"
	)
	.then(() => console.log("connected to database"))
	.catch((err) => console.log(err));
app.get("/getusers", async (req, res) => {
	userModel.find().then((users) => res.json(users));
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/approval.html", (req, res) => {
	res.sendFile(__dirname + "/approval.html");
});

app.get("/style.css", function (req, res) {
	res.sendFile(__dirname + "/" + "style.css");
});

app.get("/main.js", function (req, res) {
	res.sendFile(__dirname + "/" + "main.js");
});

app.post("/", async (req, res) => {
    try{
        let newUser = await new userModel({
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            phone: req.body.phone,
            email: req.body.email,
        });
        await newUser.save();
    }catch(err){
        res.status(400);
    }
	res.redirect("/approval.html");
});
app.listen(3000, () => {
	console.log("server is running");
});
