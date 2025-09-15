# Planet Shark Shiver Builder - User Guide

This guide will help you use the Planet Shark Shiver Builder to create, customize, and manage your sharkanoid shivers.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Creating a Shiver](#creating-a-shiver)
3. [Managing Sharkanoids](#managing-sharkanoids)
4. [Weapons and Equipment](#weapons-and-equipment)
5. [Honors and Injuries](#honors-and-injuries)
6. [Saving and Loading](#saving-and-loading)
7. [Printing](#printing)
8. [Tips and Tricks](#tips-and-tricks)

## Getting Started

### Opening the Application

1. Download the application from GitHub: https://github.com/Hamurai94/Planet_Shark
2. Extract the files to a folder on your computer
3. Open the `index.html` file in your web browser

You should see the Shiver Builder interface with a header, an empty sharkanoid list on the left, and a details panel that will appear when you select a sharkanoid.

### Interface Overview

The Shiver Builder interface consists of:

- **Header**: Shows your shiver name and points information
- **Sharkanoid List**: Left panel showing all sharkanoids in your shiver
- **Sharkanoid Details**: Right panel showing details of the selected sharkanoid
- **Controls**: Buttons for adding sharkanoids, weapons, equipment, etc.

## Creating a Shiver

### Naming Your Shiver

Enter a name for your shiver in the "Shiver Name" input field at the top of the page.

### Adding Sharkanoids

1. Select a sharkanoid template from the dropdown in the left panel
2. Click the "Add" button
3. The sharkanoid will appear in the list
4. The first sharkanoid you add will automatically be designated as the leader

### Points System

The application automatically tracks points:
- **Points Used**: Shows how many points you've spent
- **Points Remaining**: Shows how many points you have left out of 100

Standard games use 100 points, but you can exceed this if your game allows it.

## Managing Sharkanoids

### Selecting a Sharkanoid

Click on a sharkanoid in the list to select it. Its details will appear in the right panel.

### Customizing a Sharkanoid

In the details panel, you can:
1. Edit the sharkanoid's name in the input field
2. Toggle the "Leader" checkbox to change leader status
3. View the sharkanoid's stats (Health, Speed, Armor, etc.)
4. See the sharkanoid's special abilities

### Removing a Sharkanoid

To remove a sharkanoid:
1. Select the sharkanoid by clicking on it in the list
2. Click the "Delete Sharkanoid" button in the details panel

## Weapons and Equipment

### Adding Weapons

1. Select a sharkanoid
2. In the "Weapons" section of the details panel, choose a weapon from the dropdown
3. Click the "Add" button
4. The weapon will be added to the sharkanoid

Note: Weapons require supply points and hand slots. The app will prevent you from exceeding these limits.

### Adding Equipment

1. Select a sharkanoid
2. In the "Equipment" section, choose an item from the dropdown
3. Click the "Add" button
4. The equipment will be added to the sharkanoid

### Adding Extras

Extras work the same way as equipment but are found in the "Extras" section.

### Removing Items

To remove any weapon, equipment, or extra:
1. Click the remove button (×) next to the item in its list

## Honors and Injuries

### Adding Honors

1. Select a sharkanoid
2. In the "Honors" section, choose an honor from the dropdown
3. Click the "Add" button

Some honors provide stat bonuses that are automatically applied.

### Veterans and Honor Rolls

Veteran sharkanoids can roll for a free honor:
1. Add a Veteran sharkanoid
2. Click the "Roll Honor (Veterans)" button
3. The app will randomly select an honor

### Tracking Injuries

Injuries in Planet Shark are narrative elements that describe damage to your sharkanoids:

1. Select a sharkanoid
2. In the "Injuries" section, enter a description of the injury
3. Click the "Add Injury" button
4. The injury will be recorded with the sharkanoid

Injuries do not automatically affect stats, but you can use them to track narrative damage.

## Saving and Loading

### Exporting a Shiver

To save your shiver as a file:
1. Click the "Export Shiver" button
2. Choose a location on your computer to save the JSON file

### Importing a Shiver

To load a shiver from a file:
1. Click the "Import Shiver" button
2. Select a previously exported JSON file

### Browser Storage

You can also save shivers to your browser's local storage:
1. Click "Save Shiver" to store it
2. Click "Load Shiver" to retrieve a saved shiver

## Printing

To print a summary of your shiver:
1. Click the "Print Summary" button
2. A print-friendly version will be generated
3. Use your browser's print function to print it

## Tips and Tricks

- **Leader Selection**: Make sure to choose your leader wisely - typically your most valuable sharkanoid
- **Points Management**: Start with your essential sharkanoids and then add equipment
- **Weapon Combinations**: Consider hand usage when selecting weapons
- **Browser Compatibility**: For best results, use Chrome, Firefox, or Edge
- **Regular Saving**: Export your shivers regularly to avoid losing your work

Remember that the Shiver Builder is a companion tool for the Planet Shark tabletop game - always refer to the official rulebook for game rules and final decisions.