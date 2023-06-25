const {Configuration, OpenAIApi}  = require('openai');

const config = new Configuration({
    apiKey: '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'
});
//token: pieces of words used for natural language processing, 1 token = 4 charachters

//to test this cd utils , then node openApi.tsx

//create openAI instance

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

    const response = await openai.createCompletion({
        model:"text-curie-001",
        prompt: prompt,
        max_tokens: 1,
        temperature: 0.6,
    });

    console.log(response.data.choices[0].text);

    const parasableJSONResponse = response.data.choices[0].text;
    const parsedResponse = JSON.parese(parasableJSONResponse);

    console.log("Question: " , parsedResponse.Q;
    console.log("Answer: ", paresedRes)
};

runPrompt();