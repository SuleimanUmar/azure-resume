window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


// const localApi = 'http://localhost:7071/api/GetResumeCounter';
const functionApiUrl = 'https://getresumecounterforsule.azurewebsites.net/api/GetResumeCounter?code=3H7z_0N1OipTnV8zkfmfuFmf2uYn4mEXXx4EaXB1TFffAzFuni7EBw=='; 
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter'; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
