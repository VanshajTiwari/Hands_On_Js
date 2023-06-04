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
const promise=function(value){fetch(`https://restcountries.com/v3.1/name/${value}`)
.then(response=>{
   
    if(!response.ok) 
      
        throw new Error("Page Not Find");
    return response.json()})
.then((data)=>{
    return GOD(data[0]);}).catch((err)=>alert(err.message))
    .finally(console.log("NO doubt its working"));}
  
const getJSON= async function(url){
    try{
     const res0= await fetch(url);
    if(!res0.ok)
        throw new Error(res0.status);
    const data=await res0.json();
    return data
    //GOD(data);
}
    
    catch(err){
            console.error("ERROR FOUND:"+err.message);
    }
    console.log("I will RUN ALWAYS");
}
const get3CountryPara=async function(c1,c2,c3){
    const [data1]=await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2]=await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3]=await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    GOD(data1);GOD(data2);GOD(data3);

const datas=await Promise.all([
  [await getJSON(`https://restcountries.com/v3.1/name/${c1}`)][0][0],
  [await  getJSON(`https://restcountries.com/v3.1/name/${c2}`)][0][0],
  [await  getJSON(`https://restcountries.com/v3.1/name/${c3}`)][0][0]
])
console.log(datas);
}
const racing=async function(){
    const res=await Promise.race([
        "https://restcountries.com/v3.1/name/india","https://restcountries.com/v3.1/name/Pakistan","https://restcountries.com/v3.1/name/USA"
    ])
    console.log(await getJSON(res));
}
btn.addEventListener('click',function(){
   // Ajax('india');
   // promise('pakistan');
   get3CountryPara('india',"pakistan",'USA');
  racing();
  });



