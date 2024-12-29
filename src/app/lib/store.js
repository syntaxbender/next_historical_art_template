import { configureStore } from '@reduxjs/toolkit';
import mobMenuReducer from '../components/menu/mobileNav/mobileNavSlice';
import preloaderReducer from '../components/preloader/preloaderSlice';
import subscribeReducer from '../components/subscribe/subscribeSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      mobMenu: mobMenuReducer,
      preloader: preloaderReducer,
      subscribe: subscribeReducer,
    },
  });
};

// AppStore, RootState ve AppDispatch tip bilgileri JavaScript'te kullanılmadığı için kaldırılmıştır.
