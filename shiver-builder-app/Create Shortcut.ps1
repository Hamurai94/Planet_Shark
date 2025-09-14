# Create a shortcut to launch the Shiver Builder application
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$PSScriptRoot\Planet Shark Shiver Builder.lnk")
$Shortcut.TargetPath = "$PSScriptRoot\Launch Shiver Builder.bat"
$Shortcut.IconLocation = "%SystemRoot%\System32\SHELL32.dll,23"
$Shortcut.Description = "Planet Shark Shiver Builder"
$Shortcut.WorkingDirectory = "$PSScriptRoot"
$Shortcut.Save()

Write-Host "Shortcut created successfully!"
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
