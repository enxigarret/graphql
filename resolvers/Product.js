//const {categories} =require("../db")
// the data will pass through context//

const { reviews } = require("../db");

exports.Product={
    category:(parent,args,{db} )=>{
        const categoryId = parent.categoryId;
        return db.categories.find((category)=>category.id ==categoryId);
    },
    reviews:(parent,args,{db})=>{
        id=parent.id;
        return db.reviews.filter(review=>review.productId ===id);

    }
}