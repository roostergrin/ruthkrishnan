// webpack.mix.js

let mix = require('laravel-mix');

mix
.sass('src/global.sass', 'styles/')
.sass('src/homepage.sass', 'styles/')
.js('src/resources/gmaps.js', 'js/')
.copy('src/resources/mapStyles.json', 'js/')