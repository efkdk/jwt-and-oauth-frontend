import { type TypeOptions, type ToastOptions, toast } from 'react-toastify';

interface CustomToastOption extends ToastOptions {
  type?: TypeOptions;
}

const defaultOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light',
};

export function showToast(message: string, options: CustomToastOption) {
  const { type } = options;
  const customOptions = {
    ...defaultOptions,
    ...options,
  };
  switch (type) {
    case 'error':
      toast.error(message, customOptions);
      break;
    case 'success':
      toast.success(message, customOptions);
      break;
    case 'warning':
      toast.warning(message, customOptions);
      break;
    default:
      toast.info(message, customOptions);
  }
}
