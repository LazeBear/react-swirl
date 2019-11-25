import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

var Order;

(function (Order) {
  Order["CENTER"] = "center";
  Order["NEXT"] = "next";
  Order["LAST"] = "last";
  Order["HIDDEN"] = "hidden";
})(Order || (Order = {}));

function generateOrderArray(arr) {
  return arr.map(function (_i, idx) {
    var order;

    switch (idx) {
      case 0:
        order = Order.CENTER;
        break;

      case 1:
        order = Order.NEXT;
        break;

      case arr.length - 1:
        order = Order.LAST;
        break;

      default:
        order = Order.HIDDEN;
    }

    return order;
  });
}
function reallocateOrder(componentArray, orderArray) {
  return componentArray.map(function (i, idx) {
    var order = orderArray[idx];
    return {
      child: i,
      order: order,
      index: idx
    };
  });
}
function rotate(oldCenter, newCenter, array) {
  var arrayCopy = [].concat(array);

  while (oldCenter !== newCenter) {
    if (newCenter > oldCenter) {
      var data = arrayCopy.pop();
      arrayCopy.unshift(data);
      newCenter--;
    } else {
      var _data = arrayCopy.shift();

      arrayCopy.push(_data);
      newCenter++;
    }
  }

  return arrayCopy;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: 9;\n  margin-top: 5px;\n  user-select: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  div {\n    transition: ", ";\n    padding: 0 8px;\n    &:hover {\n      cursor: pointer;\n    }\n\n    &.active {\n      padding: 0;\n      span {\n        background-color: rgba(0, 0, 0, 0.8);\n        width: 16px;\n      }\n    }\n  }\n  span {\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: ", ";\n    vertical-align: middle;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  user-select: none;\n  transition: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  max-width: 80%;\n\n  &:hover {\n    cursor: pointer;\n  }\n  &.center {\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9;\n    cursor: auto;\n\n    ", " {\n      opacity: 0;\n    }\n  }\n  &.last {\n    left: 40%;\n    top: 50%;\n    transform: translate(-50%, -50%) scale(0.9);\n    z-index: 6;\n  }\n  &.next {\n    left: 60%;\n    top: 50%;\n    transform: translate(-50%, -50%) scale(0.9);\n    z-index: 6;\n  }\n  &.hidden {\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%) scale(0.8);\n    opacity: 0;\n    z-index: 3;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  span {\n    transform: rotate(135deg);\n  }\n  left: 4px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  right: 4px;\n  span {\n    transform: rotate(-45deg);\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: 9;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  cursor: pointer;\n  text-align: center;\n  width: 16px;\n  transition: ", ";\n\n  span {\n    border: solid rgba(0, 0, 0, 0.5);\n    border-width: 0 4px 4px 0;\n    display: inline-block;\n    padding: 4px;\n    transition: ", ";\n  }\n\n  &:hover {\n    span {\n      border-color: rgba(0, 0, 0, 0.8);\n    }\n    transform: translate(0, -50%) scale(1.1);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  opacity: 0.4;\n  transition: opacity 0.3s linear 0.5s;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: column;\n  padding: 0 20px;\n  position: relative;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var animation = 'all 0.6s ease-in-out';
var Wrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject());
var Container =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject2());
var Overlay =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject3());
var ControlButton =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject4(), animation, animation);
var NextButton =
/*#__PURE__*/
styled(ControlButton)(
/*#__PURE__*/
_templateObject5());
var LastButton =
/*#__PURE__*/
styled(ControlButton)(
/*#__PURE__*/
_templateObject6());
var Nav =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject7());
var ChildWrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject8());
var Slide =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject9(), animation, Overlay);
var Dots =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject10(), animation, animation);

