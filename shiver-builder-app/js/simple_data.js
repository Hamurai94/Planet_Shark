// Planet Shark Shiver Builder - Game Data (Simplified)
var SHARKANOID_TEMPLATES = {
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
    }
};

// Basic weapons
var WEAPONS = [
    {
        name: "Nail Gun",
        range: 8,
        hands: 1,
        attackDice: 2,
        damage: 2,
        supplyCost: 1,
        special: ""
    },
    {
        name: "Machine Gun",
        range: 12,
        hands: 2,
        attackDice: 3,
        damage: 2,
        supplyCost: 2,
        special: ""
    }
];

// Basic equipment
var EQUIPMENT = [
    {
        name: "Armor Plates",
        supplyCost: 1,
        special: "Adds +1 to Armor"
    },
    {
        name: "Jump Pack",
        supplyCost: 1,
        special: "Adds +1 to Speed"
    }
];

// Basic extras
var EXTRAS = [
    {
        name: "Commander",
        pointCost: 10,
        description: "This Sharkanoid may give 1 action point to another Sharkanoid within 6\" during their turn."
    }
];

// Special rules reference
var SPECIAL_RULES = {
    "ARMOR PIERCING": "Subtract [x] amount from defender's armor stat for the attack.",
    "BLAST": "If the attack hits apply the hits from the attack to every Sharkanoid within [x]."
};

// Honors data
var HONORS = {
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
    // Purchasable honor
    "tactical_award": {
        name: "Tactical Award",
        effect: "+1 to Actions",
        modifiers: { actions: 1 },
        points: 15,
        purchasable: true
    }
};