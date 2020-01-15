const spawn = require('child_process').spawn;
const express = require('express');
const app = express();

//server listening port
var PORT_IN = 9999;

app.set('view engine', 'ejs'); //set view engine to EJS
app.use('assets', express.static('assets')); //set static folder

app.get('/', async function(req, res){
  var disks, temp, ram_usage;
    
  try{
    //get storage usage
    disks = await spawncmd('df -h | head -n1');

    //get cpu temperature
    temps = await spawncmd('/opt/vc/bin/vcgencmd measure_temp');

    //get free memory
    ram_usage = await spawncmd('free -m);
  }
  catch(error){
    console.log("promise error: " + error);
  }
  res.render('index', {disks: disks, temps: temps});
})

app.listen(PORT_IN);

//input: bash command string
//returns a promise containing the bash command output
function spawncmd(cmd){
  return new Promise(function(resolve, reject){
    var proc = spawn('sh', ['-c', cmd]);
    proc.stdout.on('data', function(data){
      console.log('running proc');
      console.log('my data: ' + data);
      resolve(data);
    });
  });
}
