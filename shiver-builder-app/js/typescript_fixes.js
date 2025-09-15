// Example fixes for common TypeScript errors in the Planet Shark application

/**
 * Example: Fix for "Property 'value' does not exist on type 'HTMLElement'"
 */
function fixHtmlElementProperties() {
    // Original code with TypeScript error:
    // const nameInput = document.getElementById('shiver-name-input');
    // this.shiverName = nameInput.value;

    // Fixed version - Option 1: Check if it's an input element
    const nameInput = document.getElementById('shiver-name-input');
    if (nameInput instanceof HTMLInputElement) {
        this.shiverName = nameInput.value;
    }

    // Fixed version - Option 2: Type assertion (inline comment)
    // @ts-ignore
    this.shiverName = document.getElementById('shiver-name-input').value;

    // Fixed version - Option 3: Use JSDoc
    /** @type {HTMLInputElement} */
    const nameInputWithJSDoc = document.getElementById('shiver-name-input');
    this.shiverName = nameInputWithJSDoc.value;
}

/**
 * Example: Fix for "Property 'entries' does not exist on type 'ObjectConstructor'"
 */
function fixObjectEntriesError() {
    // Original code with TypeScript error:
    // for (const [key, template] of Object.entries(SHARKANOID_TEMPLATES)) {
    //     // do something
    // }

    // Fixed version - Option 1: Use keys instead
    Object.keys(SHARKANOID_TEMPLATES).forEach(key => {
        const template = SHARKANOID_TEMPLATES[key];
        // do something with key and template
    });

    // Fixed version - Option 2: Set target to ES2017 in jsconfig.json
    // (which we've now done)
    for (const [key, template] of Object.entries(SHARKANOID_TEMPLATES)) {
        // This will work with our updated jsconfig.json
    }
}

/**
 * Example: Fix for "Type 'number' is not assignable to type 'string'"
 */
function fixTypeConversionError() {
    // Original code with TypeScript error:
    // document.getElementById('points-used').textContent = this.pointsUsed;

    // Fixed version: Convert number to string explicitly
    document.getElementById('points-used').textContent = String(this.pointsUsed);
    
    // Alternative:
    document.getElementById('points-used').textContent = `${this.pointsUsed}`;
}

/**
 * Example: Fix for "Cannot redeclare block-scoped variable"
 */

// The issue is that both data.js and simple_data.js declare the same variables
// Solution 1: Only include one file in index.html

// Solution 2: Use namespaces
const GameData = {
    SHARKANOID_TEMPLATES: {
        // templates here
    },
    WEAPONS: [
        // weapons here
    ]
};

// Then access as:
// GameData.SHARKANOID_TEMPLATES.pup

// Solution 3: Use ES modules (requires changing how files are loaded)
// In data.js:
// export const SHARKANOID_TEMPLATES = {...};
// In app.js:
// import { SHARKANOID_TEMPLATES } from './data.js';