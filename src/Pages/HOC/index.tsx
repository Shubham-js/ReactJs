import React from 'react'
import withLogging from './withLogging.jsx'
import MyComponent from './MyComonent.tsx'

const EnhancedComponent = withLogging(MyComponent)

const HOC = () => {
    return (
        <>
            <h1>Higher order components</h1>
            <p>
                In React, a higher-order component is a function that takes a
                component as an argument and returns a new component that wraps
                the original component. HOCs allow you to add additional
                functionality to a component without modifying the component's
                code.
            </p>
            <EnhancedComponent message="Hello, World!" />
        </>
    )
}
export default HOC
