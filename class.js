const button=document.getElementById('clicker');


button.addEventListener('click',function(){
    const input=user_input.value;
    if(input){
        // console.log(input);
        const method=async()=>{
            const result= await fetch(`https://restcountries.com/v3.1/name/${input}?fullText=true`);
            const fetchy= await result.json();
            console.log(fetchy[0]);
            
            const flag=fetchy[0].flags.png;
            const namee=fetchy[0].name.common;
            const capital=fetchy[0].capital;
            const pop=(fetchy[0].population / 1000000).toFixed() +' M people' ;
            const tz=fetchy[0].timezones;
            const conti=fetchy[0].continents;
            const map=fetchy[0].maps.googleMaps;
            // currency fetch
            const currObject=fetchy[0].currencies;
            let currKey= Object.keys(currObject)[0];
            const currency=fetchy[0].currencies;
            const king=currency[`${currKey}`].name;
            //language fetch
            const langValuesArray=Object.values(fetchy[0].languages);
            const langValues=langValuesArray.join(',');

            

            man.innerHTML = ` <div class="card" style="width: 18rem;">
            <img src="${flag}" class="card-img-top" alt="...">
            <div class="custom">
              <h2 class="custom card-title">${namee}</h2>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${capital}</li>
              <li class="list-group-item">${pop}</li>
              <li class="list-group-item">${tz}</li>
              <li class="list-group-item">${conti}</li>
              <li class="list-group-item">Currency : ${king}</li>
              <li class="list-group-item">${langValues}</li>
            </ul>
            <div class="card-body">
              <a href="${map}" class="card-link">Google Map</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>`
         } 
         method();
    }else{
        alert('please enter a value')
    }

    
});



// --------------------------------------------------------------------------------------------------------------------
// const fetchCurrencies = async (countryCode) => {
//   const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
//   const response = await fetch(url);
//   const data = await response.json();

//   const currencies = [];
//   const currencyKey = data.currencies ? "currencies" : "currency";
//   if (data[currencyKey]) {
//     for (const currency of data[currencyKey]) {
//       currencies.push(currency);
//     }
//   }

//   return currencies;
// };

// const currencies = await fetchCurrencies("us");
// console.log(currencies);