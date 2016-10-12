var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var theme = 'content/themes/[theme-name]';

var paths = {
    theme: theme,
    bower: theme + '/components',
}

gulp.task('sass', function(){
  return gulp.src(paths.theme + '/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: [
            paths.bower + '/bootstrap-sass/assets/stylesheets',
            paths.bower + '/font-awesome/scss'
        ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.theme + '/css'))
});

 gulp.task('watch', function() {
     gulp.watch(paths.theme + '/scss/**/*.scss', ['sass']); 
});


  gulp.task('default', ['sass']);