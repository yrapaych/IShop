const Product = require('../models/Product')
const Category = require('../models/Category')


const bypop = async (count, prods)=>{
    return prods.sort((a,b)=>a.bought-b.bought).slice(0, count);
}

const bycat = async (count, catname, prods)=>{
    return prods.filter(elem=>elem.category.includes(catname)).sort((a,b)=>a.bought-b.bought).slice(0, count);
}

const random = async (count, prods)=>{
    const shift = (count>prods.length?0:Math.floor(Math.random()*(prods.length - count)))
    return prods.slice(shift, count+shift);
}

module.exports = {
    bypop, bycat, random
}