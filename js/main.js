var header = document.querySelector('header');
var backToTopBtn = document.getElementsByClassName("backToTop")[0];
var skills = document.getElementById("skills");
var skillsProgress = document.getElementsByClassName("skills__progress")[0];
var locationRunProgressOfSkills = skills.offsetTop - (window.innerHeight - (skills.offsetHeight - skillsProgress.offsetHeight));
console.log(skillsProgress.offsetHeight);

window.onscroll = function () {
  scrollAnimation();
};

backToTopBtn.addEventListener("click", function(){ 
  backToTop();
});

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollAnimation() {
  // backToTop and replace background header
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    header.classList.add('navbarDark');
    backToTopBtn.style.opacity = "1";
  } else 
  {
    header.classList.remove('navbarDark');
    backToTopBtn.style.opacity = "0";
  }
  // progress on skills
  if (
  window.pageYOffset >= locationRunProgressOfSkills
  ) {
  skills.classList.add('progress--run');
  }
}
