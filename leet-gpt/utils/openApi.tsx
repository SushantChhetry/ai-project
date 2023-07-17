require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const apiUrl = process.env.NEXT_PUBLIC_API_KEY;

console.log(apiUrl);

const config = new Configuration({
  apiKey: apiUrl, //note this will get deleted everytime you push it to github
});

//to test this cd utils , then node openApi.tsx

const openai = new OpenAIApi(config);

const runPrompt = async (searchText: any) => {
  const type = searchText.type;

  const problem = searchText.prompt;

  const prompt = `
    Give me a ${type} on solving the ${problem} leetcode question in the following format : 
    "{
        \\"Q\\": "link to the ${problem}",
        \\"A\\": "${
          type === "solution"
            ? `leetcode discussion link to solution of leetcode problem ${problem}`
            : '"' + type + '"' + `to the ${problem}`
        } "
    }"
  `;

  console.log(prompt);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 500,
    temperature: 0.6,
  });

  console.log(response.data.choices[0].text);

  const inputString = response.data.choices[0].text;

  const startIndex = inputString.indexOf("{");
  const jsonString = inputString.slice(startIndex);

  const parasableJSONResponse = jsonString;
  let parsedResponse = "";
  parasableJSONResponse
    ? (parsedResponse = JSON.parse(parasableJSONResponse))
    : console.log(`Error when getting response data  ${parasableJSONResponse}`);

  //   const parsedResponse = JSON.parse(response.data.choices[0].text);
  //   console.log(parsedResponse);

  return parsedResponse;
};

export default runPrompt;
