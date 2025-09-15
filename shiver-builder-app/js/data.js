// Planet Shark Shiver Builder - Game Data
const SHARKANOID_TEMPLATES = {
    pup: {
        name: "PUP",
        baseSize: "25 MM",
        points: 10,
        supply: 2,
        actions: 2,
        health: 10,
        speed: 6,
        armor: 3,
        meleeAttack: 5,
        rangeAttack: 4,
        special: ""
    },
    bull: {
        name: "BULL",
        baseSize: "32 MM",
        points: 30,
        supply: 4,
        actions: 2,
        health: 20,
        speed: 5,
        armor: 4,
        meleeAttack: 7,
        rangeAttack: 5,
        special: ""
    },
    veteran: {
        name: "VETERAN",
        baseSize: "40 MM",
        points: 40,
        supply: 6,
        actions: 3,
        health: 30,
        speed: 5,
        armor: 5,
        meleeAttack: 8,
        rangeAttack: 6,
        special: "The Veteran may roll once on the Honors table when they are created."
    },
    mech: {
        name: "MECH",
        baseSize: "60 MM",
        points: 50,
        supply: 8,
        actions: 3,
        health: 40,
        speed: 5,
        armor: 5,
        meleeAttack: 8,
        rangeAttack: 6,
        special: "A mech may wield any 2 handed weapon with 1 hand."
    }
};

const WEAPONS = [
    {
        name: "1 Handed Slug Gun",
        supplyCost: 1,
        range: 9,
        hands: 1,
        attackDice: 3,
        damage: 3,
        special: ""
    },
    {
        name: "2 Handed Slug Gun",
        supplyCost: 1,
        range: 14,
        hands: 2,
        attackDice: 7,
        damage: 4,
        special: ""
    },
    {
        name: "1 Handed Melee Weapon",
        supplyCost: 1,
        range: "B2B",
        hands: 1,
        attackDice: 4,
        damage: 3,
        special: ""
    },
    {
        name: "2 Handed Melee Weapon",
        supplyCost: 1,
        range: "B2B",
        hands: 2,
        attackDice: 8,
        damage: 4,
        special: ""
    },
    {
        name: "Anti Meat Rifle",
        supplyCost: 3,
        range: 18,
        hands: 2,
        attackDice: 3,
        damage: 6,
        special: "AP [3], Critical [12], Recoil [2]"
    },
    {
        name: "Buzzsaw",
        supplyCost: 3,
        range: "B2B",
        hands: 2,
        attackDice: 9,
        damage: 5,
        special: "AP [1]"
    },
    {
        name: "The Claw",
        supplyCost: 3,
        range: "B2B",
        hands: 1,
        attackDice: 2,
        damage: 10,
        special: "AP [2], Critical [20]"
    },
    {
        name: "Cover Gun",
        supplyCost: 2,
        range: 7,
        hands: 1,
        attackDice: 3,
        damage: 0,
        special: "Cover Gun, Heavy"
    },
    {
        name: "Crusher",
        supplyCost: 2,
        range: "B2B",
        hands: 1,
        attackDice: 4,
        damage: 8,
        special: "AP [1]"
    },
    {
        name: "Grenade",
        supplyCost: 1,
        range: 6,
        hands: 1,
        attackDice: 3,
        damage: 6,
        special: "Blast [2]"
    },
    {
        name: "Missile Launcher",
        supplyCost: 3,
        range: 14,
        hands: 2,
        attackDice: 4,
        damage: 8,
        special: "AP [3], Blast [4]"
    },
    {
        name: "Phase Blade",
        supplyCost: 3,
        range: "B2B",
        hands: 2,
        attackDice: 6,
        damage: 6,
        special: "AP [5]"
    },
    {
        name: "Pneumatic Weapon",
        supplyCost: 2,
        range: "B2B",
        hands: 1,
        attackDice: 5,
        damage: 4,
        special: "Push [2]"
    },
    {
        name: "Rapid Slug Gun",
        supplyCost: 4,
        range: 14,
        hands: 2,
        attackDice: 14,
        damage: 4,
        special: "Recoil [3], Heavy"
    },
    {
        name: "Smash Hammer",
        supplyCost: 3,
        range: "B2B",
        hands: 2,
        attackDice: 5,
        damage: 6,
        special: "Push [5], Recoil [2], Blast [2]"
    },
    {
        name: "Staple Gun",
        supplyCost: 2,
        range: 1,
        hands: 1,
        attackDice: 3,
        damage: 0,
        special: "Staple"
    },
    {
        name: "The Talking Stick",
        supplyCost: 3,
        range: "B2B",
        hands: 1,
        attackDice: 4,
        damage: 3,
        special: "No Talking"
    },
    {
        name: "Transporter Gun",
        supplyCost: 3,
        range: 7,
        hands: 1,
        attackDice: 3,
        damage: 0,
        special: "Transport, Heavy"
    }
];

