import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";
function successMessage(message) {
  Swal.fire({
    title: "Welcome to EcoBari!",
    text: message,
    icon: "success",
    confirmButtonText: "Continue",
    timer: 2000,
  });
}
function errorMessage(title, desc) {
  Swal.fire({
    icon: "error",
    title: title,
    text: desc,
    confirmButtonText: "Go to Login",
  });
}
function successToast(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}
function passwordErrorMessage(isPassword) {
  toast.error(isPassword, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
}

export { successMessage, errorMessage, passwordErrorMessage, successToast };
