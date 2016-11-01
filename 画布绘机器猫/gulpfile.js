var gulp = require('gulp'); 

// 引入组件
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
const livereload = require('gulp-livereload');
// var path = require('path');
const babel = require('gulp-babel');
const path = require('path');
var prefix= require("gulp-autoprefixer");
// var webpack=require('./webpack.config.js');

// 编译less
gulp.task('less', function() {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(prefix({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

// gulp.task('less', function () {
//   return gulp.src('./less/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./public/css'));
// });

// babel转码
gulp.task('babel', () => {
     gulp.src('./es6/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./es5'))
        .pipe(livereload());
});


// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./es5/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});
gulp.task('html',function () {
    gulp.src('./*.html')
    .pipe(livereload());
})


// 默认任务
gulp.task('default', function(){
    livereload.listen();
    gulp.run('less', 'babel','html');

    // 监听文件变化
    gulp.watch('./es6/*.js', function(){
        gulp.run('babel');
    });
    gulp.watch('./less/*.less', function(){
        gulp.run('less');
    });
    gulp.watch('./*.html', function(){
        gulp.run('html');
    });
    // var server=livereload();
    // gulp.watch('**/*.*', function (file) {
    //     server.listen(file.path);
    // });
    console.log("success!");
});