const EQUIPMENT = [
    {
        name: "Climbing Gear",
        supplyCost: 1,
        special: "When climbing 1\" of speed equals 1\" of climbing. A Sharkanoid can't end their turn on a wall."
    },
    {
        name: "Extra Ammo",
        supplyCost: 0.5,
        special: "May be taken multiple times. May reroll 1 attack dice for a ranged weapon attack. After the Extra Ammo is used it is discarded."
    },
    {
        name: "Glowey Shield",
        supplyCost: 5,
        special: "A Sharkanoid must use an action to activate the Glowey Shield for the round. If the Sharkanoid is damaged during the round the Glowey Shield is activated and may cut the total damage received in half. After the round has ended the Glowey Shield is turned off."
    },
    {
        name: "Night Vision Goggles",
        supplyCost: 0.5,
        special: "Ignore the effects of darkness."
    },
    {
        name: "Propulsion Jets",
        supplyCost: 1,
        special: "+1 speed and ignore slowing terrain."
    },
    {
        name: "Scrap Armor",
        supplyCost: 1,
        special: "+1 armor. May only be taken once."
    },
    {
        name: "Shield",
        supplyCost: 1,
        special: "+1 armor. Takes up 1 hand."
    },
    {
        name: "Stabilizer",
        supplyCost: 2,
        special: "May shoot with heavy weapons even if they moved or are going to move on their turn."
    }
];

const EXTRAS = [
    {
        name: "ReRoll",
        pointCost: 5,
        special: "May be taken multiple times. May reroll 1 dice during the game."
    },
    {
        name: "Advanced Deploy",
        pointCost: 5,
        special: "May be taken multiple times. May increase the deployment range of 1 Sharkanoid 1\"."
    }
];

const SPECIAL_RULES = {
    "AP": "ARMOR PIERCING [X] - Subtract [x] amount from defender's armor stat for the attack.",
    "BLAST": "If the attack hits apply the hits from the attack to every Sharkanoid within [x].",
    "COVER GUN": "If the gun hits you may create a 4\"x.75\" wall that is 1\" high from that point. The wall disappears at the end of the round.",
    "CRITICAL": "When attacking if the attacker rolls a 1 on the attack dice the defender receives [x] amount of damage instead of the normal damage.",
    "HEAVY": "May not use this equipment/weapon if the Sharkanoid has moved or will move as one of their actions during their turn.",
    "NO TALKING": "Any Sharkanoid hit by this weapon loses 1 of their actions points during the next round and a boop on the snoot.",
    "PUSH": "Any Sharkanoid hit by this weapon is placed [x]\" directly away from the attacker.",
    "RECOIL": "After a Sharkanoid attacks with this weapon they are pushed [x]\" directly away from the target.",
    "STAPLE": "Any Sharkanoid hit by this weapon does not get to take the move action next round.",
    "TRANSPORT": "Any Sharkanoid hit by this weapon may be immediately placed anywhere within 7\" and within line of sight of the attacker."
};

// Planet Shark Honors Table
const HONORS = {
    // For Veterans, roll 1d6
    1: {
        name: "Shark Fin Award",
        effect: "+2 to Health",
        modifiers: { health: 2 },
        points: 0
    },
    2: {
        name: "Bite Mark Medal",
        effect: "+1 to Range Attack",
        modifiers: { rangeAttack: 1 },
        points: 0
    },
    3: {
        name: "Valor Teeth",
        effect: "+1 to Melee Attack",
        modifiers: { meleeAttack: 1 },
        points: 0
    },
    4: {
        name: "Swim Speed Citation",
        effect: "+1 to Speed",
        modifiers: { speed: 1 },
        points: 0
    },
    5: {
        name: "Purple Fin",
        effect: "+1 to Armor",
        modifiers: { armor: 1 },
        points: 0
    },
    6: {
        name: "Heroic Honor",
        effect: "+1 to Armor and +1 to Health",
        modifiers: { armor: 1, health: 1 },
        points: 0
    },
    // Additional purchasable honors
    "tactical_award": {
        name: "Tactical Award",
        effect: "+1 to Actions",
        modifiers: { actions: 1 },
        points: 15,
        purchasable: true
    },
    "combat_medal": {
        name: "Combat Medal",
        effect: "+1 to Melee and +1 to Range Attack",
        modifiers: { meleeAttack: 1, rangeAttack: 1 },
        points: 10,
        purchasable: true
    },
    "defensive_citation": {
        name: "Defensive Citation",
        effect: "+2 to Armor",
        modifiers: { armor: 2 },
        points: 10,
        purchasable: true
    },
    "supply_badge": {
        name: "Supply Badge",
        effect: "+2 to Supply",
        modifiers: { supply: 2 },
        points: 10,
        purchasable: true
    },
    "endurance_commendation": {
        name: "Endurance Commendation",
        effect: "+5 to Health",
        modifiers: { health: 5 },
        points: 10,
        purchasable: true
    }
};
