---
sidebar_position: 9
---

# Versions

## Compatibility

Each plugin version is (usually) released to support the latest engine version only.

New example project versions are sometimes released with plugin versions where applicable.
The example project does not always need to match, but it is recommended to use the most recent example project at the time that plugin version was released.

## Release Notes

### 1.19 {#1_19}
`UE 4.27` `Example Project 1.19`

- UE 4.27 now supported

### 1.18.1 {#1_18_1}
`UE 4.26` `Example Project 1.16`

- Fixed a bug in the previous version preventing the default preset not being used if the player's Base Preset Tag was not specified

### 1.18 {#1_18}
`UE 4.26` `Example Project 1.16`

- Moved input-related logic to a new module called AutoSettingsInput. This should be a seamless change from Blueprint, but module and class names may have to be updated if you are referencing input-related plugin API from code. The new Input module also has its own page in the project settings, which is migrated from the existing page automatically.
- Added a LoadKeyIcons helper function to preload key icons
- ComboBoxSetting will now show the currently applied value even if it is not in the list of available options, instead of showing an empty space
- Fixed warning about bIsDefault not being initialized properly
- Fixed Linked Mapping Groups configuration not working as expected
- Internal changes to support automated testing 

### 1.17.1 {#1_17_1}
`UE 4.26` `Example Project 1.16`

- Fixed a crash in the previous version when binding input for a mapping group which is empty on the base preset

### 1.17 {#1_17}
`UE 4.26` `Example Project 1.16`

- Mouse axis directions are now captured by BindCapturePrompt. Now you can capture inverted mappings such as Mouse Down for Look Up, etc, instead of only the axis itself.
- Fixed a bug causing the default key for an axis mapping to not be captured after an axis key was bound (e.g. MoveForward not being set to W again after it was bound to Mouse Y axis)

### 1.16.1 {#1_16_1}
`UE 4.26` `Example Project 1.16`

- Fixed a bug with the directional axis icons in 1.16 where inverted icons were being shown for the Gamepad Right Stick Y axis because of how Unreal or the underlying drivers invert it under the hood. The plugin should now "flip back" the displayed axis if the axis mapping has the -1 scale, which is how Right Stick Y is normally mapped to undo the inversion.

### 1.16 {#1_16}
`UE 4.26` `Example Project 1.16`

- Added support for showing directional axis button icons if the texture is available. For example, show the icon for Gamepad Left Stick Up if it exists instead of Gamepad Left Stick Y if the scale is 1, or Gamepad Left Stick Down if the scale is -1.
- Added directional thumbstick icons to the example project (These are custom-made based on the royalty-free ones by Xelu)
- Exposed more widget properties with BlueprintReadWrite and EditAnywhere
- Minor code improvements and cleanup

### 1.15 {#1_15}
`UE 4.26` `Example Project 1.15`

- UE 4.26 now supported

### 1.14 {#1_14}
`UE 4.25` `Example Project 1.13`

New:

- Added a `Regenerate Options` function to `Select Setting` which when called, will trigger a re-evaluation of the `Option Factory` and reconstruction of available options. This is useful where the available options need to change dynamically based on the conditions set up inside the Option Factory class.
- Error handling and logging improvements

Fixed:

- Fixed player inputs not being registered in Play As Client
- Fixed a crash when using the debug camera (; key) in editor, because Auto Settings wasn't expecting the `Local Player` to be removed

### 1.13 {#1_13}
`UE 4.25` `Example Project 1.13`

Fixed:

- Fixed an issue involving settings that change other settings (For example, Post Process Quality modifying Bloom Quality and Motion Blur Quality), that was causing the inner setting value to be lost upon engine load if it was initially modified before the outer setting value
- Fixed an issue that was causing Auto-Detect scalability to not affect scalability categories that had already been set by console

Example project:

- The numeric label in the `Styled Slider Setting` widget is now an editable text box which allows the user to set the value more precisely

### 1.12 {#1_12}
`UE 4.25` `Example Project 1.12`

New:

- Input Mapping system now store only the modified mappings, and applies them on top of the preset mappings. This means changes to the project input presets will now affect players with custom mappings too, unless the changes would cause a collision.
- Added project settings to change the config file and section that settings are stored in
- Exposed `Left Value` and `Right Value` of `Slider Setting` to Blueprint
- Exposed `Get Unique Player Identifier` and `Get Default Input Mapping Preset` of `Auto Settings Player` interface to Blueprint
- Changed the default Mouse Capture Distance from 20 to 80, to reduce the likelihood of accidentally capturing mouse axes for input mappings

