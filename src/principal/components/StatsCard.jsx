import React from "react";


const StatsCard = ({
  title,
  value,
  icon,
  color="indigo"
}) => {


  const colors = {

    indigo:
    "bg-indigo-100 text-indigo-600",

    green:
    "bg-green-100 text-green-600",

    blue:
    "bg-blue-100 text-blue-600",

    orange:
    "bg-orange-100 text-orange-600",

    red:
    "bg-red-100 text-red-600"

  };



  return (

    <div className="
      bg-white
      rounded-xl
      shadow
      p-5
      flex
      justify-between
      items-center
      hover:shadow-lg
      transition
    ">


      <div>


        <p className="
          text-gray-500
          text-sm
        ">
          {title}
        </p>



        <h2 className="
          text-3xl
          font-bold
          text-gray-800
          mt-2
        ">
          {value}
        </h2>


      </div>




      <div className={`
        p-4
        rounded-full
        text-xl
        ${colors[color]}
      `}>

        {icon}

      </div>



    </div>

  );


};


export default StatsCard;