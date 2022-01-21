import changeBackgroundColor from './change-background.js';

const ETypeColorPokemon = {
  fire: "red",
  grass: "green",
  rock: "brown",
  electric: "yellow",
};

export default function getBackgroundColor(value) {
  if (!value) return;
  return changeBackgroundColor(ETypeColorPokemon[value]);
};