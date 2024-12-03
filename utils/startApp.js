import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import showVocabTerms from '../pages/vocabTerms';
import form from '../forms/vocabTermsForm';
import { getVocabTerms } from '../api/vocabTermsData';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  form();
  formEvents();
  domEvents();
  logoutButton();
  navigationEvents();

  getVocabTerms().then((terms) => showVocabTerms(terms));
};

export default startApp;
