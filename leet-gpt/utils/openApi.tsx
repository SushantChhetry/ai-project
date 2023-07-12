const { Configuration, OpenAIApi } = require("openai");

const apiKey = process.env.OPENAI_API_KEY;

const config = new Configuration({
  apiKey: "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", //note this will get deleted everytime you push it to github
});

//to test this cd utils , then node openApi.tsx

const openai = new OpenAIApi(config);

const runPrompt = async (searchText: any) => {
  //here we gave the ai a more detailed prompt with the strucutre we want
  const prompt = `
        Give me a 500 char ${searchText.type} on solving the ${searchText.prompt} leetcode question in the following formatting: 
        {
            "Q": "link to the leet code problem",
            "A": "${searchText.type} to the leet code problem"
        }
    `;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 500,
    temperature: 0.6,
  });

  const parasableJSONResponse = response.data.choices[0].text;
  let parsedResponse = "";
  parasableJSONResponse
    ? (parsedResponse = JSON.parse(parasableJSONResponse))
    : console.log(`Error when getting response data  ${parasableJSONResponse}`);

  return parsedResponse;

  //   console.log("Question: ", parsedResponse.Q);
  //   console.log("Answer: ", parsedResponse.A);
};

export default runPrompt;
