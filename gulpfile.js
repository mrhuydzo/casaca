// Define modules
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const twig = require('gulp-twig');
const sourcemaps = require('gulp-sourcemaps');
//const cssnano = require('gulp-cssnano');
//const rename = require('gulp-rename');
//const del = require('del');
//const imagemin = require('gulp-imagemin');
//const replace = require('gulp-replace');

browserSync.create();

// File path variable
const files = {
    htmlPath: 'html/*.html',
    sassPath: 'sass/**/*.scss',
    cssPath: 'css/*.css',
    imagePath: 'images/*',
    twigPath: 'twig/page/*.twig'
};

function compileTwig() {
    return gulp.src(files.twigPath) // run the Twig template parser on all .html files in the "twig" directory
        .pipe(twig())
        .pipe(gulp.dest('.')) // output the rendered HTML files to the "dist" directory
        //.pipe(browserSync.stream());
}

function compileSass() {
    return gulp.src(files.sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
}

function startServe() {
    browserSync.init({
        server: '.',
        port: 3002
    });
    gulp.watch(files.sassPath, compileSass);
    gulp.watch('twig/**/*.twig', compileTwig);
    gulp.watch(files.htmlPath).on('change', browserSync.reload);
}
/*
function cleanDist() {
    return del(['dist/!*']);
}*/
/*
function copyHtml() {
    return gulp.src(files.htmlPath)
        .pipe(replace(/href="(\S*)\.css"/g, 'href="$1.min.css"'))
        .pipe(gulp.dest('dist'))
}*/
/*

function minifyImage() {
    return gulp.src(files.imagePath)
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: true}
                ]
            })
        ]))
        .pipe(gulp.dest('dist/images'));
}
*/
/*

function copyCss() {
    return gulp.src(files.cssPath)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(cssnano())
        .pipe(rename(path => {
            path.basename += '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
}
*/

exports.default = gulp.series(
    gulp.parallel(compileSass,compileTwig),
    startServe
);

exports.build = gulp.series(
    gulp.parallel(compileSass,compileTwig),
    //gulp.parallel(copyHtml, copyCss, minifyImage)
);