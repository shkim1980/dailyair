var OpenAQapi = {
    getResults(query = "CA"){
        console.log(this.query);
        var url = `https://api.openaq.org/v1/measurements?coordinates=${query}`;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = OpenAQapi;
