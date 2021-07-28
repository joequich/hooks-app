import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <>
                <NavBar />
                <div className="container">
                    <Switch>
                        {/* exact: When true, will only match if the path matches the location.pathname exactly. */}
                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/about" component={AboutScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </>
        </Router>
    )
}
