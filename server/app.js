const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const businessOwner = require("./routes/businessOwner")
const category = require("./routes/category")
const gift = require("./routes/gift")
const greetingCard = require("./routes/greetingCard")
const user = require("./routes/user")
var morgan = require('morgan')

// const expl = require("./routes/expl")



mongoose.connect(process.env.DATABASE || "mongodb://localhost:27017/giftsdb").then(() => {
   console.log("connected to mongo db");
}).catch(err => { console.log("kkj", err) })

const app = express();
app.use(express.json());
//אם רוצים להפעיל את הפוסטמן צריך לירק את הפונקציה cors()
app.use(cors());
app.use(morgan("dev"));
console.log("xxxxxxxxxxxxx")

app.use("/businessOwners", businessOwner);
app.use("/categories", category);
app.use("/gifts", gift);
app.use("/greetingCards", greetingCard);
app.use("/users", user);
// app.use("/expl", expl);


app.listen(process.env.PORT || "5000", () => {
   console.log("listening on port " + (process.env.PORT || "5000"));
})
