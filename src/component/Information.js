import React from 'react';
import styled from 'styled-components';

const Information = () => {
    return (
        <InfoStlye>
            <ul className="infos_box">

            </ul>
        </InfoStlye>
    )
}
export default Information;

const InfoStlye = styled.div`
    width:50%;
    .infos_box{
        width:100%;
        padding:0 15px;
        background-color:lightyellow;
        border-radius:5px;
    }
`