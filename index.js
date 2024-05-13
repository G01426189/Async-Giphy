require('dotenv').config();

// Print out value of API key stored in .env file

let endpoint = 'https://api.giphy.com/v2/emoji?api_key=07vNm1dGuINPnU0Dem1ZmoT1RRQ4wVdn&limit=25&offset=0'
async function getImage(query){
    try {
        const response = await fetch(endpoint + "&q=" + query);
        const data = await response.json();
        const imageURL = data.data[0].url;
        console.log(imageURL, "imageURL");
        return imageURL;
    } catch (error){
        console.error ("This image can't be fetched", error);
    }

}
console.log(process.env.API_KEY)