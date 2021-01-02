import React from 'react';
import styled from 'styled-components';

const Information = () => {
    return (
        <InfoStlye>
            <ul className="infos_box">
                <li><span>姓名：</span><span>郭怡玲(Sabrina)</span></li>
                <li><span>電話：</span><span>0905-889101</span></li>
                <li><span>電子信箱：</span><span>hsif0111@gmail.com</span></li>
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
        list-style:none;
        li{
            width:100%;
            color:#8e8585;
            font-size:24px;
            line-height:2;
        }
    }
    @media (max-width: 768px) {
        width:100%;
    }
`