// This file helps manage which data file to include in the application

// IMPORTANT: Only include ONE of these files in your index.html
// If you include both, you'll get "Cannot redeclare block-scoped variable" errors

/**
 * If you want to use the complete game data:
 * <script src="js/data.js"></script>
 * 
 * If you want to use the simplified data:
 * <script src="js/simple_data.js"></script>
 * 
 * Make sure to include this BEFORE app.js:
 * <script src="js/app.js"></script>
 */

// To fix the conflict between data.js and simple_data.js, either:
// 1. Only include one file in index.html
// 2. Convert to a module system (import/export)
// 3. Rename the variables in one file to avoid conflicts