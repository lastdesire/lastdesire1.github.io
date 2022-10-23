const express = require("express");
const commentRouter = require("./routes/comment.routes")

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use('/api', commentRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

app.get('/api', (req, res) => {
    res.json({message: "APP.GET.API.RIGHT.HERE.MATE"
    })
})




