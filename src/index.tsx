import React, { useRef, useEffect, useState } from 'react';

import { Order, DisplayElement, ComponentSettings } from './interface';
import { generateOrderArray, reallocateOrder, rotate } from './helper';
import {
  Wrapper,
  Container,
  Overlay,
  Slide,
  Dots,
  NextButton,
  LastButton,
  ChildWrapper,
  Nav,
} from './styledComponents';

export const ReactSwirl = ({
  children,
  showDots = true,
  showNav = true,
  autoPlay = true,
  pauseOnHover = true,
  playSpeed = 5000,
}: ComponentSettings) => {
  const initialOrderArray = generateOrderArray(children);
  const [contentHeight, setContentHeight] = useState(0);
  const [current, setCurrent] = useState(0);
  const [orderArray, setOrderArray] = useState(initialOrderArray);
  const [displayArray, setDisplayArray] = useState(
    reallocateOrder(children, orderArray)
  );

  const targetRef = useRef<HTMLDivElement>();
  let autoPlayInterval: any;

  useEffect(() => {
    let maxHeight = contentHeight;
    if (targetRef.current) {
      const children = targetRef.current.children;
      if (children && children.length) {
        Array.from(children).forEach(child => {
          const grandChildren = child.children;
          if (grandChildren && grandChildren.length) {
            const element = Array.from(grandChildren)[0] as HTMLDivElement;
            const height = element.offsetHeight;
            if (height > maxHeight) {
              maxHeight = height;
            }
          }
        });
      }
      setTimeout(() => {
        setContentHeight(maxHeight);
      });
    }
  }, [contentHeight]);

  if (autoPlay) {
    useEffect(() => {
      startAutoPlay();
      return () => stopAutoPlay();
    });
  }

  const onMouseEnter = () => {
    if (autoPlay && pauseOnHover) {
      stopAutoPlay();
    }
  };

  const onMouseLeave = () => {
    if (autoPlay && pauseOnHover) {
      startAutoPlay();
    }
  };

  const slideTo = (index: number) => {
    if (index === current) {
      return;
    }
    const rotatedArray = rotate(current, index, orderArray);
    setCurrent(index);
    setOrderArray(rotatedArray);
    setDisplayArray(reallocateOrder(children, rotatedArray));
  };

  const slideToNext = () => {
    let next = current + 1;
    if (next > displayArray.length - 1) {
      next = 0;
    }
    slideTo(next);
  };

  const slideToLast = () => {
    let last = current - 1;
    if (last < 0) {
      last = displayArray.length - 1;
    }
    slideTo(last);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayInterval = setInterval(() => {
      slideToNext();
    }, playSpeed);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
  };

  return (
    <Wrapper>
      <Container ref={targetRef as any} style={{ height: contentHeight }}>
        {displayArray.map((i: any) => (
          <Slide
            className={i.order}
            key={i.index}
            onClick={() => slideTo(i.index)}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
          >
            <ChildWrapper>{i.child}</ChildWrapper>
            <Overlay />
          </Slide>
        ))}
      </Container>
      {showNav && (
        <Nav>
          <LastButton onClick={() => slideToLast()}>
            <span></span>
          </LastButton>
          <NextButton onClick={() => slideToNext()}>
            <span></span>
          </NextButton>
        </Nav>
      )}

      {showDots && (
        <Dots>
          {displayArray.map(({ index, order }: DisplayElement) => {
            return (
              <div
                key={index}
                className={order === Order.CENTER ? 'active' : ''}
                onClick={() => slideTo(index)}
              >
                <span>&nbsp;</span>
              </div>
            );
          })}
        </Dots>
      )}
    </Wrapper>
  );
};
