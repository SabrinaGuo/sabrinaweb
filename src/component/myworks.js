import React from 'react';
import styled from 'styled-components';
import WorksList from './work-list.json';
import 東京攝影活動網站 from './workImgs/東京攝影活動網站.jpg';
import 郵輪活動頁面 from './workImgs/郵輪活動頁面.jpg';
import 寧夏網站 from './workImgs/寧夏網站.jpg';
import 海南網站 from './workImgs/海南網站.jpg';
import 登山腳踏車活動報名頁面 from './workImgs/登山腳踏車活動報名頁面.jpg';
import 行程報名頁面 from './workImgs/行程報名頁面.jpg';
import 溫泉活動網站 from './workImgs/溫泉活動網站.jpg';
import 旅展占卜活動網頁 from './workImgs/旅展占卜活動網頁.jpg';
import 旅展網站02 from './workImgs/旅展網站02.jpg';
import 冬季滑雪活動頁面 from './workImgs/冬季滑雪活動頁面.jpg';
import 聖誕節許願網站 from './workImgs/聖誕節許願網站.jpg';
import 杭州網站 from './workImgs/杭州網站.jpg';
import 登山報名頁面 from './workImgs/登山報名頁面.jpg';
import 北海道網站 from './workImgs/北海道網站.jpg';
import 旅展網站01 from './workImgs/旅展網站01.jpg';
import 閩西南網站 from './workImgs/閩西南網站.jpg';
import 蘇州網站改版 from './workImgs/蘇州網站改版.jpg';
import 北京網站改版 from './workImgs/北京網站改版.jpg';
import 葛飾網站改版 from './workImgs/葛飾網站改版.jpg';
import 杭州網站改版 from './workImgs/杭州網站改版.jpg';
import 櫻花旅遊網站 from './workImgs/櫻花旅遊網站.jpg';
import 安徽活動網站 from './workImgs/安徽活動網站.jpg';
import 安徽伴手禮活動網站 from './workImgs/安徽伴手禮活動網站.jpg';
import 親子體驗員活動網站 from './workImgs/親子體驗員活動網站.jpg';
import 林務局網站 from './workImgs/林務局網站.jpg';
import 台灣心防疫頁面 from './workImgs/台灣心防疫頁面.jpg';
import 精選旅遊地圖頁面 from './workImgs/精選旅遊地圖頁面.jpg';
import 屏東伴手禮活動網站 from './workImgs/屏東伴手禮活動網站.jpg';
import 田媽媽活動網站 from './workImgs/田媽媽活動網站.jpg';
import 嘉義場景簿網站 from './workImgs/嘉義場景簿網站.jpg';
import 全台借問站活動網站 from './workImgs/全台借問站活動網站.jpg';
import 台東好行頁面 from './workImgs/台東好行頁面.jpg';
import 雄獅通運網站 from './workImgs/雄獅通運網站.jpg';
import 皖美安徽新發現專題網站 from './workImgs/皖美安徽新發現專題網站.jpg';
import 杭州專題官網 from './workImgs/杭州專題官網.jpg';
import 日本鳥取專題網站 from './workImgs/日本鳥取專題網站.jpg';
// import 安徽網站改版 from './workImgs/安徽網站改版.jpg';
import 神戶網站改版 from './workImgs/神戶網站改版.jpg';
import 安徽伴手禮遊戲網站 from './workImgs/安徽伴手禮遊戲網站.jpg';
import 小鎮漫遊網站 from './workImgs/小鎮漫遊網站.jpg';
import 新北怪獸網站 from './workImgs/新北怪獸網站.jpg';
import 基隆旅遊網站 from './workImgs/基隆旅遊網站.jpg';
import 桃園大溪旅遊網站 from './workImgs/桃園大溪旅遊網站.jpg';
import 嘉義好步道網站 from './workImgs/嘉義好步道網站.jpg';
import 閔西南旅遊網站 from './workImgs/閔西南旅遊網站.jpg';
import 微溫幸福溫泉網站 from './workImgs/微溫幸福溫泉網站.jpg';
// import axios from 'axios';



