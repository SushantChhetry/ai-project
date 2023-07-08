const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.env.OPENAI_API_KEY;

const config = new Configuration({
  apiKey: "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",
});

//to test this cd utils , then node openApi.tsx

const openai = new OpenAIApi(config);

const runPrompt = async () => {
  //here we gave the ai a more detailed prompt with the strucutre we want
  const prompt = `
        Give me a 500 char hint on solving the merge sorted arry leetcode question in the following formatting: 
        {
            "Q": "link to the leet code problem",
            "A": "hint to the leet code problem"
        }
    `;

  const hintPrompt = ``; //prompt for hint search

  const solutionPrompt = ``; //prompt for solution search

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 500,
    temperature: 0.6,
  });

  console.log(response.data);

  const parasableJSONResponse = response.data.choices[0].text;
  const parsedResponse = JSON.parse(parasableJSONResponse);

  console.log(parsedResponse);

  //   console.log("Question: ", parsedResponse.Q);
  //   console.log("Answer: ", parsedResponse.A);
};

export default runPrompt;
