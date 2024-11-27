import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav id="navBarBody" class="navbar fixed-top navbar-expand-lg">
  <div id="content-left">
  <div id="logo">logo here
  </div>
  <div id="createButton">
  <a class= "nav-link" href="#"> Create a Term</a>
  </div>
  </div>
  <div id="logoutButton"></div>
  </nav>`;
  renderToDOM('#navbar', domString);
};

export default navBar;
