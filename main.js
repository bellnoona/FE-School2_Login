'use strict';

// 로그인 모달창 열기
const loginBoxBtn = document.querySelector('.login-box__btn');
const loginModal = document.querySelector('#login-modal');

loginBoxBtn.addEventListener('click', () => {
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

// 로그인 기능 구현

// 1. 아이디 input박스 공백 체크
const loginIdBox = document.querySelector('.login__id');
const loginPwBox = document.querySelector('.login__pw');
const loginBtn = document.querySelector('.login__btn');

const loginIdMsg = document.querySelector('.login__id-msg');
const loginPwMsg = document.querySelector('.login__pw-msg');

// 임시 아이디, 비밀번호 지정
const id = 'bellnoona';
const password = 'bell1234';

loginBtn.addEventListener('click', () => {
  if (!loginIdBox.value) {
    loginIdMsg.classList.remove('invisible');
  } else {
    loginIdMsg.classList.add('invisible');

    // 2. 아이디, 비밀번호 일치여부 체크
    if (loginIdBox.value !== id || loginPwBox.value !== password) {
      loginPwMsg.classList.remove('invisible');
    } else if (loginIdBox.value === id && loginPwBox.value === password) {
      loginPwMsg.classList.add('invisible');
    } else {
      return;
    }
  }
});

// * 추가 구현사항 *
// 1. 닫기 누르고 다시 들어가면 리셋
