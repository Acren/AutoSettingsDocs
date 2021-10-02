---
sidebar_position: 9
---

# Platforms

## Non-windows platforms

Auto Settings is primary developed and tested using Windows.

Other platforms are not officially supported or tested as a target platform, but all of the plugin functionality is platform-independent and in fact multiple users have confirmed full compatibility with various other platforms.

The project will need to support code and compile through Visual Studio or another IDE to support non-Windows platforms.

To allow the plugin to compile on other platforms:

1. Copy the plugin files from the engine to your own project.
2. Either add the new platforms to the `WhitelistPlatforms` section in the `AutoSettings.uplugin` file, or remove the whitelist section to allow it to be compiled on every platform.

:::note
The plugin files are typically be found at `Epic Games/<Version>/Engine/Plugins/Marketplace/AutoSettings`.

After copying them to your own project, the directory should be `<ProjectName>/Plugins/AutoSettings`.
:::

Platforms that have been known to work other than Windows include **macOS**, **Linux**, **Xbox**, **PS4**, and **Switch**. Others may not have been tested yet.