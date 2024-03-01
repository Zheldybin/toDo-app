// добавление в локалсторадж
const add = (key, value) => {
  if (!!value && !!key) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// есть ли что то в ЛС
const has = (key) => {
  return !!localStorage.getItem(key) ? true : false;
};

const remove = (key) => {
  if (has(key)) {
    localStorage.removeItem(key);
  }
};

const getAsString = (key) => {
  return localStorage.getItem(key);
};

const getAsValue = (key) => {
  let value = getAsString(key);
  return !!value ? JSON.parse(value) : null;
};

export { add, has, remove, getAsString, getAsValue };
