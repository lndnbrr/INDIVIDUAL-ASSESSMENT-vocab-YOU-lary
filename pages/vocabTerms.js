import renderToDOM from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const showVocabTerms = () => {
  clearDom();

  const domString = `
  <div id="vocabCardBody" class="card">
    <div id="vocabCardTitle"> Title</div>
    <div id="vocabCardLanguage"> Language: <em>TBD</em></div>
    <div id="vocabCardDefinition"> Lorem ipsum odor amet, consectetuer adipiscing elit. Et montes habitant nunc, gravida nisi blandit. Ut finibus porta ridiculus tellus tellus accumsan; sagittis mollis. Litora sociosqu eu vivamus nam sapien nascetur habitasse sit venenatis. Orci aliquam curabitur accumsan quisque neque fusce efficitur eleifend pulvinar. Convallis himenaeos libero cubilia curabitur fames id. Adipiscing maecenas curabitur; integer velit neque suscipit. Elit maecenas vitae habitasse netus class.</div>
    <div id="vocabCardButtons">
      <button type="button" class="btn btn-outline-warning" id="vocabCardEdit">edit</button>
      <button type="button" class="btn btn-outline-danger" id="vocabCardDelete">delete</button>
    </div>
  </div>


  <div id="vocabCardBody" class="card">
    <div id="vocabCardTitle"> Title</div>
    <div id="vocabCardLanguage"> Language: <em>TBD</em></div>
    <div id="vocabCardDefinition"> Lorem ipsum odor amet, consectetuer adipiscing elit. Et montes habitant nunc, gravida nisi blandit. Ut finibus porta ridiculus tellus tellus accumsan; sagittis mollis. Litora sociosqu eu vivamus nam sapien nascetur habitasse sit venenatis. Orci aliquam curabitur accumsan quisque neque fusce efficitur eleifend pulvinar. Convallis himenaeos libero cubilia curabitur fames id. Adipiscing maecenas curabitur; integer velit neque suscipit. Elit maecenas vitae habitasse netus class.</div>
    <div id="vocabCardButtons">
      <button type="button" class="btn btn-outline-warning" id="vocabCardEdit">edit</button>
      <button type="button" class="btn btn-outline-danger" id="vocabCardDelete">delete</button>
    </div>
  </div>

  <div id="vocabCardBody" class="card">
    <div id="vocabCardTitle"> Title</div>
    <div id="vocabCardLanguage"> Language: <em>TBD</em></div>
    <div id="vocabCardDefinition"> Lorem ipsum odor amet, consectetuer adipiscing elit. Et montes habitant nunc, gravida nisi blandit. Ut finibus porta ridiculus tellus tellus accumsan; sagittis mollis. Litora sociosqu eu vivamus nam sapien nascetur habitasse sit venenatis. Orci aliquam curabitur accumsan quisque neque fusce efficitur eleifend pulvinar. Convallis himenaeos libero cubilia curabitur fames id. Adipiscing maecenas curabitur; integer velit neque suscipit. Elit maecenas vitae habitasse netus class.</div>
    <div id="vocabCardButtons">
      <button type="button" class="btn btn-outline-warning" id="vocabCardEdit">edit</button>
      <button type="button" class="btn btn-outline-danger" id="vocabCardDelete">delete</button>
    </div>
  </div>

  <div id="vocabCardBody" class="card">
    <div id="vocabCardTitle"> Title</div>
    <div id="vocabCardLanguage"> Language: <em>TBD</em></div>
    <div id="vocabCardDefinition"> Lorem ipsum odor amet, consectetuer adipiscing elit. Et montes habitant nunc, gravida nisi blandit. Ut finibus porta ridiculus tellus tellus accumsan; sagittis mollis. Litora sociosqu eu vivamus nam sapien nascetur habitasse sit venenatis. Orci aliquam curabitur accumsan quisque neque fusce efficitur eleifend pulvinar. Convallis himenaeos libero cubilia curabitur fames id. Adipiscing maecenas curabitur; integer velit neque suscipit. Elit maecenas vitae habitasse netus class.</div>
    <div id="vocabCardButtons">
      <button type="button" class="btn btn-outline-warning" id="vocabCardEdit">edit</button>
      <button type="button" class="btn btn-outline-danger" id="vocabCardDelete">delete</button>
    </div>
  </div>

  <div id="vocabCardBody" class="card">
    <div id="vocabCardTitle"> Title</div>
    <div id="vocabCardLanguage"> Language: <em>TBD</em></div>
    <div id="vocabCardDefinition"> Lorem ipsum odor amet, consectetuer adipiscing elit. Et montes habitant nunc, gravida nisi blandit. Ut finibus porta ridiculus tellus tellus accumsan; sagittis mollis. Litora sociosqu eu vivamus nam sapien nascetur habitasse sit venenatis. Orci aliquam curabitur accumsan quisque neque fusce efficitur eleifend pulvinar. Convallis himenaeos libero cubilia curabitur fames id. Adipiscing maecenas curabitur; integer velit neque suscipit. Elit maecenas vitae habitasse netus class.</div>
    <div id="vocabCardButtons">
      <button type="button" class="btn btn-outline-warning" id="vocabCardEdit">edit</button>
      <button type="button" class="btn btn-outline-danger" id="vocabCardDelete">delete</button>
    </div>
  </div>

  <div id="vocabCardBody" class="card">
    <div id="vocabCardTitle"> Title</div>
    <div id="vocabCardLanguage"> Language: <em>TBD</em></div>
    <div id="vocabCardDefinition"> Lorem ipsum odor amet, consectetuer adipiscing elit. Et montes habitant nunc, gravida nisi blandit. Ut finibus porta ridiculus tellus tellus accumsan; sagittis mollis. Litora sociosqu eu vivamus nam sapien nascetur habitasse sit venenatis. Orci aliquam curabitur accumsan quisque neque fusce efficitur eleifend pulvinar. Convallis himenaeos libero cubilia curabitur fames id. Adipiscing maecenas curabitur; integer velit neque suscipit. Elit maecenas vitae habitasse netus class.</div>
    <div id="vocabCardButtons">
     <button type="button" class="btn btn-outline-warning" id="vocabCardEdit">edit</button>
      <button type="button" class="btn btn-outline-danger" id="vocabCardDelete">delete</button>
    </div>
  </div>

    <div id="vocabCardBody" class="card">
      <div id="vocabCardTitle"> Title</div>
      <div id="vocabCardLanguage"> Language: <em>TBD</em></div>
      <div id="vocabCardDefinition"> Lorem ipsum odor amet, consectetuer adipiscing elit. Et montes habitant nunc, gravida nisi blandit. Ut finibus porta ridiculus tellus tellus accumsan; sagittis mollis. Litora sociosqu eu vivamus nam sapien nascetur habitasse sit venenatis. Orci aliquam curabitur accumsan quisque neque fusce efficitur eleifend pulvinar. Convallis himenaeos libero cubilia curabitur fames id. Adipiscing maecenas curabitur; integer velit neque suscipit. Elit maecenas vitae habitasse netus class.</div>
      <div id="vocabCardButtons">
         <button type="button" class="btn btn-outline-warning" id="vocabCardEdit">edit</button>
      <button type="button" class="btn btn-outline-danger" id="vocabCardDelete">delete</button>
      </div>
    </div>`;

  renderToDOM('#vocabTermsContent', domString);
};

export default showVocabTerms;
