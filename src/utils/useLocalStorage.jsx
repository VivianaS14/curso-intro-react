import { useEffect, useState } from "react";

//CustomHook para localstorage
const useLocalStorage = (itemName, initialValue) => {
  //Estado de carga y error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Estado para el array de objetos todo
  const [item, setItem] = useState(initialValue);

  //useEffect -> Ejecuta el codigo que le enviemos justo antes de renderizar todos los componentes
  /* useEffect(() => {
    console.log('use effect');
  }, [totalTodos]); */
  //El segundo parametro define cuando se ejecuta el use effect, al momento en que cambia el valor de total tod
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
