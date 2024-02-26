import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const handleToast = (message) => {
    toast.error(message);

    return (
        <div>
            <ToastContainer />
        </div>
    )
    
}

export default handleToast;