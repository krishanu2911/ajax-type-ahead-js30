const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var arrayOfObject = [];
fetch(url).then(res => res.json())
.then(data => arrayOfObject.push(...data)
    );
function findMatches(wordToMatch, arrayOfObject){
    return arrayOfObject.fi
}

