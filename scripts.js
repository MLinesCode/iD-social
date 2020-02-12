var w = $(window).width();
var h = $(window).heigth();

if ($("section").hasClass("parallax1")) {
  Createparallaxbg(".parallax1");
}

$(window).bind('scroll', function () {
  if ($("section").hasClass("parallax1")) {
    parallaxbg(".parallax1",".parallax1");
  }
});

// Parallax Background Image Create 
function Createparallaxbg(parallaxImage) {
  var ParSecImg = $(parallaxImage).attr("data-image");
  $(parallaxImage).attr("style", "background-image:url(" + ParSecImg + ");");
}

// Parallax Background Image ATTR ADD
function parallaxImage(position, parallaxImage) {
  var currentTop = $(window).scrollTop();
  var ParSecPT = $(position).position().top;
  if (currentTop > (ParSecPT - h)) {

    $(parallaxImage).css({
      "background-position": "center " + ((currentTop - ParSecPT) / 2 - (h/5)) + "px"
    });
  }
}