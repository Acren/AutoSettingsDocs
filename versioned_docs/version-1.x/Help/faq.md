---
sidebar_position: 10
---

# Common Issues & FAQ

## General

> #### *I'm running into a problem, what should I do?*

See the [troubleshooting page.](/help/troubleshooting)

> #### *Can I use the menu from the example project? How do I integrate it with my project?*

You can. See the [example project page.](/info/example-project/#migrating-assets-from-the-example-project)

> #### *Does Auto Settings work on platforms other than Windows?*

Mostly. See [here.](/info/platforms)

## Settings

> #### *Why don't settings save when running Standalone mode from editor?*

By default Unreal disallows saving config from standalone mode, changes are not saved to config (but works fine in editor and packaged). If you go to **Editor Preferences > Level Editor - Play > Play in Standalone Game**, expand the advanced settings, and in **Additional Launch Parameters** put in `-MultiprocessSaveConfig`

This should allow standalone mode to save config and thus your settings will be saved.

> #### *Why does the example project have empty values for the scalability settings, is this okay?*

The value falls back to the index of the array if empty, which makes it a bit faster to create scalability settings as they use 0 for low, 1 for medium, etc.

> #### *Where do settings get saved?*

See the [config files page.](/info/config-files/)

## Input

> #### *Does Auto Settings have gamepad support?*

The plugin has full support for remapping gamepad inputs as part of the input mapping system.
Menu gamepad navigation is not currently implemented in the example project.
You can implement navigation the same way as the rest of your project, and call the functions on the setting widgets where appropriate.

> #### *How do I reset saved inputs back to the defaults?*

See [resetting saved inputs.](/setup/input-binding/#resetting-saved-inputs)

> #### *Why do inputs not update in game when I change them in the project settings?*

This usually means the inputs have been modified in-game and so the defaults are not being used anymore. See [resetting saved inputs.](/setup/input-binding/#resetting-saved-inputs)

> #### *I accidentally unbound or rebound the menu key to something and I now I can't open the menu to change it back, what do I do?*

Reset the input settings back to the default as explained in [resetting saved inputs.](/setup/input-binding/#resetting-saved-inputs)
The ability to rebind the menu key is included in the example project for demonstration purposes, and you may want to consider not allowing it in your game if it's possible for users to get into a stuck state.
