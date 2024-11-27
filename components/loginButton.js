import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<div id="login-button-container"><button id="google-auth-login" class="btn btn-danger">Google Auth Login</button</div>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth-login').addEventListener('click', signIn);
};

export default loginButton;
