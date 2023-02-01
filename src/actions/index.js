export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY='Ekranı Temizle';
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const STORE_MEMORY='STORE_MEMORY';
export const MEMORY_TOTAL='MEMORY_TOTAL';
export const MEMORY_RESET='MEMORY_RESET';
export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}