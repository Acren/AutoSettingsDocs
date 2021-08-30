---
sidebar_position: 10
---

# Common Issues & FAQ

> #### *I'm running into a problem, what should I do?*

See the [troubleshooting page.](/troubleshooting)

> #### *Why don't settings save when running Standalone mode from editor?*

By default Unreal disallows saving config from standalone mode, changes are not saved to config (but works fine in editor and packaged). If you go to **Editor Preferences > Level Editor - Play > Play in Standalone Game**, expand the advanced settings, and in **Additional Launch Parameters** put in `-MultiprocessSaveConfig`

This should allow standalone mode to save config and thus your settings will be saved.

> #### *Can I use the menu from the example project? How do I integrate it with my project?*

You can. See the [example project page.](/example-project/#migrating-assets-from-the-example-project)

> #### *Does Auto Settings have gamepad support?*

The plugin has full support for remapping gamepad inputs as part of the input mapping system.
Menu gamepad navigation is not currently implemented in the example project because there isn't a standard way to implement gamepad navigation in Unreal Engine yet.
You should implement navigation the same way as the rest of your project, and call the functions on the setting widgets where appropriate.

> #### *Why does the example project have empty values for the scalability settings, is this okay?*

The value falls back to the index of the array if empty, which makes it a bit faster to create scalability settings as they use 0 for low, 1 for medium, etc.

> #### *Where do settings get saved?*

See the [config files page.](/config-files/)

> #### *How do I reset saved inputs back to the defaults?*

See [resetting saved inputs.](/input-binding/#resetting-saved-inputs)

> #### *Why do inputs not update in game when I change them in the project settings?*

This usually means the inputs have been modified in-game and so the defaults are not being used anymore. See [resetting saved inputs.](/input-binding/#resetting-saved-inputs)

> #### *I accidentally unbound or rebound the menu key to something and I now I can't open the menu to change it back, what do I do?*

Reset the input settings back to the default as explained in [resetting saved inputs.](/input-binding/#resetting-saved-inputs)
The ability to rebind the menu key is included in the example project for demonstration purposes, and you may want to consider not allowing it in your game if it's possible for users to get into a stuck state.

> #### *Does Auto Settings work on platforms other than Windows?*

Other platforms are not officially supported or tested as a target platform, but all of the plugin functionality is platform-independent and in fact multiple users have confirmed full compatibility with various other platforms.

The project will need to support code and compile through Visual Studio or another IDE to support non-Windows platforms.
To allow the plugin to compile on other platforms, you need to add them to the `WhitelistPlatforms` section in the `AutoSettings.uplugin` file, or remove the whitelist section to allow it to be compiled on every platform.

:::note
The `AutoSettings.uplugin` file can be found in the AutoSettings plugin directory, typically be found at `Epic Games\<Version>\Engine\Plugins\Marketplace\AutoSettings`.
:::

Platforms that have been known to work other than Windows include **macOS**, **Linux**, **Xbox**, **PS4**, and **Switch**. Others may not have been tested yet.