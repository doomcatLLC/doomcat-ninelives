// Backend (openai-backend.jsw)

import {fetch} from 'wix-fetch';
import {secrets} from 'wix-secrets-backend';

export async function getOpenAIResponse(prompt) {
  const openAIKey = await secrets.getSecret(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);
  
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${openAIKey.value}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7
    })
  });
  
  return response.json(); // Parsing the JSON response from OpenAI
}

     const jsonResponse = await response.json();
     return jsonResponse;
   } catch (error) {
     console.error('OpenAI API call error:', error);
     return null;
   }
}
