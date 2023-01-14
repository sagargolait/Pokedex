import React from "react";
import { useSelector } from "react-redux";

export const Pokemon = () => {
  const pokemon = useSelector((state) => state.pokemon.pokemon);

  const error = useSelector((state) => state.pokemon.error);

  return (
    <>
      {pokemon ? (
        <div class="flex items-center justify-center bg-indigo-50 p-4">
          <div class="overflow-hidden rounded-xl bg-white ">
            <div className="flex items-center justify-center">
              <img
                src={pokemon.sprites.front_default}
                alt="pokemon"
                className="w-[150px] h-[150px]"
              />
            </div>

            {pokemon?.abilities && (
              <div class="p-5 flex-col flex items-center">
                <span className="font-bold text-lg">Abilities</span>
                <div className="flex gap-2">
                  {pokemon.abilities.map((item) => (
                    <span class="py-2 px-4 shadow-md no-underline rounded-full text-sm border-blue">
                      {item.ability.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {pokemon?.stats && (
              <div class="mb-2  flex-col flex items-center ">
                <span className="font-bold text-lg">Stats</span>
                <div className="flex w-full gap-2">
                  {pokemon.stats.map((item) => (
                    <span class="py-2 px-4 shadow-md no-underline text-sm rounded-full ">
                      {`${item.stat.name} : ${item.base_stat}`}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {pokemon?.held_items && (
              <div class="p-5 flex-col flex items-center">
                <span className="font-bold text-lg">Held Items</span>
                <div className="flex gap-2 ">
                  {pokemon.held_items.map((item) => (
                    <span class="py-2 px-4 shadow-md no-underline rounded-full text-sm border-blue">
                      {`${item.item.name}`}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        error &&
        Object.keys(error).length === 0 && (
          <h1 className="font-bold text-xl">No Pokemon Found!!</h1>
        )
      )}
    </>
  );
};
