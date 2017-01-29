var express = require('express')
var morgan = require('morgan');
var serveStatic = require('serve-static')
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var uuid = require('node-uuid');

var app = express()
app.use(morgan('combined'))

// deprecated
// app.use(bodyParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(methodOverride());
//app.use(serveStatic(__dirname + '/prod'))
app.use(serveStatic(__dirname + '/public'))

var router = express.Router();

// recipe api
var posts = [{
    id: "f588d038-0cfd-4e4b-add7-959c332081bc",
    userid: "ghqf0d90-306e-11e5-80b5-5b0f99bb025c",
    title: "Cheese Omelette",
    body: "Crack the eggs into a mixing bowl, season with a pinch of sea salt and black pepper, then beat well with a fork until fully combined. Place a small non-stick frying pan on a low heat to warm up. Grate the cheese onto a board and set aside. Add ½ tablespoon of oil to the hot pan, then carefully pour in the eggs.",
    new: true
}, {
    id: "f588d038-0cfd-4e4b-add7-959c332081bc",
    userid: "jaaf0d90-306e-11e5-80b5-5b0f99bb025c",
    title: "Mushroom Omelette",
    body: "Omelettes are a breakfast classic. They are quick and easy to make. Mushrooms are a great omelette filling, and can be easily upgraded with other things, such as cheese or onion. If you don't like eggs for breakfast, you can always have your omelette for lunch or dinner.",
    new: true
}, {
    id: "f588d038-0cfd-4e4b-add7-959c332081bc",
    userid: "6eaf0d90-306e-11e5-80b5-5b0f99bb025c",
    title: "Baked Beans on Toast",
    body: "Preheat oven to 350 degrees F. In a Dutch oven, mix onion, pork and beans, mustard, maple syrup, light brown sugar, ketchup, and lemon juice. Top with the bacon pieces. Bake, covered, for 45 to 60 minutes.",
    new: true
}, {
    id: "5503b3f0-306e-11e5-8a3f-abf51e86c8d3",
    userid: "6eaf0d90-306e-11e5-80b5-5b0f99bb025c",
    title: "French Toast",
    body: "Beat egg, vanilla and cinnamon in shallow dish. Stir in milk. Dip bread in egg mixture, turning to coat both sides evenly. Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until browned on both sides.",
    new: false
}, {
    id: "5ff02e60-306e-11e5-b55a-9f922d0a88e3",
    userid: "8db40830-306e-11e5-8d94-ef4b65a47e73",
    title: "Rocky Mountain Egg",
    body: "Rocky Mountain toast, A.K.A. bird's nest, cowboy eggs, egg-in-the-hole, eggs in a blanket, the Elephant Egg Bagel, frog in a hole, gas house eggs, moon eggs, and one-eyed monster.",
    new: false
}, ];

router.get('/post', function (req, res) {
    res.send(posts);
});

router.post('/post', function (req, res) {
    var recipe = req.body;
    recipe.id = uuid.v1();
    recipes.push(recipe);
    res.send(recipe);
})

app.use('/api', router);

var url = process.env.IP || '0.0.0.0'
var port = 5217;
app.set('port', process.env.PORT || port)

var server = app.listen(app.get('port'), url, function () {
    console.log('Static server listening url %s on port %s', url, server.address().port);
})
