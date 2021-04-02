var express = require('express');  
var app = express();  
fs = require('fs');
app.get('/myform', function(req, res){  
    let myObject={dateExpose:req.query.dateExpose,sujet:req.query.sujet
      ,tags:req.query.tags,lien:req.query.lien,membres:req.query.membres}
    let data = fs.readFileSync('users.json');
    let users = JSON.parse(data);
    users.push(myObject);
    fs.writeFile('users.json', JSON.stringify(users), function (err) {
        if (err) return console.log(err);
      });
      res.redirect('http://127.0.0.1:5500/list.html')
    
});  
app.listen(3000)