var fs = require("fs");
var convert = require("xml-js");

fs.readFile(__dirname + "/ItemList.xml", function (err, data) {
  /* parser.parseString(data, function (err, result) {
    console.dir(result.ItemList.Section[0].$.Index);
    console.dir(result.ItemList.Section[0].$.Name);
    console.log("Done");
  }); */

  var result1 = convert.xml2json(data, { compact: true, spaces: 4 });
  fs.writeFileSync("result.json", result1, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Saved ok");
  });
});
