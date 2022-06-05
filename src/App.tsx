import React from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from './services/products';

const App = () => {
    const {data: products} = useGetProductsQuery('')
    console.log(products)
    return (
        <div>
            <Link to='/reg'>reg</Link>
            <div></div>
            <Link to='/log'>login</Link>
        </div>
    );
};

export default App;