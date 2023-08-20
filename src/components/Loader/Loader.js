import { ProgressBar } from 'react-loader-spinner';

function Loader({ width = 40 }) {
  return (
    <ProgressBar
      height="17"
      width="65"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{ margin: 0 }}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
}

export default Loader;
