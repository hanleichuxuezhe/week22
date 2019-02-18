// 1.初始化git仓库，并且把仓库推送到自己的github（10分）；
// 2.以自己的名字作为本地的开发分支，在开发分支进行开发，开发完成后合并到master分支提交到远程的master分支（10分）；
// 3.使用gulp搭建前端自动化开发环境（10分）；

// 8.在gulp中创建default任务，默认执行webserver服务，js，css，watch任务（10分）；
// 9.在gulp中创建build任务，指向js,css任务，并把文件生成到dist文件夹（10分）；
// 10.创建每一个任务在录屏中都需要有演示，演示成功后进行git版本提交，最后展示git版本提交记录（10分）；
var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-webserver");
var concat = require("gulp-concat");
var babel = require("gulp-babel");
var minJs = require("gulp-uglify");
var minImg = require("gulp-imagemin");
var minHtml = require("gulp-htmlmin");
var minCss = require("gulp-clean-css");

// 4.在gulp中使用webserver启动web服务，并且提供自动刷新功能（10分）；
gulp.task("server", function () {
    gulp.src("./src/")
        .pipe(server({
            port: 8090,
            open: true,
            livereload: true,
        }));
});
// 5.在gulp中创建scss任务，进行scss文件编译，并且压缩css（10分）；
gulp.task("scss", function () {
    return gulp.src(["./src/scss/*.scss", "!./src/scss/common.scss"])
        .pipe(sass()) //编译
        .pipe(minCss()) //压缩
        .pipe(gulp.dest("./src/css/"));
});
// 6.在gulp中创建js任务编译js文件，合并js，并且压缩（10分）；
gulp.task("js", function () {
    return gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: "es2015"
        })) //es6 --> es5
        .pipe(concat("all.js")) //合并js
        .pipe(minJs()) //压缩
        .pipe(gulp.dest("./src/js/"));
});