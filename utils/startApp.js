import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
};

export default startApp;
