module.exports ={
    development: {
        client: 'postgresql',
        connection: 'postgres://pfhtmswklaodgk:e37ac1cc2de0861ffa9a66f4a13500e84b21824e3d1b28a2414dddfebccca3d8@ec2-23-21-86-22.compute-1.amazonaws.com:5432/d6vlj0j8n9i0ko'
    },
    
    production:{
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }
};
