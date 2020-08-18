import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const HamburgerBtn = (props) => {
    console.log(props);
    return (
        <MenuBtn className={props.open &&'open'} onClick={props.onClick}>
            <span></span>
            <span></span>
            <span></span>
        </MenuBtn>
    )
}
export default HamburgerBtn;

const MenuBtn = styled.div`
    cursor:pointer;
    display:none;
    position:fixed;
    top:20px;
    right:20px;
    max-width:35px;
    width:100%;
    height: 30px;
    z-index:50;
    span{
        position: absolute;
        display: block;
        width:100%;
        height:5px;
        border-radius:10px;
        background-color:#7bbff4;
        transition: .3s cubic-bezier(.8, .5, .2, 1.4);
        :nth-of-type(1){
            top:0px;
            left: 0px;
        }
        :nth-of-type(2){
            top:13px;
            left: 0px;
        }
        :nth-of-type(3){
            bottom:0px;
            left: 0px;
        }
    }
    :not(.open):hover{
        span{
            :nth-of-type(1){
                transform: scaleX(0.85);
             }
             :nth-of-type(2){
                transform: scaleX(0.7);
            }
            :nth-of-type(3){
                transform: scaleX(0.85);
            }
        }
    }
    &.open{
        span{
            :nth-of-type(1){
                transform: rotate(45deg) scaleX(0.7);
                top: 13PX;
                left: -8px;
             }
             :nth-of-type(2){
                transform: scale(0);
                transition-duration: 50ms
            }
            :nth-of-type(3){
                transform: rotate(-45deg) scaleX(0.7);
                top: 13PX;
                left: 7px;
            }
        }
    }
    @media (max-width: 768px) {
        display:block;
    }
`