import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '../../Path'
import './index.css'
const Home = () => {
    return (
        <>
            <div className="alignment">
                <h1>Welcome to React Revision</h1>
                <h3>Topics With Examples</h3>
                <ul>
                    {path?.map((arr, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/${arr[0]}`}>{arr[1]}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Home
