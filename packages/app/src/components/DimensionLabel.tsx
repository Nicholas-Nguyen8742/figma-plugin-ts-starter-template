import { useElementDimensions } from "../hooks";

export function DimensionsLabel() {
  const { width, height } = useElementDimensions('root');
  return (
    <div id='distance' className='distance-container'>
      {width && height && (
        <pre>{`${width}px by ${height}px`}</pre>
      )}
    </div>
  );
}

export default DimensionsLabel;
