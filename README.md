# Planet Shark Shiver Builder

A web-based tool for creating and managing sharkanoid shivers for the Planet Shark tabletop game.

## Features

- Create and customize sharkanoids based on official templates
- Add weapons, equipment, extras, and honors to your sharkanoids
- Track injuries for narrative purposes
- Calculate points automatically
- Export and import shivers as JSON files
- Print shiver summaries
- Save and load shivers locally

## Setup Instructions

### Quick Start

1. Clone this repository:
   ```
   git clone https://github.com/Hamurai94/Planet_Shark.git
   ```

2. Navigate to the shiver-builder-app directory.

3. Open `index.html` in a web browser.

That's it! No server or build process is required as this is a client-side only application.

### Browser Compatibility

The Shiver Builder works best in modern browsers:
- Chrome (recommended)
- Firefox
- Edge
- Safari

## Usage Guide

### Creating a Shiver

1. **Name your Shiver**: Enter a name in the "Shiver Name" field at the top.

2. **Add Sharkanoids**: 
   - Select a template from the dropdown in the left panel
   - Click "Add" to add it to your shiver
   - The first sharkanoid is automatically designated as the leader

3. **Customize Sharkanoids**:
   - Click on a sharkanoid in the list to select it
   - Edit its name
   - Toggle leader status with the checkbox
   - Add weapons, equipment, extras, and honors using their respective sections
   - Add injuries for narrative tracking
   
4. **Track Points**:
   - Points are automatically calculated at the top of the screen
   - Standard games use 100 points

### Saving & Loading

- **Export Shiver**: Saves your shiver as a JSON file for sharing
- **Import Shiver**: Loads a shiver from a JSON file
- **Save Shiver**: Saves your current shiver to browser storage
- **Load Shiver**: Loads a previously saved shiver from browser storage

### Printing

Click "Print Summary" to generate a printable summary of your shiver.

## Game Data

The application includes all official sharkanoid templates, weapons, equipment, extras, and honors from the Planet Shark rulebook.

## Development Information

### Project Structure

- `index.html` - Main application HTML
- `css/styles.css` - Application styling
- `js/` - JavaScript files:
  - `app.js` - Main application logic
  - `game-data.js` - Game data (templates, weapons, etc.)
  - `dom-helpers.js` - Helper functions for DOM manipulation
  - `types.js` - TypeScript type definitions (using JSDoc annotations)

### Technical Details

- Built with vanilla JavaScript (ES6+)
- Uses JSDoc annotations for TypeScript validation
- No external dependencies or build process required
- Data is stored using browser localStorage
- Uses CSS Grid and Flexbox for responsive layout

## Contributing

Contributions are welcome! If you'd like to contribute to the Shiver Builder:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is available under the MIT License.

## Acknowledgments

- Planet Shark game and all related content is property of its respective owners
- This tool is a fan project and is not officially affiliated with Planet Shark