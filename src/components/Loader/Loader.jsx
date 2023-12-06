import {ThreeDots} from "react-loader-spinner";

const Loader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#DA291C"
    ariaLabel="three-dots-loading"
    wrapperStyle={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
    visible={true}
  />
)

export default Loader;