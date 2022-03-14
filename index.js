const {ApolloServer} =require("apollo-server");
const {typeDefs} =require("./schema");
const {db} =require("./db") //this needs only inside resolver - we pass through context.
const {Query} =require("./resolvers/Query")
const {Product} =require("./resolvers/Product")
const {Category} =require("./resolvers/Category")
const {Mutation} =require("./resolvers/Mutation")






//  ! is for not null.



const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Category,
        Product,
        Mutation
    },
    context:{
        db
    }},
);
//remember to add  {} inside server
// run node index
//http://localhost:4000/ to playgroud

server.listen({port:4000}).then(url=>{
    console.log(`server is ready at + ${url}`)
})