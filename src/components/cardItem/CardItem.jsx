import React from "react";

const CardItem = () => {
  return (
    <div>
      <div class="flex justify-between space-x-6 items-center p-6" style={{borderBottom:"1px solid lightgrey"}}>
        <div class="flex items-center space-x-4">
          <img
            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
            class="rounded-full h-14 w-14"
            alt=""
          />
          <div class="flex flex-col space-y-2">
            <span>John Doe</span>
            <span className="text-slate-500">+91 9466210083</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-slate-700">You'll Get</div>
            <div className="text-red-600">₹ 500</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
