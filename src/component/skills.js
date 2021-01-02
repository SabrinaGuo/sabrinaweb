import React from 'react';
import styled, {keyframes} from 'styled-components';

const Skills = () => {
    return (
        <SkillSty>
            <ul>
                <LiSty per="90"><p>HTML5</p></LiSty>
                <LiSty per="90"><p>CSS3 & SCSS</p></LiSty>
                <LiSty per="80"><p>JAVASCRIPT</p></LiSty>
                <LiSty per="88"><p>JQUERY</p></LiSty>
                <LiSty per="75"><p>PHOTOSHOP</p></LiSty>
                <LiSty per="60"><p>ILLUSTRATOR</p></LiSty>
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
        padding:0 0 0 5px;
        width:100%;
        list-style:none;
    }
    @media (max-width: 768px) {
        max-width:100%;
        display: block;
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
        background-color:#b6a798;
        animation:${props => moveVertically(props.per)} 1.5s linear 1 forwards;

    }
    p{
        padding:5px;
        color:#fff;
    }   
`