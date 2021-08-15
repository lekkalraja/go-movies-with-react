import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
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
                                    <Link to="/admin"> Movies Catalogue </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-10">
                        <Switch>
                            <Route path="/movies">
                                <Movies />
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

function Home() {
    return(
        <h4>Home</h4>
    )
}

function Movies() {
    return(
        <h4>Movies</h4>
    )
}

function Admin() {
    return(
        <h4>Admin</h4>
    )
}