Fixed:

- There was an issue in the previous 1.11 version causing project settings for Axis Associations to be lost because of config files being stripped out of the plugin during the marketplace deployment process. Added a workaround to fix this. If your project was using the 1.11 version at any point, please also check the Axis Associations in the project settings are set up correctly.

Example project:

 - Added secondary columns on the Input page for both KB+M and Gamepad as a new example of multiple mapping groups in use
 - Added another map with an example scenario showing the implementation of custom saving and loading logic to store player inputs on a Save Game class instead of in config files, which is useful when shipping on console platforms

### 1.11 {#1_11}
`UE 4.25` `Example Project 1.11`

- UE 4.25 now supported
- All setting widgets now preview the current CVar value in editor
- Added `Get Radio Button Widgets` function to `Radio Select` to return the current button widgets
- Added `On Button Created` implementable function to `Radio Select` to allow configuring slots for new buttons
- Added `Work Scale`, `CPU Multiplier`, and `GPU Multiplier` parameters to `Auto Detect Settings` which are passed into the engine's benchmark
- Axis Associations for Gamepad thumbsticks are now set up by default in the project settings
- Improved logging and error handling

### 1.10.1 {#1_10_1}
`UE 4.24` `Example Project 1.10.1`

Example project:

- Removed debug print that was left in by mistake

### 1.10 {#1_10}
`UE 4.24` `Example Project 1.10.1`

New:

- Added `Get Options` Blueprint function to retrieve the options from a `Radio Select` widget

Editor:

- Fixed resolution having no effect in New Editor Window sessions

Example project:

- Music now keeps playing visualized even while volume is zero

### 1.9 {#1_9}
`UE 4.24` `Example Project 1.8`

New:

- Added `Get Player Action Mapping` and `Get Player Axis Mapping` Blueprint functions for easy retrieval of specific active mappings
- Added validation to detect misconfiguration that could cause issues
- More logs and checks to make troubleshooting easier

Fixed:

- Bool CVar functions now correctly operate on actual bool CVars.
- Fixed crash in `BindCaptureButton` when `BindCapturePromptClass` is null

### 1.8 {#1_8}
`UE 4.24` `Example Project 1.8`

New:

- UE 4.24 now supported
- Added helper functions to support usage of CVars as booleans, which are actually just integers with the value 0 or 1 under the hood
- Added a property to `BindCaptureButton` to control the Z-order of the prompt it creates, without having to override `InitializePrompt`

Fixed:

- Fixed a crash when trying to add a change callback for CVar that doesn't exist
- Fixed player's input mapping set being treated as customized even after resetting it to a default preset

Example project:

- Added Sensitivity setting to the example project, which controls both mouse and analog stick sensitivity

**Note:** There appears to be a bug in Unreal 4.24.0 which prevents plugins loading from the Project/Plugins directory in packaged builds if the project is Blueprint-only. This is not a problem with Auto Settings specifically, but consider installing the plugin to the engine or adding source to your project if you are running into this issue.

### 1.7.1 {#1_7_1}
`UE 4.23` `Example Project 1.7`

- Plugin LoadingPhase changed to `PreDefault`, fixing a bug occurring in some projects that was causing Blueprints that were referencing the plugin to break when the engine was loaded

### 1.7 {#1_7}
`UE 4.23` `Example Project 1.7`

- UE 4.23 now supported

### 1.6 {#1_6}
`UE 4.22` `Example Project 1.6`

- UE 4.22 now supported

### 1.5.4 {#1_5_4}
`UE 4.21` `Example Project 1.5.1`

- Fixed `SetPlayerKeyGroup` (for dynamic icon display based on input device) not working

### 1.5.3 {#1_5_3}
`UE 4.21` `Example Project 1.5.1`

- Fixed crash in some projects due to `KeyLabel` binding a delegate that is already bound

### 1.5.2 {#1_5_2}
`UE 4.21` `Example Project 1.5.1`

- Fixed Blueprint Category issue causing package to fail (UE 4.21)

### 1.5.1 {#1_5_1}
`UE 4.21` `Example Project 1.5.1`

