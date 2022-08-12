import React from "react";
import { MdDeleteForever } from "react-icons/md";
export const Note = ({data}) => {
  return (
    <div className="min-h-[30%]  bg-amber-300 rounded px-2 flex py-1 flex-col justify-between mt-4">
      <h5>{data.message}</h5>
      <div className="flex justify-between">
        <small>{data.date}</small>
        <MdDeleteForever className="text-red-600" />
      </div>
    </div>
  );
};
