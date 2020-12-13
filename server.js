const http = require("http");
const fs = require("fs");

const dir = ""; // Put the directory path of your image folder here
fs.readdir(dir, (err, files) => {
    // Error
    if (err) {
        console.log(err);
        return;
    }

    // Remove any file that is not .jpg or .png
    for (i = 0; i < files.length; i++)
        if (!/(jpg|png)$/.test(files[i]))
            files.splice(i, 1);

    // HTTP Server
    http.createServer((req, res) => {
        res.statusCode = "200";
        var r = Math.floor(Math.random() * files.length);
        console.log(files[r]);
        fs.createReadStream(dir + files[r]).pipe(res);
    }).listen(80);
});