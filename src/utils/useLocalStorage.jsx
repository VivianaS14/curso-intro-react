import { useState } from "react";

//CustomHook para localstorage
const useLocalStorage = (itemName, initialValue) => {
  //Traer todos del local storage
  const localStoageItem = localStorage.getItem(itemName);
  let parsedItem;

  //si localstorage es nulo o vacio
  if (!localStoageItem) {
    //crea un array vacio
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    //parse los todos del local
    parsedItem = JSON.parse(localStoageItem);
  }

  //Estado para el array de objetos todo
  const [item, setItem] = useState(parsedItem);

  //Guardar los cambios al localstorage y renderizar de nuevo
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
};

export { useLocalStorage };
