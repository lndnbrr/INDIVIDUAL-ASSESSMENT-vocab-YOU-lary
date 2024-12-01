import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import showVocabTerms from '../pages/vocabTerms';
import form from '../forms/vocabTermsForm';

const startApp = () => {
  domBuilder();
  navBar();
  showVocabTerms();
  form();
  logoutButton();
};

export default startApp;
