//const {products} =require("../db")
// the data will pass through context//

exports.Category={   // ***Each Category is the parent of product , the id is so from parent not arg.

    products:(parent,{filter,avgRating},{db} )=>{
        const categoryId = parent.id;
        const categoryProducts= db.products.filter((product)=>product.categoryId===categoryId);
         let filterProducts = categoryProducts;
     
            if (filter){
                if (filter.onSale ===true){
                    filterProducts = filterProducts.filter(product=>{
                        return filterProducts.onSale;
                    })
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
            }
            return filterProducts
    }
}