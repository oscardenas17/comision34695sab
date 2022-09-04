import React from "react";

const Alerta = ({ alerta }) => {
  return (
   
    <div className="max-w-lg mx-auto m-4 from-sky-400 to-green-600   bg-gradient-to-br text-center p-3 rounded-xl uppercase font-bold  my-10 ">
     {alerta}
    </div>
  );
};

export default Alerta;
