# Planet Shark - Shiver Builder: Rules & Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Game Overview](#game-overview)
3. [Shiver Builder Features](#shiver-builder-features)
4. [Creating a Shiver](#creating-a-shiver)
5. [Sharkanoid Templates](#sharkanoid-templates)
6. [Weapons & Equipment](#weapons--equipment)
7. [Extras](#extras)
8. [Honors System](#honors-system)
9. [Saving & Loading](#saving--loading)
10. [Printing](#printing)
11. [Technical Reference](#technical-reference)
12. [Troubleshooting](#troubleshooting)

## Introduction

Planet Shark Shiver Builder is a web application that helps players create and manage their Shivers (teams of Sharkanoids) for the Planet Shark tabletop game. This document serves as a comprehensive guide to both the game's core concepts and how to use the Shiver Builder application.

## Game Overview

Planet Shark is a tabletop miniatures game where players control teams of Sharkanoids - anthropomorphic sharks with various abilities and equipment. The game takes place in a futuristic setting where these Sharkanoids battle for supremacy.

Key concepts:
- **Shiver**: A team of Sharkanoids (like a squad or warband)
- **Sharkanoid**: Individual shark-like fighters with unique stats and abilities
- **Points**: Currency used to build balanced Shivers (standard game is 100 points)
- **Supply**: Resource for equipping weapons and gear to Sharkanoids
- **Actions**: Number of activities a Sharkanoid can perform each turn

## Shiver Builder Features

The Shiver Builder application provides the following functionality:
- Create a Shiver with up to 100 points of Sharkanoids
- Choose from different Sharkanoid templates (PUP, BULL, VETERAN, MECH)
- Equip weapons and equipment using each Sharkanoid's Supply limit
- Add special Extras that provide unique abilities
- Apply Honors to Sharkanoids for enhanced statistics
- Save and load Shivers using your browser's localStorage
- Export Shivers to JSON files for sharing with others
- Import Shivers from JSON files
- Print a summary sheet of your entire Shiver for tabletop play

## Creating a Shiver

To create a new Shiver:
1. Enter a name for your Shiver in the top input field
2. Select a Sharkanoid template from the dropdown and click "Add"
3. Customize the Sharkanoid by adding weapons, equipment, extras, and honors
4. Continue adding Sharkanoids until you've reached your desired team composition
5. Designate one Sharkanoid as the leader by checking the "Leader" checkbox
6. Save your Shiver using either the Save or Export buttons

The application will track your points usage and prevent you from exceeding the 100-point limit.

## Sharkanoid Templates

Each Sharkanoid template has different base statistics and point costs:

### PUP (10 points)
- Base Size: 25mm
- Supply: 2
- Actions: 2
- Health: 10
- Speed: 6
- Armor: 3
- Melee Attack: 5
- Range Attack: 4

### BULL (30 points)
- Base Size: 32mm
- Supply: 4
- Actions: 2
- Health: 20
- Speed: 5
- Armor: 4
- Melee Attack: 7
- Range Attack: 5

### VETERAN (40 points)
- Base Size: 40mm
- Supply: 6
- Actions: 3
- Health: 30
- Speed: 5
- Armor: 5
- Melee Attack: 8
- Range Attack: 6
- Special: May roll once on the Honors table when created

### MECH (50 points)
- Base Size: 50mm
- Supply: 8
- Actions: 2
- Health: 40
- Speed: 4
- Armor: 7
- Melee Attack: 6
- Range Attack: 7
- Special: Immune to Poison

## Weapons & Equipment

Each Sharkanoid has a limited amount of Supply points to spend on weapons and equipment:

### Common Weapons
- **1 Handed Melee Weapon** (1 Supply): B2B range, 4 attack dice, 3 damage
- **2 Handed Melee Weapon** (1 Supply): B2B range, 8 attack dice, 4 damage
- **Anti Meat Rifle** (3 Supply): 18" range, 3 attack dice, 6 damage, AP [3], Critical [12], Recoil [2]
- **Buzzsaw** (3 Supply): B2B range, 9 attack dice, 5 damage, AP [1]
- **The Claw** (3 Supply): B2B range, 2 attack dice, 10 damage, AP [2], Critical [20]
- **Experimental Laser** (2 Supply): 12" range, 6 attack dice, 4 damage, AP [2]

### Equipment
- **Combat Drugs** (1 Supply): +1 to Actions
- **Improved Armor** (2 Supply): +1 to Armor
- **Jump Pack** (1 Supply): +2 to Speed
- **Targeting System** (1 Supply): +1 to Range Attack

## Extras

Extras are special abilities or enhancements that cost additional points:

- **Amphibious** (5 points): Ignore water movement penalties
- **Charismatic** (5 points): +1 to all friendly Sharkanoids' Morale within 6"
- **Enhanced Strength** (10 points): +2 to Melee damage
- **Poisonous** (10 points): Attacks apply Poison effect
- **Regeneration** (15 points): Heal 1 Health at the beginning of each turn

## Honors System

The Honors system provides additional bonuses to Sharkanoids:

### Veteran Honor Rolls
Veterans can roll once on the Honors table when created (click the "Roll Honor" button):

1. **Shark Fin Award**: +2 to Health
2. **Bite Mark Medal**: +1 to Range Attack
3. **Valor Teeth**: +1 to Melee Attack
4. **Swim Speed Citation**: +1 to Speed
5. **Purple Fin**: +1 to Armor
6. **Heroic Honor**: +1 to Armor and +1 to Health

### Purchasable Honors
Any Sharkanoid can purchase these honors using points:

- **Tactical Award** (15 points): +1 to Actions
- **Combat Medal** (10 points): +1 to Melee and +1 to Range Attack
- **Defensive Citation** (10 points): +2 to Armor
- **Supply Badge** (10 points): +2 to Supply
- **Endurance Commendation** (10 points): +5 to Health

## Saving & Loading

The Shiver Builder provides multiple ways to save and share your creations:

### Save to Browser (localStorage)
- Click "Save Shiver" to store your Shiver in your browser's localStorage
- Click "Load Shiver" to retrieve previously saved Shivers
- Note: These saves are specific to your browser and computer

### Export/Import (JSON)
- Click "Export Shiver" to save your Shiver as a JSON file
- Click "Import Shiver" to load a Shiver from a JSON file
- This method allows sharing Shivers between different computers or players

## Printing

To create a physical reference for tabletop play:
1. Ensure your Shiver is complete and has a name
2. Click "Print Summary"
3. A new window will open with a formatted summary
4. Use your browser's print function to print the summary

The printed summary includes all Sharkanoids, their stats, weapons, equipment, extras, and honors.

## Technical Reference

The Planet Shark Shiver Builder is a client-side web application built with HTML, CSS, and JavaScript. It doesn't require a server or internet connection to run after initial download.

### File Structure
- **index.html**: Main application interface
- **css/styles.css**: Styling for the application
- **js/app.js**: Core application logic
- **js/data.js**: Game data (templates, weapons, etc.)
- **Launch Shiver Builder.bat**: Windows batch file to open the application

### Storage
- **localStorage**: Browser's built-in storage for saving Shivers
- **JSON Export/Import**: File-based storage for sharing Shivers

## Troubleshooting

### Common Issues

#### Application Won't Load
- Ensure you're using a modern web browser (Chrome, Firefox, Edge)
- Try clearing your browser cache
- Launch directly from the index.html file

#### Save/Load Not Working
- Check if your browser has localStorage enabled
- Some private browsing modes disable localStorage
- Try exporting your Shiver to a JSON file instead

#### JavaScript Errors
- Check the browser's developer console (F12) for error messages
- If syntax errors appear, there might be corruption in the app.js file
- Try downloading a fresh copy of the application

#### Dropdown Menu Shows No Options
- This could indicate a JavaScript error preventing data loading
- Check that data.js is properly loaded before app.js in index.html
- Look for any console errors related to the SHARKANOID_TEMPLATES variable

#### Print Layout Issues
- Try a different browser if the print layout appears incorrect
- Adjust your browser's print settings (margins, scale, etc.)
- Consider exporting to PDF first, then printing the PDF

For additional support or to report bugs, please contact the developer.