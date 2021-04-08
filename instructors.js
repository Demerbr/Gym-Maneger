const fs = require('fs')
const data = require("./data.json")

//create
exports.post = function(req, res){
    //estrutura de validação, se todos dados estão preenchidos ou não
        const keys = Object.keys(req.body)
    
        for( key of keys){
          if (req.body[key] == ""){
                return res.send('please, fill all fields ')
          }
         }
    
        data.instructors.push(req.body)

         fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
            if(err){return req.send("write file erro!")}

            return res.redirect("/instructors")
         })


        
    }



//update




//delete