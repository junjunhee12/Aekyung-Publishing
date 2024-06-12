import styled from "styled-components"
import { Img } from "./Home"
import 지구 from "../../Img/지구.jpg"
import { P } from "../../All/All"
const MBeautyC = styled.div`
position: absolute;
    display: ${({sideheight})=>( sideheight ? "none" : "block")};
    @media (max-width :1280px){
        width: 100%;
        max-width: 1400px;
        height: 100vh ;
        background-color: #eee;
        padding: 50px 1rem;
        margin: 50px auto 0;
        z-index: -1;
    }
    @media (max-width :499px){
        width: 100%;
        max-width: 1400px;
        height: 50vh ;
        background-color: #eee;
        padding: 50px 1rem;
        margin: 50px auto 0;
        z-index: -1;
    }
    @media (min-width :1280px) and (max-width:1920px){
        display: none;
    }
    /* @media (max-width :499px){
        display: none;
    } */
    
`

const Beautycontent = styled.div`
    width: 100%;
    height: 50vh;
    background-color: red;
    /* background-color: red; */
    @media (max-width :499px){
        width: 100%;
        height: 40vh ;
    }
    & > ${P}{
        position: absolute;
        bottom: -100px;
        left: 0;
    }
`
function MBeauty({sideheight}){
    return(
        <>
            <MBeautyC sideheight={sideheight}>
                <Beautycontent>
                    <Img src={지구}/>
                    <P>애경에 많은 관심 부탁드립니다!!</P> 
                </Beautycontent>
            </MBeautyC>
        </>
    )
}

export default MBeauty