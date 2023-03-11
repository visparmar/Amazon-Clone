// const functions = require("firebase-functions");
const express = require("express");
const app = express();
require("dotenv").config();
const stripe=require("stripe")("sk_test_51Mia27SFyQxgXuo3ZlIUuQ6JvkFwtWUHO11m2YxwUYLyabatcBf6904htFFYZbqqzTmCRJiQZLwAKqGPxaG9aUeG007ngLFzJc")
const bodyParser=require("body-parser")
const cors = require("cors");


// const totalprice=useSelector((state)=>state.cartreducer.price)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use(cors())


app.post("/payment",cors(), async (req,res)=>{
    let {amount,id} = req.body
    console.log(id);

    try {
        const payment =await stripe.paymentIntents.create({
            amount,
            currency:"USD",
            description:"Hotel company",
            payment_method:id,
            confirm:true
        })

        console.log("Payment",payment)
        res.json({
            message : "Payment Successfull",
            success: true
        })
    } catch (error) {
        console.log("Error",error)
        res.json({
            message:"Payment failed",
            success:false
        })
        
    }
})



app.listen(process.env.PORT || 4000,()=>{
    console.log("Server is listening on port 4000");
})