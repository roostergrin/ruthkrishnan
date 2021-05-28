// webpack.mix.js

let mix = require('laravel-mix');

mix
.sass('src/sass/global.sass', 'styles/')
.sass('src/sass/pages/homepage.sass', 'styles/')
.sass('src/sass/pages/newdevelopments.sass', 'styles/')
.js('src/scripts/newdevelopments/newdevelopments.js', '/js')
.js('src/scripts/resources/gmaps.js', 'js/')
.copy('src/scripts/resources/mapStyles.json', 'js/')