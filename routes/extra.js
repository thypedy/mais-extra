module.exports = (app) =>{

    app.get('/extra',(req,res)=>{
        res.render('extra.ejs')
    })

    app.get('/extra',async(req,res) => {
        
    })
}