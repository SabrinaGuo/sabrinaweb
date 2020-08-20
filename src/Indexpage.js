import React from 'react';
import styled from 'styled-components';
import Menu from './component/menu';
import Gotop from './component/gotop';
import HamburgerBtn from './component/hamburgerBtn';
import NetSpeedConverter from './component/netSpeedConverter';
import Weather from './component/weather';

const Indexpage = () => {
  const[open,setOpen] = React.useState(false);
  const openBtn = () =>{
      setOpen(!open);
  }

  return (
    <BodyStyle>
      <HamburgerBtn open={open} onClick={openBtn}/>
      <Menu open={open} />
      <Gotop animationDuration={"smooth"}><span>GOTOP</span></Gotop>
      <NetSpeedConverter/>
      <Weather/>
    </BodyStyle>
  );
}

export default Indexpage;

const BodyStyle = styled.div`
  overflow-x:hidden;
  width:100%;
  box-sizing: border-box;
  
`