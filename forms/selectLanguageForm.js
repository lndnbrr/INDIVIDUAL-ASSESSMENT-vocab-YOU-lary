import getLanguageTypes from '../api/languageTypesData';
import renderToDOM from '../utils/renderToDom';

const selectLanguageForm = (languageId) => {
  let domString = `<label for="language">Language</label>
    <select class="form-control" id="language_id" required>
    <option value="">Select a lanugage here!</option>`;
  getLanguageTypes().then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
          <option 
            value="${language.firebaseKey}" 
            ${languageId === language.firebaseKey ? 'selected' : ''}>
              ${language.languageName}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguageForm;
