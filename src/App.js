import { useDispatch } from "react-redux";
import { loadPokemon } from "./reducers/pokemon";
import { useState } from "react";
import { Pokemon } from "./components/pokemonCard";

function App() {
  const [name, setName] = useState();
  const dispatch = useDispatch();

  return (
    <div className="w-full flex bg-gray-300 justify-center items-center h-[100vh]">
      <div class="w-1/2 p-4 bg-white flex justify-center gap-3 items-center flex-col rounded overflow-hidden shadow-lg">
        <h1 className="text-2xl">Welcome to Pokedex</h1>
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loadPokemon(name));
          }}
        >
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Enter a pokemon name.."
            required
            onChange={(e) => setName(e.currentTarget.value)}
          />

          <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </form>
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
