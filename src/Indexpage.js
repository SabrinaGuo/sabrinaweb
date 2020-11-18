import React from 'react';
import styled from 'styled-components';
// import Menu from './component/menu';
import Gotop from './component/gotop';
// import HamburgerBtn from './component/hamburgerBtn';
import NetSpeedConverter from './component/netSpeedConverter';
import Weather from './component/weather';
import Skills from './component/skills';
import Information from './component/Information';
import WorksList from './component/work-list';
import MyWorks from './component/myworks';

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
      <Weather />
      <TwoRow>
        <Information />
        <Skills />
      </TwoRow>

      <MyWorks data={data} yearIdx={1} workType={'make'} />
      {/* <hr /> */}
      <MyWorks data={data} yearIdx={1} workType={'cooperation'} />
      {/* <hr /> */}
      <MyWorks data={data} yearIdx={0} workType={'make'} />
      {/* <hr /> */}
      <MyWorks data={data} yearIdx={0} workType={'cooperation'} />
    </BodyStyle>
  );
}

export default Indexpage;

const BodyStyle = styled.div`
  overflow-x:hidden;
  width:100%;
  box-sizing: border-box;
  
`
const TwoRow = styled.div`
  max-width:1200px;
  width:100%;
  margin:0 auto;
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;

`