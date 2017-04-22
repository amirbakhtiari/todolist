var gulp = require('gulp');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

var path = {
    'style': './assets/css/',
    'html': '',
    'am': {
        'js': [
            './bower_components/angular/angular.min.js',            
            './bower_components/angular-animate/angular-animate.min.js',
            './bower_components/angular-aria/angular-aria.min.js',
            './bower_components/angular-animate.min.js',
            './bower_components/angular-messages/angular-messages.min.js',            
            './bower_components/angular-material/angular-material.min.js',            
            './assets/js/app.js',     
            './assets/js/controller.js',
            './assets/js/services.js',
            './node_modules/ngstorage/ngStorage.min.js'
        ]
    }
};

// gulp.task('watch', function() {
// });

// gulp.task('js', function() {
//     gulp.src(path.js + '*.js')
//     // .pipe(uglify())
//     .pipe(concat('scripts.js'))
//     .pipe(gulp.dest('./js'));
// });

gulp.task('amjs', function() {
    gulp.src(path.am.js)
    // .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./js'));
});
gulp.task('style', function() {
    gulp.src(path.style + 'font-awesome/css/font-awesome.min.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(path.am.js, ['amjs']).on('change', browserSync.reload);
    gulp.watch(path.style, ['amjs']).on('change', browserSync.reload);    
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['style', 'amjs', 'browser-sync']);