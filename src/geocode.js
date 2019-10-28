const request=require('request')


/*
const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYTdtZWRhYmRvMzIzIiwiYSI6ImNrMWtxd2NodTFpbjAzbXA2MmJpM3ljaGEifQ.H0QnLibD1_psc54us8I5gA&limit=1'

request({url:geocodeurl,json:true},(error,response)=>{
 if(error){
    console.log('unable to  connect to location service!')

 }else if (response.body.features.length===0){
console.log('unable to find location. try another search.')
 }
 else{
    const latitude=response.body.features[0].center[1]
    const langitude=response.body.features[0].center[0]
    console.log(latitude,langitude)
 }
   
})
*/

const geocode = (address,callback)=>{ 
    const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYTdtZWRhYmRvMzIzIiwiYSI6ImNrMWtxd2NodTFpbjAzbXA2MmJpM3ljaGEifQ.H0QnLibD1_psc54us8I5gA&limit=1'
request({url:geocodeurl, json:true},(error,response)=>{
if(error){
    callback('unable to  connect to location service!',undefined)
}else if(response.body.features.length===0){
    callback('unable to find location. try another search.',undefined)
}else{
    callback(undefined,{
        latitude:response.body.features[0].center[1],
        longitude:response.body.features[0].center[0],
        location:response.body.features[0].place_name

    })
}
})
}
module.exports=geocode