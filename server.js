const express = require("express");
const { Storage } = require("@google-cloud/storage");

const app = express();
const port = process.env.PORT || 8080;

const storage = new Storage();
const bucketName = "your-bucket-name";

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        // const [files] = await storage.bucket(bucketName).getFiles();

        res.render("index");
    } catch (error) {
        console.error("Error fetching files:", error);
        res.status(500).send("Error fetching files");
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});




