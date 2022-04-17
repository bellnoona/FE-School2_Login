'use strict';

// 로그인 모달창 열기
const loginBtn = document.querySelector('.login-box__btn');
const loginModal = document.querySelector('#login-modal');

loginBtn.addEventListener('click', () => {
  loginModal.classList.remove('invisible');
});

// 모달창 닫기
const modalClose = document.querySelector('.header__close');
modalClose.addEventListener('click', () => {
  loginModal.classList.add('invisible');
});

// 모달창
const loginCheckBtn = document.querySelector('.login__check-btn');
const loginCheckImg = document.querySelector('#login__check-img');

loginCheckBtn.addEventListener('click', () => {
  loginCheckImg.classList.toggle('invisible');
});
