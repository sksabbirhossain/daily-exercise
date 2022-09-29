import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toastify success message
const notify = () => {
  toast.success("🦄 Activity complate!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export default notify;