- UE 4.21 now supported

### 1.5.0.1 {#1_5_0_1}
`UE 4.20` `Example Project 1.5`

- Fixed Blueprint Category issue causing package to fail (UE 4.20)

### 1.5 {#1_5}
`UE 4.20` `Example Project 1.5`

New:

- PlayerControllers can determine which input preset they should use by default via `IAutoSettingsPlayer` interface
- PlayerControllers can determine how to save and load input mappings via `IAutoSettingsPlayer` interface
This is useful if you need to store saved mappings yourself instead of using the default config implementation
- Added a `OnPressed` capture mode to `BindCapturePrompt` which makes it possible to capture input on key down rather than key up, if you are not using modifier keys
- `BindCapturePrompt` can be restricted to only accept input from a Key Group, rejecting other input and staying open
- Added `BlacklistedActions` and `BlacklistedAxes` to Auto Settings config, allowing input mappings to be ignored by the system
- Exposed some more properties of various widgets with `BlueprintReadWrite` and `BlueprintReadOnly`
- Added "Update" functions to some widget types that is called when properties change at runtime, which can be used for responding to data changes as an alternative to UMG's data binding 
- InputMapping (ActionMapping and AxisMapping) can now be passed a chord from an external source to bind it to an action or axis
- Added `OnChordRejected` and `OnCapturePromptClosed` delegates to `BindCapturePrompt`
- Added `bIgnoreGameViewportInputWhileCapturing` property to `BindCapturePrompt` to control if the prompt should block input from the game viewport

Editor:

