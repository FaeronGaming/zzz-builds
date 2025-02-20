import { createFileRoute } from '@tanstack/react-router';
import {characterList} from '@/data/characters';
import { CharacterCard } from '@/components/CharacterCard';

const CharactersList = () => {
  return (
    <div className="flex gap-1 flex-wrap justify-evenly">
      {characterList.map(({ id, ...character}) => (
        <CharacterCard id={id} key={id} {...character} />
      ))}
    </div>
  );
};

export const Route = createFileRoute('/characters/')({
  component: CharactersList,
});
