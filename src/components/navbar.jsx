import React from "react";

const NavBar = ({setView}) => {

  return (
    <>
      <button onClick={() => setView('list')} className="bg-purple-600 m-2 hover:bg-purple-700 text-white fond-bold py-2 px-4 rounded">
        List view
      </button>
      <button onClick={() => setView('grid')} className="bg-purple-600 m-2 hover:bg-purple-700 text-white fond-bold py-2 px-4 rounded">
        grid view
      </button>
    </>
  );
};

export default NavBar;
