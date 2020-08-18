import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const menuList = ['introduce', 'skills', 'myworks', 'others'];


const Menu = () => {
    return (
        <MenuStyle>
            <ul>
                {
                    menuList.map((item, idx) => {
                        return (
                            <li key={idx} >
                                <a href="">{item}</a>
                            </li>
                        )
                    })
                }

            </ul>
        </MenuStyle>
    )
}
export default Menu;

const MenuStyle = styled.div`
    width:100%;
    ul{
        max-width:1200px;
        width:100%;
        padding:0;
        margin:0 auto;
        display:flex;
        justify-content:center;
        align-items: center;
        flex-wrap:wrap;
        li{
            max-width:calc((100% / ${menuList.length}) - 20px);
            margin:0 10px;
            width:100%;
            list-style-type:none;
            text-align:center;
            background-color:#7bbff4;
            border-radius:32px 32px 0 0;
            border:3px solid #fff;
            transition:all 0.3s;
            box-sizing:border-box;;
            a{
                width:100%;
                display:block;
                padding:15px 0;
                font-size:20px;
                color:#fff;
                text-decoration:none;
                transition:all 0.3s;
            }
             &:hover{
                background-color:#fff;
                border:3px solid #7bbff4;
                 a{
                     color:#7bbff4;
                 }
            }
        }
    }
    @media (max-width: 768px) {
        ul{
            padding-top:70px;
            li{
                max-width:100%;
                border-radius:0;
            }
        }
    }
`