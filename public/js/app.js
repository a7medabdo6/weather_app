



const weatherF=document.querySelector('form')
const input =document.querySelector('input')
const message1=document.querySelector('#temp')
const status=document.querySelector('#status')
const location1 =document.querySelector('#location')
const span00=document.querySelector('li #span1')


weatherF.addEventListener('submit',(e)=>{
e.preventDefault();
const location =input.value

fetch('http://localhost:3000/weather?address='+location).then((response)=>{

response.json().then((data)=>{
    if(data.error){
        console.log(data.error)

    } else{

        console.log(data.location)
        console.log(data.forecastdata)
        message1.textContent=Math.round(data.Temp)+'°';
        status.textContent=data.forecastdata;
        location1.textContent=data.location;
        

        
span00.innerHTML=Math.round(data.Temp)+'°';
        
    }
})
})
})
