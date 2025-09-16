#!/bin/bash

# Planet Shark Shiver Builder - Mac Launcher
# This script opens the Planet Shark Shiver Builder in your default web browser

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Change to the script directory
cd "$SCRIPT_DIR"

# Check if index.html exists
if [ ! -f "index.html" ]; then
    echo "Error: index.html not found in $SCRIPT_DIR"
    echo "Please make sure this script is in the same directory as index.html"
    read -p "Press Enter to exit..."
    exit 1
fi

# Open the index.html file in the default web browser
echo "Opening Planet Shark Shiver Builder..."
open "index.html"

# Optional: Start a simple HTTP server for better compatibility
# Uncomment the lines below if you want to run a local server instead
# echo "Starting local server..."
# python3 -m http.server 8080 > /dev/null 2>&1 &
# SERVER_PID=$!
# sleep 2
# open "http://localhost:8080"
# echo "Server started on http://localhost:8080"
# echo "Press Ctrl+C to stop the server"
# wait $SERVER_PID

echo "Planet Shark Shiver Builder launched successfully!"
echo "You can close this terminal window."
