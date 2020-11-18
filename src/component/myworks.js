import React from 'react';
import styled from 'styled-components';
import WorksList from './work-list.json';
// import axios from 'axios';



const MyWorks = (props) => {
    const [resource, setResources] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const { data, yearIdx, workType } = props;
    // const data = WorksList;
    // console.log(data[0].make[0].link);
    const openList = (e) => {
        setOpen(!open);
    }

    if (workType && workType === 'make') {
        return (
            <div>
                <Works className={open && "open"}>
                    <ul>
                        {

                            data[yearIdx].make.map((year, idx) => {
                                return (
                                    <li key={'make20' + idx}>
                                        <div className="picBox">
                                            <figure style={{ backgroundImage: `url(${data[yearIdx].make[idx].img})` }}></figure>
                                        </div>
                                        <div className="introArea">
                                            <a className={year.link === "" ? "disable" : ""} target={year.link !== "" ? "_blank" : ''} disable={year.link === "" ? "disable" : ""} href={year.link !== "" ? data[yearIdx].make[idx].link : ""}><p>前往連結</p></a>
                                            <div className="workName"><p>{year.name}</p></div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={"moreBtn"} onClick={openList}><p>{open?"CLOSE":"MORE"}</p></div>
                </Works>
            </div>
        )
    }
    if (workType == 'cooperation') {
        return (
            <div>
                <Works cooperation className={open && "open"}>
                    <ul>
                        {

                            data[yearIdx].cooperation.map((year, idx) => {
                                return (
                                    <li key={'make20' + idx}>
                                        <div className="picBox">
                                            <figure style={{ backgroundImage: `url(${data[yearIdx].cooperation[idx].img})` }}></figure>
                                        </div>
                                        <div className="introArea">
                                            <a className={year.link === "" ? "disable" : ""} target={year.link !== "" ? "_blank"
                                                : ""} disable={year.link === "" ? "disable" : ""} href={year.link !== "" ? data[yearIdx].make[idx].link : ""}><p>前往連結</p></a>
                                            <div className="workName"><p>{year.name}</p></div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={"moreBtn"} onClick={openList}><p>{open?"CLOSE":"MORE"}</p></div>
                </Works>
            </div>
        )
    }





}
export default MyWorks;

const Works = styled.div`
    padding:10px 0;
    ul{
        max-width:1200px;
        width:100%;
        margin:0 auto;
        padding:0 15px;
        background-color:${props => props.cooperation ? 'lightpink' : 'lightblue'};
        list-style:none;
        display:flex;
        justify-content:flex-start;
        align-items:stretch;
        flex-wrap:wrap;
        box-sizing: border-box;
    }
    &.open{
        li{
            &:nth-of-type(n+9){
                display:block;
            }
        }
        /* .moreBtn{
            display:none;
        } */
    }
    li{
        max-width:calc((100% / 4) - 20px );
        width:100%;
        margin:10px;
        border-radius:5px;
        &:nth-of-type(n+9){
            display:none;
        }
        .picBox{
            max-width:100%;
            width:100%;
            overflow:hidden;
            figure{
            width:100%;
            background-position:center;
            background-repeat:no-repeat;
            background-size:cover;
            padding-bottom: 75%;
            margin: 0;
            transition:all 0.3s;
             }
            &::hover{
                figure{
                    transform: scale(1.05);
                }
            }
        }
       
        .introArea{
            display:flex;
            justify-content:flex-start;
            align-items:center;
        }
        a{
            display:inline-block;
            max-width:40%;
            width:100%;
            background-color:#ff6060;
            transition:all 0.3s;
            text-align:center;
            text-decoration:none;
            margin:5px 0;
            border-radius:5px;
            &.disable{
                cursor:default;
                background-color:lightgray;
                &:hover{
                    background-color:lightgray;
                }
                p{
                    color:#000;
                }
            }
            p{
                margin:0;
                color:#fff;
                padding:10px 5px;
                letter-spacing:5px;
            }
            &:hover{
                background-color:lightcoral;
            }
        }
        .workName{
            display:inline-block;
            p{
                padding:0 0 0 5px;
                line-height:normal;
            }
        }
    }
    .moreBtn{
        max-width:160px;
        border-radius:5px;
        background-color:#ff6060;
        transition:all 0.3s;
        text-align:center;
        margin:20px auto;
        cursor:pointer;
        &:hover{
            background-color:lightcoral;
        }
        p{
            margin:0;
            color:#fff;
            padding:10px 5px;
            letter-spacing:5px;
        }
    }
`