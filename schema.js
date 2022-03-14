const {gql} =require("apollo-server");


//   products:[Product!]!  is Typical object type declaration
//   the [category!]! - - - is the ***best practice
//   In Mutation, the content after ":" is for return
exports.typeDefs =gql`
type Query {
    hello: [String!]!
    products(filter:ProductsFilterInput):[Product!]!  
    product(id:ID!): Product
    categories:[Category!]!
    category(id:ID!):Category
}
type Mutation{
    addCategory(input:AddCategoryInput!):Category!
    addProduct(input:AddProductInput!):Product!
    addReview(input:AddReviewInput!):Review!
    deleteCategory(id:ID!):Boolean!
    deleteProduct(id:ID!):Boolean!
    deleteReview(id:ID!):Boolean!
    updateCategory(id:ID!,input:updateCatetoryInput!):Category!
}
type Product {
    id:ID!
    name:String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category:Category
    reviews:[Review!]!
}
type Category {
    id:ID!
    name:String!
    products(filter:ProductsFilterInput):[Product!]! 
}
type Review{
    id:ID!
    date:String!
    title:String!
    comment:String!
    rating:String!
}
input ProductsFilterInput{
    onSale:Boolean
    avgRating:Int
}
input AddCategoryInput{
name:String!
}
input UpdateCategoryInput{
name:String!
}
input AddCategoryInput{
    name:String!
    description: String!
    quantity: Int!
    price: Float!
    image:String!
    onSale: Boolean!
    categoryId:String!
}
input AddReviewInput{
    date:String!
    title:String!
    comment:String!
    rating:Int!
    productId:ID!
}
`;