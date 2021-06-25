// webpack.mix.js

let mix = require('laravel-mix');

mix
.sass('src/sass/global.sass', 'styles/')
.js('src/scripts/global.js', 'js/')
.js('src/scripts/resources/site-hero.js', 'js/')
.sass('src/sass/pages/homepage.sass', 'styles/')
.sass('src/sass/pages/newdevelopments.sass', 'styles/')
.js('src/scripts/pages/newdevelopments.js', 'js/')
.sass('src/sass/pages/single-newdevelopments.sass', 'styles/')
.js('src/scripts/pages/single-newdevelopments.js', 'js/')
.sass('src/sass/pages/neighborhoods.sass', 'styles/')
.js('src/scripts/pages/neighborhoods.js', 'js/')
.sass('src/sass/pages/blog.sass', 'styles/')
.sass('src/sass/pages/single-blog.sass', 'styles/')
.js('src/scripts/pages/blog.js', 'js/')
.js('src/scripts/pages/single-blog.js', 'js/')
.sass('src/sass/pages/archive.sass', 'styles/')
.js('src/scripts/pages/homepage.js', 'js/')
