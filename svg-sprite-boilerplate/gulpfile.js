var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprites");

//configurações que vao dentro do svg sprite
var config = {
  mode: {
    symbol: {
      dest: "sprite", //destino
      sprite: "sprite.svg", //nome do sprite
      example: true, //se cria pagina de exemplo ou não
    },
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false,
      tittle: false,
    },
    preview: {
      sprite: "sprite.html",
    },
  },
};

gulp.task("sprites", function () {
  return gulp
    .src("icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("sprites/"));
});
