import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import PokemonForm from '../components/pokemon-form';

const PokemonAdd: FunctionComponent = () => {
  const [id] = useState<string>(new Date().getTime().toString());
  const [pokemon] = useState<Pokemon>(new Pokemon(id));
  
  return (
    <div className='row'>
      <h2 className="header center">Ajouter un pokémon</h2>
      <PokemonForm pokemon={pokemon} isEditForm={false}></PokemonForm>
    </div>
  );
}

export default PokemonAdd;