import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navbar"></div>
    <div id="filterButtonsOnDOM">
    <button type="button" class="btn btn-success filter">HTML</button>
    <button type="button" class="btn btn-primary filter">CSS</button>
    <button type="button" class="btn btn-warning filter">JS</button>
    </div>
    <div id="mainContainer">
      <div id="vocabTermsContent"></div>
      <div id="vocabTermsEditForm"></div>
      <div id="vocabTermsCreateForm"></div>
    </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
