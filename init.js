const mongoose = require('mongoose')
const Category = require('./models/Category')
const Product = require('./models/Product')


async function init(){
    const cats = []
    const prods = []
    while(true){
        const data = await Category.find({},null,{'skip':cats.length});
        if(!data.length){
            break;
        }
        cats.push(...data)
    }
    while(true){
        const data= await Product.find({},null,{'skip':prods.length});
        if(!data.length){
            break;
        }
        prods.push(...data)
    }
    const cat = {}
    cats.forEach(elem => {
        const splc = elem.name.split(" ");
        splc.reduce((o, s) => {
          if (o) {
            if (!o[s]) {
              return (o[s] = {});
            } else {
              return o[s];
            }
          } else return null;
        }, cat);
    })

    return {cats:cat, prods}
}

module.exports = {init}