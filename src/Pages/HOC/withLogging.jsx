import React from 'react';

// Higher Order Component
function withLogging(WrappedComponent) {
  return function(props) {
    console.log('Rendering component:', WrappedComponent.name);
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}
export default withLogging