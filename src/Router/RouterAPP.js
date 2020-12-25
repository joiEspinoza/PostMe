import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import LoginScreen from '../Components/auth/LoginScreen';
import RegisterScreen from '../Components/auth/RegisterScreen';
import HomeScreen from '../Components/home/HomeScreen';
import NavBar from '../Components/ui/NavBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//////<<<<<------------------------------------------------``

const RouterAPP = () => 
{   

    const { logged } = useSelector( state => state.auth );


//************************************************************************************************************ */

    return (

        <Router>

            <div>

                { logged && <NavBar/> }
                
                <Switch>

              
                    <PublicRoute exact path="/login" component={ LoginScreen } isLoggedIn={ logged } />

                    <PublicRoute exact path="/register" component={ RegisterScreen } isLoggedIn={ logged } />

                    <PrivateRoute path="/" component={ HomeScreen } isLoggedIn={ logged } />

                    <Redirect to="/login" />
                  
                </Switch>

            </div>

        </Router>

    );

};

//////---------------------------------------------->>>>>

export default RouterAPP
