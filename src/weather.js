const request =require('request')
const weather =(lati,longi,callback)=>{
    const url ="https://api.darksky.net/forecast/8fac617b95d9e19d5398352096700139/"+lati+','+longi+"?units=si"
request({url:url,json:true},(error,response)=>{
if(error){
    callback('unable to connect weather service!',undefined,undefined)

}else if(response.body.error){
callback('unable to find location!',undefined,undefined)
}else{
    callback(undefined,response.body.hourly.data[0].summary
    ,response.body.currently.temperature)
}
})
}
/*
weather(26,29,(error,data)=>{
console.log('error',error),
console.log('data',data)
})
*/
module.exports=weather