import util from '../common/utils.js';
import formCheck from '../common/form-check.js';

const {querySelector: $} = util;

export default (opts) => {
  const $loginBtn = $('#login-btn');
  const $remember = $('#login-remember');
  const $clearAccount = $('#clear-account');
  const $clearPassword = $('#clear-password');
  const $account = $('#login-account');
  const $password = $('#login-password');
  const $error = $('#login-error');

  const formCheck = new FormCheck({
    form: document.getElementById('login-form')
  });

  $loginBtn.onclick = () => {
    $error.innerHTML = '';

    const checkResults = formCheck.check();
  }

  $clearPassword.onclick = () => {

  }

  
}