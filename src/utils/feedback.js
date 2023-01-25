// import toast from 'react-simple-toasts';
import { toast } from 'react-toastify';
 
export const alertError = (message) => {
    // toast(message, { className: 'toast-error' })
    toast.error(message, {
        theme: "colored",
        position: toast.POSITION.BOTTOM_CENTER
      })
}

export const alertSuccess = (message) => {
    // toast(message, { className: 'toast-success' })
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT
      })
}