- `ActionLabel` and `AxisLabel` will now preview the default input preset in the editor
(e.g. if an `ActionLabel` is for Jump, it would show Spacebar if that's the default mapping)
This requires the KeyLabel you are using to implement `UpdateKeyLabel`
- Added `TitleProperty` meta tag to many config arrays allowing the contents to be viewed more easily while editing Auto Settings config in project settings

### 1.4.1 {#1_4_1}
`UE 4.20` `Example Project 1.4.0.1`

- Properly exposed `Apply Setting` and `Save Setting` functions to Blueprint. These were intended to be exposed in a previous version but not correctly set up as static Blueprint-callable functions.

### 1.4 {#1_4}
`UE 4.20` `Example Project 1.4.0.1`

- UE 4.20 now supported
- Plugin developer config (AutoSettings page in Project Settings) converted to use *Game* category instead of *EditorPerProjectUserSettings* category

**Important note:** Because of the config category change, projects upgrading from older versions of the plugin will have to move or copy the `[/Script/AutoSettings.AutoSettingsConfig]` category, including all of its entries, from `YourProject/Config/DefaultEditorPerProjectUserSettings.ini` to `YourProject/Config/DefaultGame.ini` to retain existing config values.

### 1.3 {#1_3}
`UE 4.19` `Example Project 1.3`

New:

- Added option to disable automatic player input initialization in plugin settings and call it manually using `InitializePlayerInputOverrides`.
- Added the ability for projects to override how the plugin uniquely identifies players for storing inputs by implementing the `IAutoSettingsPlayer` interface on PlayerController - by default it still uses the Controller ID of the local player.
- Slider setting no longer auto-saves every delta while the handle is being dragged, which was performance heavy as it was writing to config each time. Now it can still auto-apply while the handle is being dragged, but only auto-saves once the handle is released.
- Added option to control sensitivity of mouse-axis binding, specifying how far the mouse must move before it is registered.
- Added the ability to manually add input overrides using `AddPlayerActionOverride` and `AddPlayerAxisOverride`.
- Added the option for projects to specify special escape keys that cancel input binding without capturing anything.
- Added `HasUnappliedChange` to settings. Previously you could only check `HasUnsavedChange`.
- Saving a setting automatically applies it if it hasn't been already. This removes the possible state of having saved but unapplied changes.

Fixed:

- Setting widgets now read their initial value from their applied console variable if available instead of saved config. This fixes the unintended behavior of settings showing the saved value instead of the applied value where the two differ.
- Fixed a bug with input binding where left mouse button would register as none / invalid if pressed within a second or so of the prompt opening.
- Fixed bug with some saved settings such as max FPS being overridden by engine initialization. Saved setting values are now applied after engine initialization so that they take precedence over engine values.
- Fixed `Cancel` reverting the setting to the applied value. It now reverts to the saved value instead.
- Fixed issues while saving settings with masked values (e.g. Resolution / window mode) recombining with applied values instead of saved values.
- Fixed settings with unapplied changes being incorrectly reverted when any console variable is changed, including other settings

Example project:

- Split each page of settings into their own widgets, making them easier to manage.
- Added UI to video settings page to demonstrate manual save / apply / cancel functionality.
- Added gamma setting to video settings.

### 1.2.4 {#1_2_4}
`UE 4.19` `Example Project 1.2.2`

- ComboBox setting now chooses not to apply or save settings when the selection is changed externally - this fixes a crash that could happen when constructing new widgets
- Fixed a crash when external code tries to register CVar change callback delegates that are already registered - warn instead

### 1.2.3 {#1_2_3}
`UE 4.19` `Example Project 1.2.2`

- Fixed crash in multiplayer in 4.19 due to trying to initialize input mappings when a PlayerController does not have a valid PlayerInput
- Fixed "Allow multiple bindings per key" option not taking effect

### 1.2.2 {#1_2_2}
`UE 4.19` `Example Project 1.2.2`

- UE 4.19 now supported

### 1.2.1 {#1_2_1}
`UE 4.18` `Example Project 1.2`

- Fixed category-related errors from 1.2 upon packaging the game with the installed plugin
- Fixed crash with extra clients in multiple-process play in editor

### 1.2 {#1_2}
`UE 4.18` `Example Project 1.2`

New:

- Added the ability to dynamically prioritize between different Key Groups for action and axis labels. Set this by calling `Set Player Key Group`, or `UInputMappingManager::SetPlayerKeyGroupStatic` in code. Example usage for this would be automatically switching input prompts between gamepad and keyboard & mouse when the player changes input mode.
- To support dynamic Key Group priorities, an empty tag for Key Group now represents "any" rather than the keys that are not used by any other key group. Projects with a gamepad key group will now also probably want a key group for keyboard and mouse. The keys used for prompts using an empty/any key group will be dynamically selected based on the player's Key Group.
- Similarly, a Mapping Group of -1 represents "any". 0 is still the first mapping group, 1 the next, etc.
- Added an easy `Use non-gamepad keys` option to Key Group so that users don't have to add every single key to a key group for keyboard and mouse.
- Added the ability to bind mouse axes so that users can re-bind "look" inputs. Mouse axes can be blacklisted to revert to old behavior.
- All `BindWidget` properties are now read-exposed to Blueprint. This means you can now access the internal control of a setting without needing to use code.
- Exposed `Is CVar Registered` function to Blueprint.

Fixed:

- Fixed error logs caused by `ActionLabel` trying to create widgets at design time.
- Fixed warning logs caused by trying to register a setting for a CVar that already exists when the game is run past the first time in an editor session.
- Converted plugin to IWYU to decrease compile times

Example project:

- Removed the first Input page with Primary/Secondary columns, now there is a single Input page with Keyboard/Gamepad columns. This is still supported by the plugin but there were too many edge cases related to supporting multiple input layouts in the same project in parallel and in the end it was not worth the extra maintenance cost and complication that it would have to add to the plugin.
- Added look and turn inputs to the input menu now that mouse axes can be bound.
- Added more mappings to the "Alternate" preset.
- Gamepad Right Stick Up and Down are now mapped to axis scales -1 and 1 respectively instead of 1 and -1. This is because the right stick Y axis has the opposite values of the left stick and I didn't realise when initially setting it up.
- Added video setting for Max FPS.

### 1.1.1 {#1_1_1}
`UE 4.18` `Example Project 1.1.1`

- UE 4.18 now supported

### 1.1 {#1_1}
`UE 4.17` `Example Project 1.1`

- Added a function on `Slider Setting` called when its value changes. This allows users to easily have a text label reflect the value.
- Added tooltip to option value explaining that it falls back to the array index if blank
- Added new settings to example project:
	- View distance quality
	- Foliage quality
	- Field of view
	- Motion blur quality
	- Bloom quality
- LoadingPhase set to `Default` - previously on `PostEngineInit` to support logic that has since been changed
- Fixed category errors when packaging
- Fixed crash from widgets attempting to apply or save settings during design time

### 1.0 {#1_0}
`UE 4.17` `Example Project 1.0`

- Initial plugin release supporting 4.17