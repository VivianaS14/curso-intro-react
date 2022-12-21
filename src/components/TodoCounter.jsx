import React from "react";

function TodoCounter({ complete, total }) {
  return (
    <h3>
      Has completado {complete} de {total} To Do's
    </h3>
  );
}

export { TodoCounter };
