import React, { Fragment } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Categories() {
    let {path} = useRouteMatch()
    return(
        <Fragment>
            <h2> Categories </h2>
            <ul>
                <li><Link to={`${path}/comeady`}>Comeady</Link></li>
                <li><Link to={`${path}/drama`}>Drama</Link></li>
                <li><Link to={`${path}/horror`}>Horror</Link></li>
            </ul>
        </Fragment>
    )   
}