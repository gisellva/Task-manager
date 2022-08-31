const routes={
    Homepage:"/Homepage",
    Registerpage:"/Registerpage",
    Loginpage: "/Loginpage",
   
    Projectspages:"/Projectspages",
    Projectpageid:(id)=>(id?`/Projectpage/${id}`:"/Projectpageid") ,
    Notfoundpage:"/*",
    adim:{
        users:"/admi/users"
    }
};

export default routes