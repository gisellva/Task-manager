import {BrowserRouter, Switch,Route }from "react-router-dom"
import Accountpage from "../pages/Accountpage/Accountpage"
import Userspage from "../pages/addmi/Userspage"
import Homepage from "../pages/Homepage"
import Loginpage from "../pages/Loginpage"
import Projectspages from "../pages/Projectspages"
import Registerpage from "../pages/Registerpage"
import Notfoundpage from "../pages/Notfoundpage"
import Layout from "../components/Layout/Layout"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import roles from "../herpser/roles"
import Projectpageid from "../pages/Projectpage"
import routes from "../herpser/rotes"

export default function AppRouter() {

    return(
        <BrowserRouter>
           <Layout>
           <Switch>
               <PublicRoute  exact path={routes.Homepage} component={Homepage}/>
               <PublicRoute exact path={routes.Registerpage} component={Registerpage}/>
               <PublicRoute  exact path={routes.Loginpage} component={Loginpage}/>  
               <PrivateRoute  exact path={routes.Projectspages} component={Projectspages} /> 
               <PrivateRoute  exact path={routes.Projectpageid()} component={Projectpageid}/> 
               <PrivateRoute hasRole={roles.administrador} exact path="/admi/users" component={Userspage}/> 
               <PrivateRoute  exact path=  "/Accountpage" component={Accountpage}/>  
               <Route  exact path="/*" component={Notfoundpage}/>
           </Switch>
           </Layout>
        </BrowserRouter>
     )
    
};
           
                
    
                
                


                