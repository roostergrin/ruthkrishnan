// webpack.mix.js

let mix = require('laravel-mix');

mix
.sass('src/global.sass', 'styles/')
.sass('src/homepage.sass', 'styles/')
.js('src/test.js', 'js/')