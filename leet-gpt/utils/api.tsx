import axios from "axios";

export async function searchSomething(query: string){
    const apiKey = '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';
    const apiUrl = '' //add endpoint


    try {
        const response = await axios.post(
            apiUrl,
            {
                data: {
                    query: query
                },
                headers: {
                    'Content-Type': 'appliction/json',
                    'Authorization' : `Bearer ${apiKey}`
                }
            }
        )

        return response.data;
    } catch (error) {
        console.log(`Error: API request failed`, error);
        return error;
    }

}
    