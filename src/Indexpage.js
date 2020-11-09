import React from 'react';
import styled from 'styled-components';
import Menu from './component/menu';
import Gotop from './component/gotop';
import HamburgerBtn from './component/hamburgerBtn';
import NetSpeedConverter from './component/netSpeedConverter';
import Weather from './component/weather';
import MyWorks from './component/myworks'

const Indexpage = () => {
  const menuList = ['關於我', '相關作品', '網路速度轉換計算', '氣象預報'];
  const [open, setOpen] = React.useState(false);
  const [menuPage, setMenuPage] = React.useState(menuList[0]);
  const openBtn = () => {
    setOpen(!open);
  }
  const menuChange = (idx) => {
    setMenuPage(menuList[idx])
  }
  // console.log("ppp", menuPage);

  return (
    <BodyStyle>
      <HamburgerBtn open={open} onClick={openBtn} />
      <Menu open={open} menuPage={menuPage} menuList={menuList} menuChange={menuChange} />
      <Gotop animationDuration={"smooth"}><span>GOTOP</span></Gotop>
      {/* <NetSpeedConverter/> */}
      {(() => {
        switch (menuPage) {
          case '關於我': return (<h1>建構中</h1>); break;
          case '相關作品': return (<h1>整理中</h1>); break;
          case '網路速度轉換計算': return <NetSpeedConverter />; break;
          case '氣象預報': return <Weather />; break;
          default: return null;
        }
      })()}
      {/* <Weather /> */}
      <MyWorks/>
    </BodyStyle>
  );
}

export default Indexpage;

const BodyStyle = styled.div`
  overflow-x:hidden;
  width:100%;
  box-sizing: border-box;
  
`