import React from 'react';
import styled, {keyframes} from 'styled-components';

const Skills = () => {
    return (
        <SkillSty>
            <ul>
                <LiSty per="50"><p>H</p></LiSty>
                <LiSty per="10"><p>C</p></LiSty>
                <LiSty per="60"><p>S</p></LiSty>
                <LiSty per="30"><p>Q</p></LiSty>
                <LiSty per="70"><p>P</p></LiSty>
                <LiSty per="100"><p>A</p></LiSty>
            </ul>
        </SkillSty>
    )
}
export default Skills;

const SkillSty = styled.div`
    max-width:50%;
    width:100%;
    margin:0 auto;
    display:inline-block;
    vertical-align:top;
    ul{
        width:100%;
        list-style:none;
    }
`
 // Create the keyframes
const moveVertically = (per) => keyframes`
    0% {
        width : 0; 
    }
    100% {
        width : ${per}%;
    }
`;
const LiSty = styled.li`
    position: relative;
    width:100%;
    z-index:0;
    &:after{
        content:'';
        top:0;
        left:0;
        z-index:-1;
        height:100%;
        width:0;
        position:absolute;
        background-color:lightsalmon;
        animation:${props => moveVertically(props.per)} 1s linear 1 forwards;

    }
    p{
        padding:5px;
        color:darkblue;
    }   
`