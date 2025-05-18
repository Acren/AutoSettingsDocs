---
sidebar_position: 7
---

# Config Files

Unreal Engine saves config files to different directories depending on the configuration:

Context							|Config directory
----							|----
Editor:							|**`<Project directory>\Saved\Config\<Platform>`**
Development and Debug builds:	|**`<Package directory>\Saved\Config\<Platform>`**
Shipping builds:				|**`AppData\Local\<Project name>\Saved\Config\<Platform>`**

The default config file that AutoSettings saves to depends on the plugin version:

Version 	|Settings 				|Input
----		|----					|----
1.28+		|`UserSettings.ini` 	|`UserSettings.ini`
1.26+		|`UserSettings.ini` 	|`Settings.ini`
1.24.1+ 	|`Settings.ini`  		|`Settings.ini`
Earlier		|`Settings.ini` 		|`Input.ini`

Settings are saved in the `[Settings]` section.

Input bindings are saved in the `[/Script/AutoSettings.InputMappingManager]` section.