const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});

//to test this cd utils , then node openApi.tsx

const openai = new OpenAIApi(config);

const runPrompt = async () => {
  //here we gave the ai a more detailed prompt with the strucutre we want
  const prompt = `
        Write me a joke about a cat and a bowl of pasta. Return reponse in the following parsable JSON format: 
        {
            "Q": "question",
            "A": "answer"
        }
    `;

  const hintPrompt = ``; //prompt for hint search

  const solutionPrompt = ``; //prompt for solution search

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.6,
  });

  console.log(response.data);

  const parasableJSONResponse = response.data.choices[0].text;
  const parsedResponse = JSON.parse(parasableJSONResponse);

  console.log("Question: ", parsedResponse.Q);
  console.log("Answer: ", parsedResponse.A);
};

export default runPrompt;
