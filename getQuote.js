import axios from "axios";

export const getRandomQuote = async () => {
    const { data: [{ quote, author }] } = await axios.get("https://api.api-ninjas.com/v1/quotes?category=happiness", {headers: {'X-Api-Key': "5NHCNJ6K8P33WT4JmNiMIQ==LX2qzlRmGZQLnboP"}});
    return [author, quote];
}