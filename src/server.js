const app = require("express")();
const stripe = require("stripe")("sk_test_vCvAKbPv2ruTcy8JGzIzlwt2008awzIziX");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
	console.log("Charge applied!");
	try {
		let {status} = await stripe.charges.create({
			amount: 2000,
			currency: "usd",
			description: "An example charge",
			source: req.body
		});
		console.log(status);
		console.log(req);
		res.json({status});
	} catch (err) {
		console.log(err);
		res.status(500).end();
	}
});

app.listen(9000, () => console.log("Listening on port 9000"));
