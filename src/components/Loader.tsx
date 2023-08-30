import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";

const Loader = () => {
  return (
    <Spinner color="#727981" size={15} speed={1} animating={true} />
  )
}

export default Loader