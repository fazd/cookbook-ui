import { toast } from 'react-toastify';

export const errorNotify = (message, time = 3000) => toast.error(message, {
  position: 'bottom-center',
  autoClose: time,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'colored'
});

export const successNotify = (message, time = 3000) => toast.success(message, {
  position: 'bottom-center',
  autoClose: time,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'colored'
});