var ReactCyclone = function ReactCyclone(_ref) {
  var children = _ref.children,
      _ref$showDots = _ref.showDots,
      showDots = _ref$showDots === void 0 ? true : _ref$showDots,
      _ref$showNav = _ref.showNav,
      showNav = _ref$showNav === void 0 ? true : _ref$showNav,
      _ref$autoPlay = _ref.autoPlay,
      autoPlay = _ref$autoPlay === void 0 ? true : _ref$autoPlay,
      _ref$pauseOnHover = _ref.pauseOnHover,
      pauseOnHover = _ref$pauseOnHover === void 0 ? true : _ref$pauseOnHover,
      _ref$playSpeed = _ref.playSpeed,
      playSpeed = _ref$playSpeed === void 0 ? 5000 : _ref$playSpeed;
  var initialOrderArray = generateOrderArray(children);

  var _useState = useState(0),
      contentHeight = _useState[0],
      setContentHeight = _useState[1];

  var _useState2 = useState(0),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = useState(initialOrderArray),
      orderArray = _useState3[0],
      setOrderArray = _useState3[1];

  var _useState4 = useState(reallocateOrder(children, orderArray)),
      displayArray = _useState4[0],
      setDisplayArray = _useState4[1];

  var targetRef = useRef();
  var autoPlayInterval;
  useEffect(function () {
    var maxHeight = contentHeight;

    if (targetRef.current) {
      var _children = targetRef.current.children;

      if (_children && _children.length) {
        Array.from(_children).forEach(function (child) {
          var grandChildren = child.children;

          if (grandChildren && grandChildren.length) {
            var height = Array.from(grandChildren)[0].offsetHeight;

            if (height > maxHeight) {
              maxHeight = height;
            }
          }
        });
      }

      setTimeout(function () {
        return setContentHeight(maxHeight);
      });
    }
  }, [contentHeight]);

  if (autoPlay) {
    useEffect(function () {
      startAutoPlay();
      return function () {
        return stopAutoPlay();
      };
    });
  }

  var _onMouseEnter = function onMouseEnter() {
    if (pauseOnHover) {
      stopAutoPlay();
    }
  };

  var _onMouseLeave = function onMouseLeave() {
    if (pauseOnHover) {
      startAutoPlay();
    }
  };

  var slideTo = function slideTo(index) {
    if (index === current) {
      return;
    }

    var rotatedArray = rotate(current, index, orderArray);
    setCurrent(index);
    setOrderArray(rotatedArray);
    setDisplayArray(reallocateOrder(children, rotatedArray));
  };

  var slideToNext = function slideToNext() {
    var next = current + 1;

    if (next > displayArray.length - 1) {
      next = 0;
    }

    slideTo(next);
  };

  var slideToLast = function slideToLast() {
    var last = current - 1;

    if (last < 0) {
      last = displayArray.length - 1;
    }

    slideTo(last);
  };

  var startAutoPlay = function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(function () {
      slideToNext();
    }, playSpeed);
  };

  var stopAutoPlay = function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  };

  return React.createElement(Wrapper, null, React.createElement(Container, {
    ref: targetRef,
    style: {
      height: contentHeight
    }
  }, displayArray.map(function (i) {
    return React.createElement(Slide, {
      className: i.order,
      key: i.index,
      onClick: function onClick() {
        return slideTo(i.index);
      },
      onMouseEnter: function onMouseEnter() {
        return _onMouseEnter();
      },
      onMouseLeave: function onMouseLeave() {
        return _onMouseLeave();
      }
    }, React.createElement(ChildWrapper, null, i.child), React.createElement(Overlay, null));
  })), showNav && React.createElement(Nav, null, React.createElement(LastButton, {
    onClick: function onClick() {
      return slideToLast();
    }
  }, React.createElement("span", null)), React.createElement(NextButton, {
    onClick: function onClick() {
      return slideToNext();
    }
  }, React.createElement("span", null))), showDots && React.createElement(Dots, null, displayArray.map(function (_ref2) {
    var index = _ref2.index,
        order = _ref2.order;
    return React.createElement("div", {
      key: index,
      className: order === Order.CENTER ? 'active' : '',
      onClick: function onClick() {
        return slideTo(index);
      }
    }, React.createElement("span", null, "\xA0"));
  })));
};

export default ReactCyclone;
//# sourceMappingURL=react-swirl.esm.js.map
