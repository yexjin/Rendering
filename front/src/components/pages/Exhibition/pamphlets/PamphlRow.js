import React,{ useEffect } from 'react'
import Pamps from './Pamps';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { usePamphlets, useExhibitions } from '../../../use';

const StyledLink = styled.div`
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

  const navigate = useNavigate();

  const { pamphletsList, listAllOngoing } = usePamphlets();
  // const { exhibitionsList, listExhibitionsOngoing} = useExhibitions();
  useEffect(() => {
    const fetch = async () => {
      try {
        // await listExhibitionsOngoing();
        await listAllOngoing();
      } catch(err){
        console.log(err);
      }
    };
    fetch();
  }, [])

  const moveHandler = async(id) =>{
    try {
      navigate(`${id}`);
    } catch (e) {
      alert(e);
    }
  }
    return (
        
            <>
            {pamphletsList.map((data)=>(
              <>
              <StyledLink onClick={()=>{moveHandler(data.id)}}>
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