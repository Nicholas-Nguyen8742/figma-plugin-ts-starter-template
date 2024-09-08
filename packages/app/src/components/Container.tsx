import { ReactElement, useEffect, useRef } from 'react';
import figmaMessenger from '../utils/figma';
import { useElementDimensions } from '../hooks';

interface ContainerProps {
  children?: ReactElement | ReactElement[];
}

export function Container({ children } : ContainerProps) {
  const containerRef = useRef<HTMLElement>(null);
  const dimensions = useElementDimensions('root');

  function handleMessage() {
    figmaMessenger({
      type: 'INTERNAL_SIZE',
      width: dimensions.width,
      height: dimensions.height
    });
  }

  useEffect(() => {
    if (containerRef.current == null) {
      return;
    }

    handleMessage();
  }, [containerRef.current]);

  return (
    <main ref={containerRef}>
      {children}
    </main>
  );
}

export default Container;
