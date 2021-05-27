// webpack.mix.js

let mix = require('laravel-mix');

mix
.sass('src/global.sass', 'styles/')
.sass('src/homepage.sass', 'styles/')
.sass('src/pages/newdevelopments.sass', 'styles/')
.js('src/scripts/newdevelopments/newdevelopments.js', '/js')
.js('src/resources/gmaps.js', 'js/')
.copy('src/resources/mapStyles.json', 'js/')