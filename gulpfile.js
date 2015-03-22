var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require("gulp-rename");
var changed = require("gulp-changed");
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var csso = require('gulp-csso');


gulp.task('default', function() {
    // place code for your default task here
});
gulp.task('img270', function () {
    gulp.src('photo_in/*.{jpg,JPG,jpeg}')
        .pipe(changed("photo_in/270/"))
        .pipe(imageResize({
            width : 270,
            height : 180,
            crop : true,
            upscale : false
        }))
        .pipe(rename(function (path) { path.basename += "-crop270"; }))
        .pipe(gulp.dest('photo_in/270/'));
});

gulp.task('img1024', function () {
    gulp.src('photo_in/*.{jpg,JPG,jpeg}')
        .pipe(changed("photo_in/1024/"))
        .pipe(imageResize({
            width : 1024,
        }))
        .pipe(rename(function (path) { path.basename += "-crop1024"; }))
        .pipe(gulp.dest('photo_in/1024/'));
});

gulp.task('uncss', function() {
    return gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(csso())
        .pipe(gulp.dest('./out'));
});