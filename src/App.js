import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom"
import Movies from './components/Movies'
import Movie from './components/Movie'
import Admin from './components/Admin'
import Home from './components/Home'
import Categories from './components/Categories'

export default function App() {
    return(
        <Router>
            <div className="container">
                <div className="row">
                    <h1 className="mt-3">Go, Watch A Movie!</h1>
                    <hr className="mb-3" />
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <nav>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/"> Home </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/movies"> Movies </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/by-category"> Categories </Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/admin"> Movies Catalogue </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-10">
                        <Switch>
                            <Route path="/movies/:id" component={Movie}/>
                            <Route path="/movies" component={Movies}/>
                            <Route
                                exact
                                path="/by-category/:title"
                                render={props => <Category {...props}/>}
                            />
                            <Route path="/by-category">
                                <Categories />
                            </Route>
                            <Route path="/admin">
                                <Admin />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    )
}

function Category() {
    let {title} = useParams()
    return(
        <h2>It's {title}</h2>
    )
}