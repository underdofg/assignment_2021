const https = require("https");
const destination = require("./desination");

const ipWorker = async (input) => {
  const { ip_address, username } = input;

  let result = {
    ip_address : ip_address,
    username : username
  };
  
  let body = "";
  let link = `https://ipapi.co/${ip_address}/json/?key=zEThXoSTOJSP6ADwfGLlxSGSvgFhpSAaTd1B1tSZyfIPiSlDpp`;

  https.get(link, function (resp) {
    resp.on("data", function (data) {
      body += data;
    });
    resp.on("end", function () {
      let parseData = JSON.parse(body);

      // check error
      if (parseData.error !== true) {
        let address = {};
        address.country_code = parseData.country_code;
        address.country_name = parseData.country_name;
        result.address = address;

        //  sending to Destination 
        destination(result);
      } else {
        result.reason = parseData.reason;

        // sending to Destination
        destination(result);
      }
    });
  });
};

module.exports = ipWorker;