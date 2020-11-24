import { useEffect, MutableRefObject } from 'react';

const Drag = (ref: MutableRefObject<any>) => {
  useEffect(() => {
    const target = ref && ref.current;

    if (!target) {
      return;
    }

    let offsetX: number = 0;
    let offsetY: number = 0;
    let currentX: number;
    let currentY: number;
    let initialX: number;
    let initialY: number;

    const onMousedown = e => {
      initialX = e.clientX - offsetX;
      initialY = e.clientY - offsetY;
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = e => {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      offsetX = currentX;
      offsetY = currentY;
      target.style.transform = `translate(${currentX}px, ${currentY}px)`;
    };

    const onMouseUp = () => {
      initialX = currentX;
      initialY = currentY;
      window.removeEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    };

    target.addEventListener('mousedown', onMousedown);

    return () => {
      target.removeEventListener('mousedown', onMousedown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [ref]);
};

export default Drag;
