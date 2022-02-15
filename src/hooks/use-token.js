import { useCallback } from "react";
import { useLocalStorage } from "./use-local-storage";

const {getItem, setItem} = useLocalStorage;

const getToken = useCallback(() => getItem('token'), [getItem]);
const setToken = useCallback((token) => setItem('token', token), [setItem]);

const getExpiresIn = useCallback(() => getItem('expiresIn'), [getItem]);

const setExpiresIn = useCallback((expiresIn) =>setItem('expiresIn', Number(expiresIn)), [setItem]);

export const useToken = ({
  getToken,
  setToken,
  getExpiresIn,
  setExpiresIn
})