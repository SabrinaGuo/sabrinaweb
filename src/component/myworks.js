import React from 'react';
import styled from 'styled-components';
import WorksList from './work-list.json';
// import axios from 'axios';



const MyWorks = () => {
    const [resource, setResources] = React.useState({});
    const data = WorksList;
    console.log(data);
    return (
        <div>
            <Works>
                <li><p>123456</p></li>
                <li><p>123456</p></li>
                <li><p>123456</p></li>
                <li><p>123456</p></li>
            </Works>
        </div>
    )
}
export default MyWorks;

const Works = styled.ul`
    max-width:100%;
    width:100%;
    padding:0 15px;
    background-color:lightgreen;
    list-style:none;
    display:flex;
    justify-content:flex-start;
    align-items:stretch;
    flex-wrap:wrap;
    box-sizing: border-box;
    li{
        max-width:calc((100% / 4) - 20px );
        width:100%;
        margin:10px;
        background-color:lightcoral;
        border-radius:5px;
    }
`