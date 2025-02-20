import { Link } from '@tanstack/react-router';
import type { Character } from '@/types/characters';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';

type CardProps = {
  id: string,
} & Character;

const portraitUrl = (name: string) =>
  `url(/characters/${name.split(' ').join('')}.webp)`;

const rankColor = (rank: Character['rank']) =>
  rank === 'A' ? '--color-purple-800' : '--color-amber-400';

const cardStyles = (character: Character) => ({
  '--character-portrait-url': portraitUrl(character.name),
  '--character-portrait-position': character.portrait.position,
  '--character-portrait-size': character.portrait.size,
  '--card-rank-color': `var(${rankColor(character.rank)})`,
} as React.CSSProperties);

type SpecialtyIconProps = {
  specialty: Character['specialty'],
  className?: string,
};

const SpecialtyIcon = (props: SpecialtyIconProps) => (
  <img
    src={`/specialties/${props.specialty}.webp`}
    className={cn(props.className, 'w-8')}
  />
);

type AttributeIconProps = {
  attribute: Character['attribute'],
  className?: string,
};

const AttributeIcon = (props: AttributeIconProps) => (
  <img
    src={`/attributes/${props.attribute}.webp`}
    className={cn(props.className, 'w-8')}
  />
);

export const CharacterCard = (props: CardProps) => (
  <Link to="/characters/$characterId" params={{ characterId: props.id }}>
    <Card
      className="flex flex-col justify-end p-1 h-60 w-40 bg-(image:--character-portrait-url) bg-(position:--character-portrait-position) bg-(length:--character-portrait-size) bg-no-repeat bg-(--card-rank-color)"
      style={cardStyles(props)}
    >
      <div className="flex flex-col rounded-2xl bg-neutral-900/50 py-1 px-3">
        <div className="flex">
          <SpecialtyIcon specialty={props.specialty} />
          <AttributeIcon attribute={props.attribute} />
        </div>
        <div className="flex text-white">
          {props.name}
        </div>
      </div>
    </Card>
  </Link>
);
