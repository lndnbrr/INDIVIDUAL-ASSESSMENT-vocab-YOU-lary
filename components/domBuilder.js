import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navbar"></div>
    <div id="filterButtonsOnDOM">
    <button type="button" class="btn btn-secondary filter" id="allLanguagesButton">All</button>
    <button type="button" class="btn btn-success filter" id="htmlLanguagesButton">HTML</button>
    <button type="button" class="btn btn-primary filter" id="cssLanguagesButton">CSS</button>
    <button type="button" class="btn btn-warning filter" id="jsLanguagesButton">JS</button>
    </div>
    <div id="mainContainer">
      <div id="vocabTermsContent"></div>
      <div id="vocabTermsCreateForm"></div>
    </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
