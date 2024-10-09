var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');

function defaultTask(cb) {
    // generate sprite.png and _sprite.scss
    gulp.task('sprites', function () {
        return sprity.src({
            src: './images/**/*.{png,jpg}',
            style: './sprite.css',
            // ... other optional options
            // for example if you want to generate scss instead of css
            processor: 'css', // make sure you have installed sprity-sass
        })
            .pipe(gulpif('*.png', gulp.dest('./dist/img/'), gulp.dest('./dist/css/')))
    });

    cb();
}

exports.default = defaultTask
