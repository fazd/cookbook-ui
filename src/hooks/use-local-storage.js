
const setItem = (key, value) => {
  return window.localStorage.setItem(
    key, value
  )
};

const getItem = (key) => {
  return window.localStorage.getItem(key);
}

const removeItem = (key) => {
  window.localStorage.removeItem(key);
}

const clear = () => {
  window.localStorage.clear();
}

export const useLocalStorage = ({
  setItem,
  getItem,
  removeItem,
  clear
});
