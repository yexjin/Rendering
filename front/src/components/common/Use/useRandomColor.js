import React from 'react'
import Pamps from '../../pages/Exhibition/pamphlets/Pamps';
import PamphlRow from '../../pages/Exhibition/pamphlets/PamphlRow';
function useRandomColor() {

    const colors = [
        {
          id: 1,
          color: '#F5F1EE'
        },
        {
          id: 2,
          color : '#DDD6CD'
        },
        {
          id: 3,
          color : '#C3AB99'
        },
        {
            id: 4,
            color : '#D5BCAC'
        },
        {
            id: 5,
            color : '#97887D'
        },
        {
            id: 6,
            color : '#DDD6CD'
        },
      ];

      // (0 <= random <= 6
    const randId = Math.floor(Math.random() * 6) + 1;

    const randColor = colors[randId].color;
    

    return (
        <>
        <Pamps backcolor={randColor}/>
        <PamphlRow backcolor={randColor} />
        </>
    )
}

export default useRandomColor
