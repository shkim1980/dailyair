var OpenAQ = {
    getResults(query = '37.774929,-122.419416'){
        console.log("Loading coords into API");
        var url = `https://api.openaq.org/v1/measurements?coordinates=${query}`;
        console.log(url);
        return fetch(url).then((res) => res.json());
    }
};

module.exports = OpenAQ;
