import React from 'react'
import Pamps from './Pamps';
import { Link } from 'react-router-dom';

function PamphlRow({ exhibitions}) {
    return (
        <>
        {exhibitions.map(exhibition =>   
            <Link to={`/exhibition/${exhibition.id}`} >
                <Pamps 
                    pamp={exhibition} 
                    key={exhibition.id}>
                </Pamps>
            </Link>
        )};
        </>
    )
}

export default PamphlRow
