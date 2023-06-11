var fs = require('fs');

var args = process.argv.slice(2);
var operation = args[0];
var file = args[1];

if (operation === undefined || file === undefined) {
    console.log("2 arguments required!");
    return;
}

try {
    if (fs.existsSync(file)) {
        if (operation === 'open') {
            var text = fs.readFileSync(file, 'utf8');
            console.log(`File ${file}, ${text}!`);
        }
        else if (operation === 'append') {
            var appendText = args[2];
            if (appendText === undefined) {
                console.log("No text to append!");
                return;
            }
            fs.appendFileSync(file, appendText);
            console.log(`Appended to file ${file}: ${appendText}`);
        }
        else if (operation === 'delete') {
            fs.unlinkSync(file);
            console.log(`Deleted file: ${file}`);
        } else {
            console.log(`Unknown command: ${operation}`);
        }
    } else {
        console.log("File doesn't exist!");
    }
} catch (err) {
    console.error(err);
}