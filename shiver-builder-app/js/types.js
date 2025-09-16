/**
 * @typedef {Object} SharkanoidInjury
 * @property {string} description - Description of the injury
 */

/**
 * @typedef {Object} CampaignBattle
 * @property {string} id - Unique battle identifier
 * @property {string} name - Battle name
 * @property {string} date - Battle date
 * @property {string} opponent - Opponent shiver name
 * @property {string} result - Battle result (victory/defeat/draw)
 * @property {string} scenario - Scenario played
 * @property {Array<string>} casualties - Sharkanoid IDs that were casualties
 * @property {Array<string>} survivors - Sharkanoid IDs that survived
 * @property {number} experienceGained - Experience points gained
 * @property {string} notes - Battle notes
 */

/**
 * @typedef {Object} Campaign
 * @property {string} id - Unique campaign identifier
 * @property {string} name - Campaign name
 * @property {string} description - Campaign description
 * @property {Array<CampaignBattle>} battles - List of battles
 * @property {number} totalExperience - Total experience gained
 * @property {number} victories - Number of victories
 * @property {number} defeats - Number of defeats
 * @property {number} draws - Number of draws
 * @property {string} dateCreated - Campaign creation date
 * @property {string} lastPlayed - Last battle date
 */

/**
 * @typedef {Object} Sharkanoid
 * @property {number} id - Unique identifier
 * @property {string} name - Name of the sharkanoid
 * @property {string} template - Template key
 * @property {Array} weapons - Array of weapons
 * @property {Array} honors - Array of honors
 * @property {number|null} honorRoll - Honor roll value
 * @property {Array} equipment - Array of equipment
 * @property {Array} extras - Array of extras
 * @property {Array<SharkanoidInjury>} injuries - Array of injuries
 * @property {boolean} isLeader - Whether this is the leader
 * @property {number} usedSupply - Amount of supply used
 * @property {number} experience - Campaign experience points
 * @property {number} battlesParticipated - Number of battles participated in
 * @property {number} battlesWon - Number of battles won
 * @property {boolean} isVeteran - Whether promoted to veteran status
 * @property {number} health - Health stat
 * @property {number} speed - Speed stat
 * @property {number} armor - Armor stat
 * @property {number} meleeAttack - Melee attack stat
 * @property {number} rangeAttack - Range attack stat
 * @property {number} actions - Actions stat
 * @property {number} supply - Supply stat
 */

/**
 * @typedef {Object} Honor
 * @property {string|number} key - Honor key or roll number
 * @property {string} name - Honor name
 * @property {string} effect - Honor effect description
 * @property {number} points - Points cost
 * @property {Object} modifiers - Stat modifiers
 */

/**
 * This JSDoc file provides type definitions for the Planet Shark Shiver Builder app.