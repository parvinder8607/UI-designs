import React from "react";

const Box3D2 = () => {
  return (
    <section className="bg-black py-28">
        <div className="scene">
      <div className="box-3d cursor-pointer">
        <div className="box-front"></div>
        <div className="box-back"></div>
        <div className="box-right"></div>
        <div className="box-left"></div>
        <div className="box-top"></div>
        <div className="box-bottom"></div>
      </div>
    </div>
    </section>
  );
};

export default Box3D2;
