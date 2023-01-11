import { useEffect, useState } from "react";

//CustomHook para localstorage
const useLocalStorage = (itemName, initialValue) => {
  //Estado de carga y error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Estado para el array de objetos todo
  const [item, setItem] = useState(initialValue);

  //useEffect
  useEffect(() => {
    setTimeout(() => {
      try {
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

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 2000);
  });

  //Guardar los cambios al localstorage y renderizar de nuevo
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
};

export { useLocalStorage };
