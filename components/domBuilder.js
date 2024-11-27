import renderToDOM from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navbar"></div>
    <div id="mainContainer">
      <div id="vocabTermsContent"></div>
      <div id="vocabTermsEditForm"></div>
      <div id="vocabTermsCreateForm"></div>
    </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
