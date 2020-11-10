import React from 'react';
import styled from 'styled-components';
import WorksList from './work-list.json';
// import axios from 'axios';



const MyWorks = () => {
    const [resource, setResources] = React.useState({});
    const data = WorksList;
    console.log(data[0].make[0].img);
    return (
        <div>
            <Works>
                <li>
                    <figure style={`background-image:url('${data[0].make[0].img}')`}></figure>
                </li>
               
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
        figure{
            width:100%;
            background-position:center;
            background-repeat:no-repeat;
            background-size:cover;
        }
    }
`