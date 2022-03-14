
//const {products,categories} =require("../db")

const { reviews } = require("../db");

// the data will pass through context//


exports.Query={
    hello: () =>{
        //we can also return a array - must also define in typeDefs
        return "world"
    },
   products: (parent,{filter,avgRating},{db})=> {
       let filterProducts = db.products;
       if (filter){
           if (filter.onSale ===true){
               filterProducts = filterProducts.filter(product=>{
                   return product.onSale;
               })
           }
       }
       if([1,2,3,4,5].includes(avgRating)){
           filterProducts = filterProducts.filter(product=>{
               let sumRating =0;
               let numberOfReviews=0;
               //reviews from product
               reviews.forEach(review=>{
                   if(review.productId ===product.id) {
                       sumRating += product.rating
                   numberOfReviews++;
                   }
                 const avgProductRating = sumRating/numberOfReviews;
                 return avgProductRating >= avgRating;
               })


           })
       }

       return db.products
    },        
    product:(parent,args,{db} )=>{
        console.log(args);
        const productId= args.id;
        const product =db.products.find(product => product.id==productId); // we can refactory this code like categories below.
        if(!productId) return null;
        return product ;
    }, //***no else but it means Else}
    categories:()=>categories,
    category:(parent,args,{db} )=>{
        const {id}=args;
        return db.categories.find((category)=>category.id==id); // this will automatically return null.

    }
}