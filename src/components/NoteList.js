import React from "react";
import Input from "./Input";
import { Note } from "./Note";
import notes from "../util/notes";
import AddNotes from "./AddNotes";
const NoteList = () => {
  return (
    <div className="w-screen  h-screen px-24 py-5 bg-slate-50">
      <div className="flex items-center justify-between py-5">
        <h1 className="text-2xl font-semibold">Notes</h1>
        <button className="bg-teal-100 rounded-full py-1 px-2">
          Toggle mode
        </button>
      </div>
      <Input />
      <div className="h-[90%] w-full grid grid-cols-4 gap-5">
        {notes.map((note, index) => (
          <Note data={note} />
        ))}
      </div>
      <AddNotes/>
    </div>
  );
};

export default NoteList;
