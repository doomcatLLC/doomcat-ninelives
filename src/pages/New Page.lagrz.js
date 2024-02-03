import {fetch} from 'wix-fetch'; 

export function callOpenAI() {
  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions'; // OpenAI API endpoint
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '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      ' // replace with your OpenAI key
    },
    body: JSON.stringify({
      // Your request payload
    })
  };
  return fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}