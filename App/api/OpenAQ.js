var OpenAQapi = {
    getResults(){
        var url = 'https://api.openaq.org/v1/cities?limit=5';
        return fetch(url).then((res) => res.json());
    }
};

module.exports = OpenAQapi;
