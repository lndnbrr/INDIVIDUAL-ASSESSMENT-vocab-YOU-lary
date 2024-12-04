import renderToDOM from '../utils/renderToDom';
import selectLanguageForm from './selectLanguageForm';
import clearDom from '../utils/clearDom';

const form = (user, obj = {}) => {
  clearDom();

  const domString = `
  <form action="" id="${obj.firebaseKey ? `edit-term-btn--${obj.firebaseKey}` : 'submitNewTerm'}">

      <div id="termTitleValue" class="form-group">
        <label for="title" aria-placeholder="Title">Title:</label>
        <input type="text" name="title" id="termTitle" placeholder="Type the vocab term here!" value="${obj.vocabName || ''}" required>
      </div>
      
      <div id="termDefinitionValue" class="form-group">
        <label for="definition">Definition:</label>
        <input type="text" name="definition" id="termDefinition" placeholder="Type the definition here!" value="${obj.vocabDef || ''}" required>
      </div>

      <div id="select-language"></div>

      <div id="submit" class="form-group">
        <label for=""></label>
        <input type="submit" value="Submit!">
      </div>

    </form>`;

  renderToDOM('#vocabTermsCreateForm', domString);
  selectLanguageForm(`${obj.languageId || ''}`, user.uid);
};

export default form;
