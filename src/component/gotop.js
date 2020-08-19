import React from 'react';
import styled from 'styled-components';

const Gotop = props => {
    const [showBtn, setShowbtn] = React.useState(false); //控制顯示隱藏
    //優化
    const winHeight = React.useRef(null);
    const selfHeight = React.useRef(null);
    let nowTop = typeof window !== "undefined" ? window.scrollY : 0;
    const prevTop = React.useRef(nowTop);
  
    // 監聽滾動事件
    React.useEffect(() => {
      window.addEventListener("scroll", scrollFc);
      return () => {
        window.removeEventListener("scroll", scrollFc);
      };
    }, []);
    const gotop = () => {
      window.scrollTo({
        top: 0,
        behavior: props.animationDuration
      });
    };
    const scrollFc = () => {
      nowTop = window.scrollY;
      const pos = prevTop.current - nowTop > 0; //下:False 上:Ture
  
      if (!winHeight.current) {
          winHeight.current = document.body.getBoundingClientRect().height;
          selfHeight.current = winHeight.current * 0;
      }
  
      if (pos && nowTop > selfHeight.current) {
        setShowbtn(true);
      } else {
        setShowbtn(false);
      }
      prevTop.current = nowTop;
    };
  
    return (
      <Gotopdiv style={{ showGoTopBtn: showBtn }} onClick={gotop}>
        {props.children}
      </Gotopdiv>
    );
  };
  Gotop.defaultProps = {
    animationDuration: "auto"
  };
  
  
  // css
  const Gotopdiv = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    color: #343434;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color:#fff;
    border:2px solid #7bbff4;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    display: ${(props) =>
      props.style.showGoTopBtn ? "block" : "none"};
    span {
      line-height: 60px;
      color: #7bbff4;
    }
    &:hover {
      background-color: #7bbff4;
      span {
        color: #fff;
      }
    }
    @media (max-width: 768px) {
      right: 20px;
    }
  `;
  export default Gotop;