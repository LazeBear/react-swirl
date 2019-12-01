import styled from 'styled-components';

const animation = 'all 0.6s ease-in-out';
const lightColor = 'rgba(255, 255, 255, 0.5)';
const lightColorHover = 'rgba(255, 255, 255, 0.8)';
const darkColor = 'rgba(0, 0, 0, 0.5)';
const darkColorHover = 'rgba(0, 0, 0, 0.8)';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  padding: 0 20px;
  position: relative;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.4;
  transition: opacity 0.3s linear 0.5s;
`;

const ControlButton = styled.div`
  z-index: 9;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  text-align: center;
  width: 16px;
  transition: ${animation};

  span {
    border: solid ${props => (props.theme === 'dark' ? darkColor : lightColor)};
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 4px;
    transition: ${animation};
  }

  &:hover {
    span {
      border-color: ${props =>
        props.theme === 'dark' ? darkColorHover : lightColorHover};
    }
    transform: translate(0, -50%) scale(1.1);
  }
`;

export const NextButton = styled(ControlButton)`
  right: 4px;
  span {
    transform: rotate(-45deg);
  }
`;

export const LastButton = styled(ControlButton)`
  span {
    transform: rotate(135deg);
  }
  left: 4px;
`;

export const Nav = styled.div``;

export const ChildWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Slide = styled.div`
  position: absolute;
  user-select: none;
  transition: ${animation};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 80%;

  &:hover {
    cursor: pointer;
  }
  &.center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    cursor: auto;

    ${Overlay} {
      opacity: 0;
    }
  }
  &.last {
    left: 40%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    z-index: 6;
  }
  &.next {
    left: 60%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    z-index: 6;
  }
  &.hidden {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
    z-index: 3;
  }
`;

export const Dots = styled.div`
  z-index: 9;
  margin-top: 5px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  div {
    transition: ${animation};
    padding: 0 8px;
    &:hover {
      cursor: pointer;
    }

    &.active {
      padding: 0;
      span {
        background-color: ${props =>
          props.theme === 'dark' ? darkColorHover : lightColorHover};
        width: 16px;
      }
    }
  }
  span {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: ${props =>
      props.theme === 'dark' ? darkColor : lightColor};
    transition: ${animation};
    vertical-align: middle;
  }
`;
