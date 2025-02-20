export type Attribute = 'fire' | 'electric' | 'ice' | 'frost' | 'physical' | 'ether';
export type Specialty = 'attack' | 'stun' | 'anomaly' | 'support' | 'defense';
export type AttackType = 'slash' | 'pierce' | 'strike';
export type Rank = 'S' | 'A';
export type Faction = 'Cunning Hares'
  | 'Belobog Heavy Industries'
  | 'Victoria Housekeeping Co.'
  | 'Obol Squad'
  | 'Criminal Investigations Special Response Team'
  | 'Sons of Calydon'
  | 'Hollow Special Operations Section 6'
  | 'Stars of Lyra';

export type Portrait = {
  position: string,
  size: string,
};

export type Character = {
  name: string,
  rank: Rank,
  attribute: Attribute,
  specialty: Specialty,
  faction: Faction,
  attackType: [AttackType, ...AttackType[]];
  portrait: Portrait,
};
