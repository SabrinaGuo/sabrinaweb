import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Menu from './component/menu';
import Gotop from './component/gotop';

function Indexpage() {
  return (
    <BodyStyle>
      <Menu />
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