const MyWorks = (props) => {
    const [resource, setResources] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const { data, yearIdx, workType } = props;
    // const data = WorksList;
    // console.log(data[0].make[0].link);
    const picArr = [{ "name": "東京攝影活動網站", "img": 東京攝影活動網站 }, { "name": "郵輪活動頁面", "img": 郵輪活動頁面 }, { "name": "寧夏網站", "img": 寧夏網站 }, { "name": "海南網站", "img": 海南網站 }, { "name": "登山腳踏車活動報名頁面", "img": 登山腳踏車活動報名頁面 }, { "name": "行程報名頁面", "img": 行程報名頁面 }, { "name": "溫泉活動網站", "img": 溫泉活動網站 }, { "name": "旅展占卜活動網頁", "img": 旅展占卜活動網頁 }, { "name": "旅展網站02", "img": 旅展網站02 }, { "name": "冬季滑雪活動頁面", "img": 冬季滑雪活動頁面 }, { "name": "聖誕節許願網站", "img": 聖誕節許願網站 }, { "name": "杭州網站", "img": 杭州網站 }, { "name": "登山報名頁面", "img": 登山報名頁面 }, { "name": "北海道網站", "img": 北海道網站 }, { "name": "旅展網站01", "img": 旅展網站01 }, { "name": "閩西南網站", "img": 閩西南網站 }, { "name": "蘇州網站改版", "img": 蘇州網站改版 }, { "name": "北京網站改版", "img": 北京網站改版 }, { "name": "葛飾網站改版", "img": 葛飾網站改版 }, { "name": "杭州網站改版", "img": 杭州網站改版 }, { "name": "櫻花旅遊網站", "img": 櫻花旅遊網站 }, { "name": "安徽活動網站", "img": 安徽活動網站 }, { "name": "安徽伴手禮活動網站", "img": 安徽伴手禮活動網站 }, { "name": "親子體驗員活動網站", "img": 親子體驗員活動網站 }, { "name": "林務局網站", "img": 林務局網站 }, { "name": "台灣心防疫頁面", "img": 台灣心防疫頁面 }, { "name": "精選旅遊地圖頁面", "img": 精選旅遊地圖頁面 }, { "name": "屏東伴手禮活動網站", "img": 屏東伴手禮活動網站 }, { "name": "田媽媽活動網站", "img": 田媽媽活動網站 }, { "name": "嘉義場景簿網站", "img": 嘉義場景簿網站 }, { "name": "全台借問站活動網站", "img": 全台借問站活動網站 }, { "name": "台東好行頁面", "img": 台東好行頁面 }, { "name": "雄獅通運網站", "img": 雄獅通運網站 }, { "name": "皖美安徽新發現專題網站", "img": 皖美安徽新發現專題網站 }, { "name": "杭州專題官網", "img": 杭州專題官網 }, { "name": "日本鳥取專題網站", "img": 日本鳥取專題網站 }, { "name": "神戶網站改版", "img": 神戶網站改版 }, { "name": "安徽伴手禮遊戲網站", "img": 安徽伴手禮遊戲網站 }, { "name": "小鎮漫遊網站", "img": 小鎮漫遊網站 }, { "name": "新北怪獸網站", "img": 新北怪獸網站 }, { "name": "基隆旅遊網站", "img": 基隆旅遊網站 }, { "name": "桃園大溪旅遊網站", "img": 桃園大溪旅遊網站 }, { "name": "嘉義好步道網站", "img": 嘉義好步道網站 }, { "name": "閔西南旅遊網站", "img": 閔西南旅遊網站 }, { "name": "微溫幸福溫泉網站", "img": 微溫幸福溫泉網站 }]
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
                                            <figure>
                                                {picArr.map((picName, index) => {
                                                    if (data[yearIdx].make[idx].name && data[yearIdx].make[idx].name == picName.name)
                                                        return (
                                                            <img key={'img' + idx} src={picName.img} alt="" />
                                                        )
                                                })}

                                            </figure>
                                        </div>
                                        <div className="introArea">
                                            <a className={year.link === "" ? "disable" : ""} target={year.link !== "" ? "" : ''} disable={year.link === "" ? "disable" : "disable"} href={year.link !== "" ? 'javascript:;' : "javascript:;"}><p>{year.link === "" ? "已下架" : "上線中"}</p></a>
                                            {/* <a className={year.link === "" ? "disable" : ""} target={year.link !== "" ? "_blank" : ''} disable={year.link === "" ? "disable" : ""} href={year.link !== "" ? data[yearIdx].make[idx].link : ""}><p>{year.link === "" ? "已下架" : "前往"}</p></a> */}
                                            <div className="workName"><p>{year.name}</p></div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {/* <div className={"moreBtn"} onClick={openList}><p>{open ? "CLOSE" : "MORE"}</p></div> */}


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
                                            {/* <figure style={{ backgroundImage: `url('./workImgs/${data[yearIdx].cooperation[idx].img}')` }}></figure> */}
                                            <figure>
                                                {picArr.map((picName, index) => {
                                                    if (data[yearIdx].cooperation[idx].name && data[yearIdx].cooperation[idx].name == picName.name)
                                                        return (
                                                            <img key={'img' + idx} src={picName.img} alt="" />
                                                        )
                                                })}

                                            </figure>
                                        </div>
                                        <div className="introArea">
                                            <a className={year.link === "" ? "disable" : ""} target={year.link !== "" ? "" : ""} disable={year.link === "" ? "disable" : "disable"} href={year.link !== "" ? "javascript:;" : "javascript:;"}><p>{year.link === "" ? "已下架" : "上線中"}</p></a>
                                            {/* <a className={year.link === "" ? "disable" : ""} target={year.link !== "" ? "_blank"
                                                : ""} disable={year.link === "" ? "disable" : ""} href={year.link !== "" ? data[yearIdx].cooperation[idx].link : ""}><p>{year.link === "" ? "已下架" : "前往"}</p></a> */}
                                            <div className="workName"><p>{year.name}</p></div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    {/* <div className={"moreBtn"} onClick={openList}><p>{open ? "CLOSE" : "MORE"}</p></div> */}
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
        /* background-color:${props => props.cooperation ? 'lightpink' : 'lightblue'}; */
        list-style:none;
        display:flex;
        justify-content:flex-start;
        align-items:stretch;
        flex-wrap:wrap;
        box-sizing: border-box;
    }
    /* &.open{
        li{
            &:nth-of-type(n+9){
                display:block;
            }
        }
         .moreBtn{
            display:none;
        } 
    } */
    li{
        max-width:calc((100% / 4) - 20px );
        width:100%;
        margin:10px;
        background-color:#a89886;
        border-radius:5px; 
        overflow:hidden;
        @media (max-width: 768px) {
            max-width:100%;
        }
        /* &:nth-of-type(n+9){
            display:none;
        } */
        .picBox{
            max-width:100%;
            width:100%;
           
            figure{
            width:100%;
            /* background-position:center;
            background-repeat:no-repeat;
            background-size:cover; */
            padding-bottom: 75%;
            height:0;
            overflow:hidden;
            margin: 0;
            transition:all 0.3s;
                img{
                    width:100%;
                }

            }
            &::hover{
                figure{
                    img{
                        transform: scale(1.05);
                    }
                }
            }
        }
       
        .introArea{
            display:flex;
            justify-content:flex-start;
            align-items:center;
            padding:0 15px;
        }
        a{
            display:inline-block;
            max-width:40%;
            width:100%;
            background-color:#72634f;
            transition:all 0.3s;
            text-align:center;
            text-decoration:none;
            margin:8px 0;
            border-radius:5px;
            &.disable{
                cursor:default;
                background-color:#f0be99;
                // background-color:#8e8585;
                &:hover{
                    background-color:#f0be99;
                    // background-color:#8e8585;
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
                background-color:#938169;
            }
        }
        .workName{
            display:inline-block;
            p{
                padding:0 0 0 8px;
                line-height:normal;
                color:#383636;
                margin:8px 0;
            }
        }
    }
    .moreBtn{
        max-width:160px;
        border-radius:5px;
        background-color:#72634f;
        transition:all 0.3s;
        text-align:center;
        margin:20px auto;
        cursor:pointer;
        &:hover{
            background-color:#938169;
        }
        p{
            margin:0;
            color:#fff;
            padding:10px 5px;
            letter-spacing:5px;
        }
    }
`