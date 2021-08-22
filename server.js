const express = require('express'); const app = express();
var config = require('./serverconfig.json');
app.use(express.static('/Main'))

/*
app.get(config.Mainpage.Page, (req, res) => {
  res.send('Hello World!')                       //Main page
})

app.get(config.TubbyGames.Page, (req, res) => {
  res.send('Hello World!')                       //TubbyGames
})

app.get(config.Rhythm_Pog.Page, (req, res) => {
  res.send('Hello World!')                       //Rhythm POG
})
*/
app.listen(80)