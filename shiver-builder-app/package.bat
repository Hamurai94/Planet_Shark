@echo off
echo Creating Shiver Builder distribution package...

:: Create the zip file directly
powershell -Command "Compress-Archive -Path 'css', 'js', 'images', 'index.html', 'README.md', 'Launch Shiver Builder.bat', 'Planet Shark Shiver Builder.lnk' -DestinationPath '..\Planet_Shark_Shiver_Builder.zip' -Force"

echo Package created: ..\Planet_Shark_Shiver_Builder.zip
pause
