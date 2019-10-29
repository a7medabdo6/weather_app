const path=require('path')
const express=require('express')

const geocode=require('./geocode')
const weather =require('./weather')

const app =express()
const port =process.env.PORT ||3000

const pathDir= path.join(__dirname,'../public')

app.use(express.static(pathDir))



app.get('/help',(req,res)=>{
    res.send({
     name:'mohammed',
     age:27,
    })
    })
    
    app.get('/weather',(req,res)=>{
        if(!req.query.address){
            return res.send({
                error:'you must provide an address'
            })
        }
        geocode(req.query.address,(error,data)=>{
            if(error){
                return res.send({error})
            }
               const lati=data.latitude;
               const longi=data.longitude;
        
               weather(lati,longi,(error,forecastdata,Temp)=>{
                   if(error){
                       return res.send({error})
                   }
                   const location =data.location
               res.send({ location,forecastdata,Temp
            
            })
                })
        })
        })
        


app.listen(port,()=>{
    console.log('server is up on port'+port)
})