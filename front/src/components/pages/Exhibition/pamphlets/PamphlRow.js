import React,{ useEffect } from 'react'
import Pamps from './Pamps';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { usePamphlets, useExhibitions } from '../../../use';

const StyledLink = styled(Link)`
width: 200px;
height: 600px;
text-decoration: none;
&:hover{
    width: 400px;   
    height: 600px;  
    z-index: 10;
    cursor: pointer;
    transition: all 2s;
}

`

function PamphlRow() {

  const { pamphletsList, listAllOngoing } = usePamphlets();
  const { exhibitionsList, listExhibitionsOngoing} = useExhibitions();
  useEffect(() => {
    const fetch = async () => {
      try {
        await listExhibitionsOngoing();
        await listAllOngoing();
      } catch(err){
        console.log(err);
      }
    };
    fetch();
  }, [])

    return (
        
            <>
            {pamphletsList.map((data)=>(
              <>
              <StyledLink to={`/exhibition`}>
                <Pamps 
                    pamp={data} 
                    key={data.id}
                    >
                </Pamps>
            </StyledLink>
              </>
            ))}
            </>
        // {/* {exhibitions.map(exhibition =>   
        //     <StyledLink to={`/exhibition/${exhibition.id}`} >
        //         <Pamps 
        //             pamp={exhibition} 
        //             key={exhibition.id}>
        //         </Pamps>
        //     </StyledLink>
        // )} */}
    )
}

export default PamphlRow
