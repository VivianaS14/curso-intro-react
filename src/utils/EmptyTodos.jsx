import React from "react";

const IMG_LINK =
  "https://opendoodles.s3-us-west-1.amazonaws.com/reading-side.svg";

const EmptyTodos = () => {
  return (
    <>
      <img src={IMG_LINK} alt="" width="300" />
      <h3>Crea tu primer To Do!</h3>
    </>
  );
};

export { EmptyTodos };
