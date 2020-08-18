import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Menu from './component/menu';
import Gotop from './component/gotop';
import HamburgerBtn from './component/hamburgerBtn';

const Indexpage = () => {
  const[open,setOpen] = React.useState(false);
  const openBtn = () =>{
    console.log('1111');
      setOpen(!open);
  }

  return (
    <BodyStyle>
      <HamburgerBtn open={open} onClick={openBtn}/>
      <Menu open={open} />
      <Gotop animationDuration={"smooth"}><span>GOTOP</span></Gotop>
    </BodyStyle>
  );
}

export default Indexpage;

const BodyStyle = styled.div`
  height:500vh;
  overflow-x:hidden;
  width:100%;
`