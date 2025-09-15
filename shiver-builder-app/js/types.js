/**
 * @typedef {Object} SharkanoidInjury
 * @property {string} description - Description of the injury
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
 * Include this at the top of your app.js file.
 */