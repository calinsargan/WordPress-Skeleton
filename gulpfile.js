var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var theme = 'content/themes/[theme-name]';

var paths = {
    theme: theme,
    bower: theme + '/components',
}

gulp.task('sass', function(done){
  gulp.src(paths.theme + '/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: [
            paths.bower + '/bootstrap-sass/assets/stylesheets',
            paths.bower + '/font-awesome/scss'
        ]
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.theme + '/css'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.theme + '/css'))
    .on('end', done); 
});

 gulp.task('watch', function() {
     gulp.watch(paths.theme + '/scss/**/*.scss', ['sass']); 
});


  gulp.task('default', ['sass']);