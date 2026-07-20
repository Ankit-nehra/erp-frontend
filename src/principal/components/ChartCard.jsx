import React from "react";


const ChartCard = ({
  title,
  children
}) => {


return (

<div className="
bg-white
rounded-xl
shadow
p-5
">


<h2 className="
text-lg
font-bold
text-indigo-700
mb-4
">

{title}

</h2>



<div>

{children}

</div>



</div>

);


};


export default ChartCard;