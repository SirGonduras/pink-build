function indexStart(check) {
  let mainStart = document.querySelector('.main-start');
  let indexTagline = document.querySelector('.main-start__index-tagline');
  let wrapper = document.querySelector('.main-start__wrapper');

  if (check) {
    mainStart.classList.remove('main-start--nav-closed');
    indexTagline.classList.remove('main-start__index-tagline--nav-closed');
    wrapper.classList.remove('main-start__wrapper--nav-closed');
  } else {
    mainStart.classList.add('main-start--nav-closed');
    indexTagline.classList.add('main-start__index-tagline--nav-closed');
    wrapper.classList.add('main-start__wrapper--nav-closed');
  }
}

function photoStart(check) {
  let photoTagline = document.querySelector('.photo-start__tagline');
  let photoStart = document.querySelector('.photo-start');

  if (check) {
    photoTagline.classList.remove('photo-start__tagline--nav-closed');
    photoStart.classList.remove('photo-start--nav-closed');
  } else {
    photoTagline.classList.add('photo-start__tagline--nav-closed');
    photoStart.classList.add('photo-start--nav-closed');
  }
}

function formStart(check) {
  let formTagline = document.querySelector('.form-start__tagline');
  let formStart = document.querySelector('.form-start');

  if (check) {
    formTagline.classList.remove('form-start__tagline--nav-closed');
    formStart.classList.remove('form-start--nav-closed');
  } else {
    formTagline.classList.add('form-start__tagline--nav-closed');
    formStart.classList.add('form-start--nav-closed');
  }
}


var pageHeader = document.querySelector('.page-header');
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    pageHeader.classList.add('page-header--nav-closed');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageHeader.classList.remove('page-header--nav-closed');

    if(document.querySelector('.start-js').classList.contains('main-start')) {
      indexStart(true);
    }

    if(document.querySelector('.start-js').classList.contains('photo-start')) {
      photoStart(true);
    }

    if(document.querySelector('.start-js').classList.contains('form-start')) {
      formStart(true);
    }
  } else {
    pageHeader.classList.remove('page-header--nav-closed');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.add('page-header--nav-closed');

    if(document.querySelector('.start-js').classList.contains('main-start')) {
      indexStart(false);
    }

    if(document.querySelector('.start-js').classList.contains('photo-start')) {
      photoStart(false);
    }

    if(document.querySelector('.start-js').classList.contains('form-start')) {
      formStart(false);
    }
  }
});
