const { Router, json } = require("express");
const { Product } = require("../models/Product");
const { User } = require("../models/Users");
const { random, bypop, bycat } = require("../DBRequests/banner");
const path = require("path");
const Category = require("../models/Category");
const router = Router();
/////// helper functions
async function findItems(prods, request){
  if(!isNaN(parseInt(request, 10))){
    const res = prods.find(el=>el.productid === parseInt(request, 10))
    return {item:res, isItem:true}
  }else{
  const reqs = request.split(' ')
  const res = prods.filter(el => reqs.some(re=>el.category.includes(re)||el.name.includes(re)))
  return {items:res, isItem:false}
  }
}
///////

router.post("/banner", async (req, res) => {
  
  const { count, bannertype } = req.body;
  let banneritems;
  switch(bannertype.id){
    case 0:
      banneritems = await random(count,req.app.locals.DB.prods);
      res.status(201).json({ banneritems });
      break;
    case 1:
      banneritems = await bycat(count, bannertype.category, req.app.locals.DB.prods);
      res.status(201).json({ banneritems });
      break;
    case 2:
      banneritems = await bypop(count,req.app.locals.DB.prods);
      res.status(201).json({ banneritems });
    break;
    default:
      res.status(404).json({message:"Not found"})
  }
});

router.get("/cats", async (req, res)=>{
  res.status(201).json({"cats":JSON.stringify(req.app.locals.DB.cats)})
})

router.post('/searchreq', async(req, res)=>{
  const responce = await findItems(req.app.locals.DB.prods, req.body.searchreq)
  res.status(201).json({'searchres':responce})
})

module.exports = router;
