export default {
  basics: {
    name: 'Nameless Protagonist',
    player: 'Someone',
    origins: 'West Carlenia, Noble',
    birthYear: '600',
    trade: 'Beggar',
    hair: 'short black with wisps of gold',
    eyes: 'mostly green',
    firstImpression: 'bored',
    lastingImpression: 'bland',
    hiddenSide: 'manipulative'
  },
  traits: {
    stamina: 3,
    dexterity: 2,
    perception: 1,
    strength: 2,
    willpower: 6,
    appearance: 3,
    empathy: 1,
    wits: 3
  },
  skills: {
    general: {
      alertness: 0,
      animalRiding: 1,
      animalHandling: 2,
      athletics: 3,
      deceit: 4,
      divination: 5,
      etiquette: 6,
      forgery: 7,
      hunting: 8,
      instruction: 9,
      interaction: 10,
      investigate: 11,
      medicine: 12,
      meditation: 13,
      prestidigitation: 14,
      stealth: 15,
      symbolism: 16,
      tactics: 17,
      universalism: 18
    },
    specialist: [{name: 'Geography', rank: 1}, {name: 'History', rank: 2}, {name: 'Streetwise', rank: 0}],
    combat: [{name: 'Mystery Edge', mainHand: 'Broken Bottle', offHand: 'Empty', armor: 'Light', rank: 1}]
  },
  backgrounds: [
    {name: 'Nonexistence', description: "You do not exist, therefore you cannot be killed"}
  ],
  credos: [
    {
      name: 'The plot is always right',
      rank: 3,
      points: 8
    },
    {
      name: 'Other characters are useless',
      rank: 1,
      points: 3
    }
  ],
  fate: {
    max: 9,
    spent: 4
  },
  wounds: {
    current: 14,
    parts: {
      head: 1,
      torso: 0,
      leftArm: 2,
      rightArm: 3,
      leftLeg: 0,
      rightLeg: 1
    }
  },
  offense: ["Sword (bronze), 4k2 damage, normal quality, properties: quick draw"],
  protection: ["Chain armor (copper), Protection 5, normal quality", "GM Shielding, Protection infinity, quality irrelevant"],
  ideals: [
    {
      name: "GM's Puppet",
      skills: [
        {name: 'Alertness', selected: false},
        {name: 'Combat', selected: true},
        {name: 'Geography', selected: false}
      ],
      rank: 2,
      abilities:
      [
        "Ignore plot complications",
        "Spend a fate point to create a conflict wherever you are",
        "Drop rocks from the sky on a character, killing them instantly"
      ]
    },
  ],
  notes: [
    "Here go various notes which do not fit anywhere else"
  ],
  biography: [
    "Nameless protagonist was created at some point by forces unknown.",
    "During childhood Nameless Protagonist did not do anything"
  ]
};
