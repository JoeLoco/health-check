const axios = require('axios');
var player = require('play-sound')(opts = {})

const args = process.argv.slice(2);

const url = args[0];

console.log("Starging healht checking....");
console.log(`URL: ${url}`);

setInterval(()=>{

  axios.get(url)
  .then(function (response) {
    process.stdout.write("🙏 ");
  })
  .catch(function (error) {
    process.stdout.write("😭 ");
    player.play('sounds/fail.wav');
  });

},5000);