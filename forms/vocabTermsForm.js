import renderToDOM from '../utils/renderToDom';
import selectLanguageForm from './selectLanguageForm';
// import clearDom from '../utils/clearDom';

const form = (obj = {}) => {
//   clearDom();

  const domString = `
  <form action="">

      <div id="termTitleValue" class="form-group">
        <label for="title" aria-placeholder="Title">Title:</label>
        <input type="text" name="title" id="termTitle" placeholder="Type the vocab term here!">
      </div>
      
      <div id="termDefinitionValue" class="form-group">
        <label for="definition">Definition:</label>
        <input type="text" name="definition" id="termDefinition" placeholder="Type the definition here!">
      </div>

      <div id="select-language"></div>

      <div id="submit" class="form-group">
        <label for=""></label>
        <input type="submit" value="Create!">
      </div>

    </form>`;

  renderToDOM('#vocabTermsCreateForm', domString);
  selectLanguageForm(`${obj.author_id || ''}`);
};

export default form;
