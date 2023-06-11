// Validaciones del formulario
export const regName = (string) => {
  //eslint-disable-next-line
  return /^[a-zA-Z]+ [a-zA-Z]+$/.test(string);
};

export const regEmail = (string) => {
  //eslint-disable-next-line
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    string
  );
};

export const regPhoneNumber = (number) => {
  //eslint-disable-next-line
  return /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(number);
};

export const regZipCode = (number) => {
  //eslint-disable-next-line
  return /(^[a-z]{1}\d{4}[a-z]{3}$|^\d{4}$)/.test(number);
};
