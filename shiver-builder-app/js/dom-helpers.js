/**
 * Helper functions for the Planet Shark Shiver Builder application
 * These functions provide type-safe access to DOM elements
 */

/**
 * Get an input element by ID
 * @param {string} id - The element ID
 * @returns {HTMLInputElement|null}
 */
function getInputElement(id) {
    return /** @type {HTMLInputElement} */ (document.getElementById(id));
}

/**
 * Get a select element by ID
 * @param {string} id - The element ID
 * @returns {HTMLSelectElement|null}
 */
function getSelectElement(id) {
    return /** @type {HTMLSelectElement} */ (document.getElementById(id));
}

/**
 * Get an element's text content
 * @param {string} id - The element ID
 * @returns {string}
 */
function getElementText(id) {
    const element = document.getElementById(id);
    return element ? element.textContent || "" : "";
}

/**
 * Set an element's text content, converting to string if needed
 * @param {string} id - The element ID
 * @param {string|number} value - The value to set
 */
function setElementText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = String(value);
    }
}

/**
 * Get a button element by ID
 * @param {string} id - The element ID
 * @returns {HTMLButtonElement|null}
 */
function getButtonElement(id) {
    return /** @type {HTMLButtonElement} */ (document.getElementById(id));
}

/**
 * Get an input element value from an event target
 * @param {Event} event - The event object
 * @returns {string}
 */
function getInputValueFromEvent(event) {
    return event.target instanceof HTMLInputElement ? event.target.value : "";
}

/**
 * Get checkbox checked state from an event target
 * @param {Event} event - The event object
 * @returns {boolean}
 */
function getCheckboxStateFromEvent(event) {
    return event.target instanceof HTMLInputElement ? event.target.checked : false;
}