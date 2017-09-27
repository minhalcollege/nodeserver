var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var images = [
  {link: 'http://www.freeiconspng.com/uploads/pictures-icon-22.gif', name:"icon22"},
  {link: 'http://www.freeiconspng.com/uploads/multimedia-photo-icon-31.png', name:"icon31"},
  {link: 'http://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg', name:"icon22"},
]




/* GET home page. */
router.get('/api/students', function(req, res) {
  res.json({title: 'HomePage', user:'Moshe', images: images});
 });
 

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', {title: 'HomePage', user:'Moshe', images: images});
});



module.exports = router;
