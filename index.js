import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //console.log(req.rawHeaders);
    res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Phone Number : <p>12334556</p> </h1>")
})

app.get("/about", (req, res)=> {
    res.send("<p>VIT Bhopal University</p>")
})

app.listen(port, ()=> {
    console.log(`Server started on port ${port}`);
})
