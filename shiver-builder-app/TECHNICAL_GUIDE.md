# Technical Recommendations for Planet Shark Shiver Builder

This document provides technical guidelines and best practices for development and maintenance of the Planet Shark Shiver Builder application.

## Table of Contents
1. [JavaScript Best Practices](#javascript-best-practices)
2. [Avoiding Common Errors](#avoiding-common-errors)
3. [TypeScript Validation](#typescript-validation)
4. [Merge Conflict Resolution](#merge-conflict-resolution)
5. [Code Organization](#code-organization)
6. [Testing and Debugging](#testing-and-debugging)

## JavaScript Best Practices

### Use Consistent Variable Declarations

```javascript
// Recommended - Use const for values that don't change
const SHARKANOID_TEMPLATES = {...};

// For variables that will be reassigned, use let
let selectedSharkanoidIndex = -1;

// Avoid var as it doesn't respect block scope
// Bad example:
var weapons = []; // Don't use var
```

### Proper DOM Element Type Casting

When working with DOM elements, ensure proper type casting to avoid TypeScript errors:

```javascript
// Instead of:
const inputValue = document.getElementById('my-input').value;

// Use:
const inputElement = document.getElementById('my-input') as HTMLInputElement;
const inputValue = inputElement.value;

// Or for vanilla JavaScript, check the element type:
const inputElement = document.getElementById('my-input');
const inputValue = inputElement && 'value' in inputElement ? inputElement.value : '';
```

### Object Property Access

```javascript
// Safely access nested properties
const template = SHARKANOID_TEMPLATES[templateKey];
if (template) {
    // Do something with template
}

// Use Object.entries for ES2017+ compatibility
for (const [key, value] of Object.entries(myObject)) {
    console.log(`${key}: ${value}`);
}
```

## Avoiding Common Errors

### TypeScript Errors in JavaScript Files

The application is written in JavaScript but VS Code uses TypeScript for validation, leading to errors like:

- `Property 'value' does not exist on type 'HTMLElement'`
- `Property 'entries' does not exist on type 'ObjectConstructor'`

These can be addressed by:

1. Properly casting DOM elements to their specific types
2. Adding JSDoc type comments
3. Adjusting the TypeScript configuration in jsconfig.json

### Variable Redeclaration

Errors like `Cannot redeclare block-scoped variable 'SHARKANOID_TEMPLATES'` happen when the same variable is declared in multiple files being loaded together:

- **data.js** and **simple_data.js** both declare the same global variables
- Solution: Use modules or ensure only one file is loaded at a time

## TypeScript Validation

### jsconfig.json Configuration

The project uses a `jsconfig.json` file to configure TypeScript validation for JavaScript files:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "checkJs": true,
    "lib": ["es2017", "dom"]
  }
}
```

Adjust the `target` and `lib` options to match the JavaScript features used in your project.

### Fixing Common TypeScript Errors

#### DOM Element Type Issues

```javascript
// Error: Property 'value' does not exist on type 'HTMLElement'
// Fix: Add type assertion
const nameInput = document.getElementById('shiver-name-input');
if (nameInput instanceof HTMLInputElement) {
    this.shiverName = nameInput.value;
}
```

#### Object.entries Compatibility

```javascript
// Error: Property 'entries' does not exist on type 'ObjectConstructor'
// Fix: Update jsconfig.json to include es2017 in lib
// Or use a different iteration approach:
Object.keys(SHARKANOID_TEMPLATES).forEach(key => {
    const template = SHARKANOID_TEMPLATES[key];
    // Do something with key and template
});
```

#### Type Conversion Issues

```javascript
// Error: Type 'number' is not assignable to type 'string'
// Fix: Explicitly convert to string
document.getElementById('points-used').textContent = String(this.pointsUsed);
```

## Merge Conflict Resolution

### Identifying Merge Conflicts

Merge conflicts often appear as duplicate code or syntax errors:

```javascript
const sharkanoid = {
    id: Date.now(),
    name: `${template.name}-${this.sharkanoids.length + 1}`,
    // ... properties ...
};
    // Additional properties appearing here indicate a merge conflict
    equipment: [],
    extras: [],
};
```

### Resolving Merge Conflicts

1. Look for `<<<<<<< HEAD`, `=======`, and `>>>>>>> branch-name` markers
2. If conflicts aren't properly marked, check for duplicate code blocks
3. Use git diff tools to see changes between branches
4. After resolving, validate syntax and functionality before committing

## Code Organization

### File Structure

```
shiver-builder-app/
├── css/
│   └── styles.css
├── js/
│   ├── app.js     # Main application logic
│   └── data.js    # Game data
├── index.html     # Main HTML interface
└── jsconfig.json  # TypeScript validation config
```

### Avoiding Duplicate Code

- **Do not** create both data.js and simple_data.js with the same variable names
- Use modules (import/export) instead of global variables when possible
- Comment out or remove unused files

## Testing and Debugging

### Pre-Launch Checks

Before launching the application:

1. Check the Problems panel (View > Problems) for any errors or warnings
2. Validate all JavaScript syntax (check for missing brackets, semicolons, etc.)
3. Look for merge conflict markers that weren't resolved
4. Test all core functionality in the browser

### Using the Problems Panel

The Problems panel in VS Code shows:
- Syntax errors
- Type errors
- Variable conflicts
- Potential runtime issues

### Browser Developer Tools

When issues occur at runtime:
1. Open browser developer tools (F12)
2. Check the Console tab for JavaScript errors
3. Use the Elements tab to inspect the DOM
4. Use breakpoints in the Sources tab to debug logic issues

### Common Issues and Solutions

| Error Message | Likely Cause | Solution |
|---------------|--------------|----------|
| Unexpected token | Syntax error, often from merge conflicts | Check for mismatched brackets or incomplete statements |
| Cannot read property of undefined | Trying to access properties on null/undefined | Add null checks before accessing properties |
| ReferenceError: X is not defined | Variable used before declaration | Ensure all variables are properly declared |
| Property 'X' does not exist on type 'Y' | TypeScript validation error | Use proper type casting or JSDoc comments |
| Cannot redeclare block-scoped variable | Same variable declared multiple times | Use modules or ensure only one file defines each variable |

By following these recommendations, you can maintain a healthy codebase and avoid common development pitfalls in the Planet Shark Shiver Builder application.