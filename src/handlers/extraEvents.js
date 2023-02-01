const boxConsole = require('box-console');
const set = require(`${process.cwd()}/Assets/Config/settings`)
module.exports = {
  async execute(client) {
    let sd = `Welcome to ${'Server Handler'.bold.blue} by ${'uptime.js.cool'.red}`;
    let sd_server = `Support:- ${`https://discord.gg/dfShKEzmBE`.brightGreen}`
    let Aayu5h = `Coded By ${`Aayu5h#1737`.brightCyan.bold}`;
    console.clear()
    boxConsole([sd, sd_server, Aayu5h]);
    // Console Logger
    client.logger = (data) => {
      var currentdate = new Date();
      let logstring = ` ${`${`${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()}`.brightBlue.bold} ${`│`.brightMagenta.bold}`
        }`
      if (typeof data == "string") {
        console.log(logstring, data.split("\n").map(d => `${d}`.green).join(`\n${logstring} `))
      } else if (typeof data == "object") {
        console.log(logstring, JSON.stringify(data, null, 3).green)
      } else if (typeof data == "boolean") {
        console.log(logstring, String(data).cyan)
      } else {
        console.log(logstring, data)
      }
    };
  }
}