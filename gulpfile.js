const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function watch() {
    gulp.watch('./src/styles/*.scss', styles); // Observa mudanças nos arquivos SCSS e executa a tarefa 'styles'
}

exports.styles = styles; // Exporta a tarefa 'styles'
exports.watch = watch; // Exporta a tarefa 'watch'
exports.default = gulp.series(styles); // Define a tarefa padrão
