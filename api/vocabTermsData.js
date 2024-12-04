import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocabTerms = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const filterByHtml = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const htmlFilter = Object.values(data).filter((term) => term.languageId === 'HTML');
      resolve(htmlFilter);
    })
    .catch(reject);
});

const filterByCss = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const cssFilter = Object.values(data).filter((term) => term.languageId === 'CSS');
      resolve(cssFilter);
    })
    .catch(reject);
});

const filterByJs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const jsFilter = Object.values(data).filter((term) => term.languageId === 'JavaScript');
      resolve(jsFilter);
    })
    .catch(reject);
});

const getSingleTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getVocabTerms,
  getSingleTerm,
  createTerm,
  updateTerm,
  filterByCss,
  filterByHtml,
  filterByJs,
  deleteTerm
};
