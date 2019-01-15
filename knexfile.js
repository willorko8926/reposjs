module.exports ={
    development: {
        client: 'postgresql',
        connection: 'postgresql://postgres:postgres@localhost:5432/clase'
    },
    
    production:{
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};