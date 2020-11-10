import React from 'react';
import styled from 'styled-components';

// const menuList = ['introduce', 'skills', 'myworks', 'others'];
// const menuList = ['1', '2', '3', '4'];


const Menu = (props) => {
    const {open, menuList,menuChange,menuPage} = props;
    return (
        <MenuStyle className={open && 'open'} menuList={menuList}> 
            <ul>
                {
                    menuList.map((item, idx) => {
                        return (
                            <li key={idx} className={menuPage === item ?'on':''} onClick={() =>{
                                menuChange(idx);
                                }}>
                                <div>{item}</div>
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
            max-width:calc((100% / ${props => props.menuList.length}) - 20px);
            margin:0 10px;
            width:100%;
            list-style-type:none;
            text-align:center;
            background-color:#7bbff4;
            border-radius:32px 32px 0 0;
            border:3px solid #fff;
            transition:all 0.3s;
            box-sizing:border-box;
            cursor:pointer;
            div{
                width:100%;
                display:block;
                padding:15px 0;
                font-size:20px;
                color:#fff;
                text-decoration:none;
                transition:all 0.3s;
            }
             &:hover,&.on{
                background-color:#fff;
                border:3px solid #7bbff4;
                div{
                     color:#7bbff4;
                 }
            }
        }
    }
    @media (max-width: 768px) {
        
        width: 100%;
        position: fixed;
        background: #c6e2f7;
        height: auto;
        z-index: 49;
        padding:70px 0;
        transition:all 0.3s;
        transform:translateY(-100%);
        &.open{
          
            transform:translateY(0%);
        }
        ul{
            li{
                max-width:100%;
                border-radius:0;
                margin:20px auto;
               div{
                    padding:20px 0;
                }
            }
        }
    }
`