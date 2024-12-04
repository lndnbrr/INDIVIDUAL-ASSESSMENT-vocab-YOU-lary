import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import showVocabTerms from '../pages/vocabTerms';
import { getVocabTerms } from '../api/vocabTermsData';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder(user);
  formEvents(user);
  domEvents(user);
  navigationEvents(user);
  navBar();
  logoutButton();

  getVocabTerms(user.uid).then((terms) => showVocabTerms(terms));
};

export default startApp;
