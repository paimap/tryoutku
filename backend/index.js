import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}))

function getDay(){
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday;
}

const tryoutData = [{id:1, name:"TO1", date:"08/03/2024", category:"easy"}, {id:2, name:"TO2", date:"08/03/2024", category:"easy"}, {id:3, name:"TO3", date:"08/03/2024", category:"easy"}, {id:4, name:"TO4", date:"08/03/2024", category:"easy"}]

function checkCategory (inputCategory){
    const categories = ["easy", "medium","hard"]
    return categories.includes(inputCategory);
}

app.get("/tryout", (req,res) => {
    res.json(tryoutData)
})

app.post("/tryout", (req,res) => {
    if(!req.body.category || !req.body.name){
        res.status(400).json({
            error:"empty name or category"
        })
    }else if(!checkCategory(req.body.category)){
        res.status(400).json({
            error:"invalid category"
        })
    }else{
        const newTryout = {
            id: tryout.length+1,
            name:req.body.name,
            date:getDay(),
            category:req.body.category
        };
    }
    tryoutData.push(newTryout);
    res.json(newTryout);
})

app.post("/edit-tryout/:id", (req,res) => {
    if(req.body.category){
        if(!checkCategory(req.body.category)){
            res.status(400).json({error:"invalid category"})
        }
    }
    const id = req.params.id;
    const searchTryout = tryoutData.find((tryout) => tryout.id == id)
    if(!searchTryout){
        res.status(400).json({error:"tryout not found"})
    }else if(req.body.name === searchTryout.name && req.body.category === searchTryout.category){
        res.status(400).json({error:"no data updated"})
    }else{
        const editedTryout = {
            id: searchTryout.id,
            name: req.body.name || searchTryout.name,
            date: searchTryout.date,
            category: req.body.category || searchTryout.category
        }
        const searchIndex = tryoutData.findIndex((tryout) => tryout.id == id)
        tryoutData[searchIndex] = editedTryout
        res.json(editedTryout)
    }
})

app.delete("/delete-tryout/:id", (req,res) => {
    const id = req.params.id;
    const searchIndex = tryoutData.findIndex((tryout) => tryout.id == id)
    if(searchIndex){
        tryoutData.splice(searchIndex,1)
        res.status(200).json({message:"tryout deleted"})
    } else {
        res.status(400).json({error:"tryout not found"})
    }
    
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})