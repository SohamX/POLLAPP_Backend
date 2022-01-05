const express=require('express');
const router=express.Router();
var MongoClient=require('mongodb').MongoClient;
const app= express();
const mongoose= require('mongoose');

const Users = require("../model/usr");
const db='mongodb+srv://pollapp:poll192807@cluster0.elwcj.mongodb.net/pollapp?retryWrites=true&w=majority'





router.post("/u", async (req, res) => {
	const {
		mail,
        name,
        givenName,
	} = req.body;
    try {
		const users = new Users({
			mail,name,givenName
		});
		users
			.save()
			.then(() => {
				console.log("ZA WARUDO");
				return res.status(200).json({ Success: "User  Created" });
			})
			.catch((err) => {
				console.log(err);
				return res.status(400).json({ Error: "Error creating user" });
				
			});
	} catch (error) {
		console.log(error);
		return res.status(400).json({ Error: "Error creating user" });
	}
});











module.exports = router;
