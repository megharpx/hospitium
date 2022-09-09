var requestUrl = "https://www.healthit.gov/data/open-api?source=hospital-mu-public-health-measures.csv";

fetch("https://www.healthit.gov/data/open-api?source=state-health-it-privacy-consent-law-policies.csv")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  fetch("https://www.healthit.gov/data/open-api?source=systematic-lit-review-appendix.csv")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });fetch("https://www.healthit.gov/data/open-api?source=state-health-it-privacy-consent-law-policies.csv")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });