import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocabTerms = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const filterByHtml = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json?orderBy="languageId"&equalTo="HTML"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const filterByCss = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json?orderBy="languageId"&equalTo="CSS"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const filterByJs = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabTerms.json?orderBy="languageId"&equalTo="JavaScript"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
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
