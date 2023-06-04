'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');



const GOD=function(data){
    const html=`<article class="country">
    <img class="country__img" alt=${data.flags.alt} src=${data.flags.png} title="Flag"/>
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>💖</span>${(+data.population/1000000000).toFixed(1)}B People</p>
    <p class="country__row"><span>🚩</span>${data.capital}</p>
    <p class="country__row"><span>🪙</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
    </div>
</article>`;
const creator=document.createElement("div");
creator.innerHTML=html;
 countriesContainer.append(creator)
countriesContainer.style.opacity=1;
}
const Ajax=function(value){
const req=new XMLHttpRequest();
req.open("GET",`https://restcountries.com/v3.1/name/${value}`);
req.send();
req.addEventListener('load',function(){
    const [data]=JSON.parse(this.responseText);
   //console.log(data);
   GOD(data);
   
});}
const promise=function(value){fetch(` `)
.then(response=>{
   
    if(!response.ok) 
      
        throw new Error("Page Not Find");
    return response.json()})
.then((data)=>{
    return GOD(data[0]);}).catch((err)=>alert(err.message))
    .finally(console.log("NO doubt its working"));}
  
btn.addEventListener('click',function(){
    Ajax('india');
    promise('pakistan');
  })


const Loterypromise=new Promise(function(resolve,reject){
    if(Math.random()>=0.5){
        resolve('YOU WIN Hurrah')
    }
    else{
        reject(new Error("You Lose"));
    }
});
Loterypromise.then(
    res=>console.log(res))
    .catch(err=>console.log(err));

//promisifying setTIMEOUT

const secs=function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds*1000)
    });
};
secs(2)
.then(()=>{console.log("Waited for 2 seconds")
return secs(1);
})
.then(()=>{console.log("waited for second 1")});

// Geolocation API
//navigator.geolocation.getCurrentPosition(pos=>console.log(pos),Err=>console.log(Err));

// const getposition=function(){
//     return new Promise(function(resolve,reject){
//       return  navigator.geolocation.getCurrentPosition(function(resolve){ //console.log(resolve);
//        return fetch(`https://geocode.xyz/41.3189957000,2.0746469000?geoit=json`).then(res=>res.json()).then((resi)=>console.log(resi));
        
//     },reject)
//     })

    ////  https://geocode.xyz/41.3189957000,2.0746469000?geoit=json Paid API 😓

// }

// getposition().then((rs)=>console.log(rs));
