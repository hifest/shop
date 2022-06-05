import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Link to='/reg'>reg</Link>
            <div></div>
            <Link to='/log'>login</Link>
        </div>
    );
};

export default App;