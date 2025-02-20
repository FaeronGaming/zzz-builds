import { createFileRoute } from '@tanstack/react-router';
import characters from '../../data/characters';

export const Route = createFileRoute('/characters/$characterId')({
  component: RouteComponent,
});


function RouteComponent() {
  const { characterId } = Route.useParams();
  const character = characters[characterId];
  return <div>Hello, {character.name}!</div>;
}
