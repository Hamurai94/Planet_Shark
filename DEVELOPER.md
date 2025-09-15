# Developer Setup Guide

This document provides detailed setup instructions for developers who want to work on the Planet Shark Shiver Builder project.

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, or Safari)
- A text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript
- Git (for version control)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Hamurai94/Planet_Shark.git
cd Planet_Shark
```

### 2. Project Structure

The project is organized as follows:

```
shiver-builder-app/
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── dom-helpers.js
│   ├── game-data.js
│   └── types.js
├── index.html
└── jsconfig.json
```

### 3. Editor Setup

#### VS Code Setup

If you're using Visual Studio Code (recommended):

1. Open the project folder in VS Code
2. The included `jsconfig.json` file will automatically configure TypeScript checking for JavaScript files
3. Install recommended extensions:
   - ESLint
   - Prettier
   - Live Server (for local development)

### 4. Development Workflow

1. Make your changes to the codebase
2. Test locally by opening `index.html` in your browser
   - If using VS Code with Live Server, right-click on `index.html` and select "Open with Live Server"
3. Commit your changes with descriptive commit messages
4. Push to your fork and create a pull request

## Technical Details

### TypeScript Validation

The project uses JSDoc comments for TypeScript validation without converting to TypeScript. This provides type safety while maintaining the simplicity of JavaScript.

Key points:
- Type definitions are in `js/types.js`
- JSDoc comments are used throughout the codebase
- `jsconfig.json` configures TypeScript checking

### DOM Helper Functions

To ensure type safety with DOM operations, helper functions in `dom-helpers.js` provide type-safe element access:

```javascript
// Example:
const button = getButtonElement('my-button');
const input = getInputElement('my-input');
const select = getSelectElement('my-dropdown');
```

### Data Structure

The main data structure revolves around the `ShiverBuilder` class in `app.js` which manages:

- Sharkanoid templates
- Weapons, equipment, extras
- Honors and injuries
- Import/export functionality
- UI rendering

Game data is stored in the `GameData` object in `game-data.js`.

## Common Development Tasks

### Adding New Sharkanoid Templates

Edit `js/game-data.js` and add to the `SHARKANOID_TEMPLATES` object:

```javascript
SHARKANOID_TEMPLATES: {
    // Existing templates...
    
    // New template
    newShark: {
        name: "NEW SHARK",
        baseSize: "40 MM",
        points: 35,
        supply: 5,
        actions: 2,
        health: 25,
        speed: 6,
        armor: 4,
        meleeAttack: 7,
        rangeAttack: 5,
        special: "Special ability description"
    }
}
```

### Adding New Weapons or Equipment

Edit the appropriate array in `js/game-data.js`:

```javascript
WEAPONS: [
    // Existing weapons...
    
    // New weapon
    {
        name: "New Weapon",
        supplyCost: 2,
        hands: 1,
        range: 12,
        damage: 2,
        special: "Special weapon effect"
    }
]
```

### Modifying the UI

The UI is defined in `index.html` with styling in `css/styles.css`. The JavaScript in `app.js` handles dynamic rendering of UI elements.

## Testing

Manual testing process:
1. Create a new shiver
2. Add different types of sharkanoids
3. Add weapons, equipment, extras, and honors
4. Test all features: export, import, save, load, print
5. Verify points calculation
6. Test browser compatibility

## Troubleshooting

Common issues:

- **Type errors:** Make sure JSDoc annotations are correct
- **DOM errors:** Use the helper functions in `dom-helpers.js`
- **Data loading issues:** Check browser console for errors

## Additional Resources

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/) - Reference for HTML, CSS, and JavaScript
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - For JSDoc annotation syntax