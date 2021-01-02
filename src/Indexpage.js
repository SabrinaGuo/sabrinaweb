import React from 'react';
import styled from 'styled-components';
// import Menu from './component/menu';
import Gotop from './component/gotop';
// import HamburgerBtn from './component/hamburgerBtn';
import NetSpeedConverter from './component/netSpeedConverter';
// import Weather from './component/weather';
import Skills from './component/skills';
import Information from './component/Information';
import WorksList from './component/work-list';
import MyWorks from './component/myworks';
import background from './component/images/arw-zero-jgbyjyewY5k-unsplash.jpg';

const Indexpage = () => {
  // const menuList = ['關於我', '相關作品', '網路速度轉換計算', '氣象預報'];
  // const [open, setOpen] = React.useState(false);
  // const [menuPage, setMenuPage] = React.useState(menuList[0]);
  // const openBtn = () => {
  //   setOpen(!open);
  // }
  // const menuChange = (idx) => {
  //   setMenuPage(menuList[idx])
  // }
  // console.log("ppp", menuPage);
  const data = WorksList;
  return (
    <BodyStyle>
      {/* <HamburgerBtn open={open} onClick={openBtn} /> */}
      {/* <Menu open={open} menuPage={menuPage} menuList={menuList} menuChange={menuChange} /> */}
      <Gotop animationDuration={"smooth"}><span>GOTOP</span></Gotop>
      {/* <NetSpeedConverter/> */}
      {/* {(() => {
        switch (menuPage) {
          case '關於我': return (<h1>建構中</h1>); break;
          case '相關作品': return  <MyWorks/>; break;
          case '網路速度轉換計算': return <NetSpeedConverter />; break;
          case '氣象預報': return <Weather />; break;
          default: return null;
        }
      })()} */}
      {/* <Weather /> */}
      <H1>Sabrina 作品集</H1>
      <TwoRow>
        <Skills />
        <Information />
      </TwoRow>
      <H5>2020年製作頁面</H5>
      <MyWorks data={data} yearIdx={1} workType={'make'} />
      <H5>2020年協作頁面</H5>
      <MyWorks data={data} yearIdx={1} workType={'cooperation'} />
      <H5>2019年製作頁面</H5>
      <MyWorks data={data} yearIdx={0} workType={'make'} />
      <H5>2019年協作頁面</H5>
      <MyWorks data={data} yearIdx={0} workType={'cooperation'} />
    </BodyStyle>
  );
}

export default Indexpage;

const BodyStyle = styled.div`
  overflow-x:hidden;
  max-width:100%;
  width:100%;
  background-image: url(${background});
  box-sizing: border-box;
  background-size:cover;
  background-position:center top;
  background-repeat:no-repeat;
`
const TwoRow = styled.div`
  max-width:1200px;
  width:100%;
  margin:0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;

`
const H5 = styled.h5`
  text-align:center;
  color:#8e8585;
  font-size:28px;
  line-height:1.3;
`
const H1 = styled.h1`
  text-align:center;
  color:#8e8585;
  font-size:48px;
  line-height:1.3;
`