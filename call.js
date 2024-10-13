require('dotenv').config();

const apiKey = process.env.PPLX

const options = {
  method: "POST",
  headers: {
    Authorization: "Bearer " + apiKey,
    "Content-Type": "application/json",
  },
  body: '{"model":"llama-3.1-sonar-small-128k-online","messages":[{"role":"system","content":"Be precise and concise."},{"role":"user","content":"How many stars are there in our galaxy?"}],"temperature":0.2,"top_p":0.9,"return_citations":true,"search_domain_filter":["perplexity.ai"],"return_images":false,"return_related_questions":false,"search_recency_filter":"month","top_k":0,"stream":false,"presence_penalty":0,"frequency_penalty":1}',
};

fetch('https://api.perplexity.ai/chat/completions', options)
  .then(response => response.json())
  .then(response => {
    console.log(JSON.stringify(response, null, 2));
  })
  .catch(err => console.error(err));
