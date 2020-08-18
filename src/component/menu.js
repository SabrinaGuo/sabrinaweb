import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const menuList = ['introduce', 'myworks', 'others', 'others'];


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
    ul{
        max-width:1200px;
        width:100%;
        display:flex;
        justify-content:center;
        algin-item:center;
        li{
            max-width:calc((100% / ${menuList.length}) - 30px);
            margin:0 15px;
            width:100%;
            list-style-type:none;
            text-align:center;
            a{
                width:100%;
                display:block;
                padding:15px 0;
                font-size:20px;
                color:darkblue;
                text-decoration:none;
                transition:all 0.3s;
                &:hover{
                    color:darkcyan;
                }
            }
        }
    }
`