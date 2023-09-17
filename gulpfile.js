var gulp = require('gulp'); 
var cssnano = require('gulp-cssnano'); 
var sass = require('gulp-sass')(require('sass')); 
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify');

gulp.task('sass', function(){    
    return gulp.src('app/scss/style.scss')       
        .pipe(sass())       
        .pipe(cssnano())       
        .pipe(gulp.dest('dist/css')); 
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')          
        .pipe(concat('all.js'))       
        .pipe(uglify())       
        .pipe(gulp.dest('dist/js')); 
});

gulp.task('watch', function(){       
	gulp.watch('app/scss/*.scss', gulp.series('sass'));          
    gulp.watch('app/js/*.js', gulp.series('js')); 
});

// gulp.task('default', ['sass', 'js', 'watch']);
gulp.task('default', gulp.parallel('sass', 'js', 'watch'));