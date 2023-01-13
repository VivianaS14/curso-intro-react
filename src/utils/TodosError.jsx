import React from "react";

const TodosError = ({ error }) => {
  return (
    <>
      <img
        src="https://opendoodles.s3-us-west-1.amazonaws.com/reading.svg"
        alt=""
        width="300"
      />
      <h3>Ups parece que tenemos un problema!</h3>
      <h3>Intenta mas tarde!</h3>
    </>
  );
};

export { TodosError };
