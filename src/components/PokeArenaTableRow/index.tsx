import React from 'react';

interface PokeArenaProps {
  id: string;
}

const PokeArenaTableRow: React.FC<PokeArenaProps> = ({ id }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <button
      type="button"
      className="btn btn-outline-light"
      style={{ padding: 0, margin: 0, borderRadius: 0, border: 'none' }}
    >
      <img src={imgUrl} alt={id} />
    </button>
  );
};

export default PokeArenaTableRow;
