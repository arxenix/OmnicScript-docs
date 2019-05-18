/**
 * Stops execution of the action list.
 */
export declare function abort(): void;

/**
 * Stops execution of the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.
 * @param condition Specifies whether the execution is stopped.
 */
export declare function abortIf(condition: boolean): void;

/**
 * Stops execution of the action list if at least one condition in the condition list is false. If all conditions are true, execution continues with the next action.
 */
export declare function abortIfConditionIsFalse(): void;

/**
 * Stops execution of the action list if all conditions in the condition list are true. If any are false, execution continues with the next action.
 */
export declare function abortIfConditionIsTrue(): void;

/**
 * Undoes the effect of the disallow button action for one or more players.
 * @param player The player or players whose button is being reenabled.
 * @param button The logical button that is being reenabled.
 */
export declare function allowButton(player: WSPlayer, button: WSButton): void;

/**
 * Applies an instantaneous change in velocity to the movement of one or more players.
 * @param player The player or players whose velocity will be changed.
 * @param direction The unit direction in which the impulse will be applied. This value is normalized internally.
 * @param speed The magnitude of the change to the velocities of the player or players.
 * @param relative Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
 * @param motion Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
 */
export declare function applyImpulse(player: WSPlayer, direction: WSDirection, speed: number, relative: WSRelative, motion: WSMotion): void;

/**
 * Displays a large message above the reticle that is visible to specific players.
 * @param visibleTo One or more players who will see the message.
 * @param header The message to be displayed.
 */
export declare function bigMessage(visibleTo: WSPlayer, header: WSAny): void;

/**
 * Gradually modifies the value of a global variable at a specific rate. Global variable is a variable that belongs to the game itself.)
 * @param variable Specifies which global variable to modify gradually.
 * @param destination The value that the global variable will eventually reach. The type of this value may be either a number or a vector. Though the variable's existing value must be of the same type before the chase begins.
 * @param rate The amount of change that will happen to the variable's value each second.
 * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
 */
export declare function chaseGlobalVariableAtRate(variable: WSVariable, destination: WSAny, rate: number, reevaluation: WSChaseRateReevaluation): void;

/**
 * Gradually modifies the value of a global variable over time. (a global variable is a variable that belongs to the game itself.)
 * @param variable Specifies which global variable to modify gradually.
 * @param destination The value that the global variable will eventually reach. The type of this value may be either a number or a vector. Though the variable's existing value must be of the same type before the chase begins.
 * @param duration The amount of time, in seconds, over which the variable's value will approach the destination.
 * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
 */
export declare function chaseGlobalVariableOverTime(variable: WSVariable, destination: WSAny, duration: number, reevaluation: WSChaseTimeReevaluation): void;

/**
 * Gradually modifies the value of a player variable at a specific rate. (a player variable is a variable that belongs to a specific player.)
 * @param player The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.
 * @param variable Specifies which of the player's variables to modify gradually.
 * @param destination The value that the player variable will eventually reach. The type of this value may be either a number or a vector. Though the variable's existing value must be of the same type before the chase begins.
 * @param rate The amount of change that will happen to the variable's value each second.
 */
export declare function chasePlayerVariableAtRate(player: WSPlayer, variable: WSVariable, destination: WSAny, rate: number): void;

/**
 * Gradually modifies the value of a player variable over time. (a player variable is a variable that belongs to a specific player.)
 * @param player The player whose variable will gradually change. If multiple players are provided, each of their variables will change independently.
 * @param variable Specifies which of the player's variables to modify gradually.
 * @param destination The value that the player variable will eventually reach. The type of this value may be either a number or a vector. Though the variable's existing value must be of the same type before the chase begins.
 * @param duration The amount of time, in seconds, over which the variable's value will approach the destination.
 */
export declare function chasePlayerVariableOverTime(player: WSPlayer, variable: WSVariable, destination: WSAny, duration: WSAny): void;

/**
 * Clears a status that was applied from a set status action from one or more players.
 * @param player The player or players from whom the status will be removed.
 * @param status The status to be removed from the player or players.
 */
export declare function clearStatus(player: WSPlayer, status: WSStatus): void;

/**
 * Causes one or more players to use an emote, voice line, or other equipped communication.
 * @param player The player or players to perform the communication.
 * @param type The type of communication.
 */
export declare function communicate(player: WSPlayer, type: WSCommunicate): void;

/**
 * Creates an in-world effect entity. This effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.
 * @param visibleTo One or more players who will be able to see the effect.
 * @param type The type of effect to be created.
 * @param color The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue. Depending on whether the team is hostile to the viewer. Does not apply to sound effects.
 * @param position The effect's position. If this value is a player, then the effect will move along with the player. Otherwise, the value is interpreted as a position in the world.
 * @param radius The radius of this effect.
 * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated.
 */
export declare function createEffect(visibleTo: WSPlayer, type: WSCreateEffect, color: WSColor, position: WSPosition, radius: number, reevaluation: WSEffectReevaluation): void;

/**
 * Reates hud text visible to specific players at a specific location on screen. This text will persist until destroyed. To obtain a eference to this text, use the last text id value. This action will fail if do many text elements have been created.
 * @param visibleTo One or more players who will see the hud text.
 * @param header The text to be displayed (can be blank)
 * @param subheader The subheader text to be displayed (can be blank)
 * @param text The body text to be displayed (can be blank)
 * @param location The location on the screen where the text will appear.
 * @param sortOrder The sort order of the text relative to other text in the same location. A higher sort order will come after a lower sort order.
 * @param headerColor The color of the header.
 * @param subheaderColor The color of the subheader.
 * @param textColor The color of the text.
 * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated.
 */
export declare function createHudText(visibleTo: WSPlayer, header: WSAny, subheader: WSAny, text: WSAny, location: WSHudLocation, sortOrder: number, headerColor: WSColor, subheaderColor: WSColor, textColor: WSColor, reevaluation: WSHudTextReevaluation): void;

/**
 * Creates an in-world icon entity. This icon entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.
 * @param visibleTo One or more players who will be able to see the icon.
 * @param position The icon's position. If this value is a player, then the icon will appear above the player's head. Otherwise, the value is interpreted as a position in the world.
 * @param icon The icon to be created.
 * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. The icon will keep asking for and using new values from reevaluated inputs.
 * @param showWhenOffscreen Should this icon appear even when it is behind you?
 */
export declare function createIcon(visibleTo: WSPlayer, position: WSPosition, icon: WSIcon, reevaluation: WSIconReevaluation, showWhenOffscreen: boolean): void;

/**
 * Creates in-world text visible to specific players at a specific position the world. This text will persist until destroyed. To obtain a eference to this text, use the last text id value. This action will fail if do many text elements have been created.
 * @param visibleTo One or more players who will see the in-world text.
 * @param header The text to be displayed.
 * @param position The texts position. If this value is a player, then the text will appear above the player's head. Otherwise, the value is interpreted as a position in the world.
 * @param scale The texts scale.
 * @param clipping Specifies whether the text can be seen through walls or is instead clipped.
 * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. The text will keep asking for and using new values from reevaluated inputs.
 */
export declare function createInWorldText(visibleTo: WSPlayer, header: WSAny, position: WSPosition, scale: number, clipping: WSWorldTextClipping, reevaluation: WSWorldTextReevaluation): void;

/**
 * Applies instantaneous damage to one or more players, possibly killing the players.
 * @param player The player or players who will receive damage.
 * @param damager The player who will receive credit for the damage. A damager of null indicates no player will receive credit.
 * @param amount The amount of damage to apply. This amount may be modified by buffs, debuffs. Or armor.
 */
export declare function damage(player: WSPlayer, damager: WSPlayer, amount: number): void;

/**
 * Qstantly ends the match in a draw. This action has no effect in free- or-all modes.
 */
export declare function declareMatchDraw(): void;

/**
 * Instantly ends the match with the specific player as the winner. This action only has an effect in free-for-all modes.
 * @param player The winning player.
 */
export declare function declarePlayerVictory(player: WSPlayer): void;

/**
 * Declare a team as the current round winner. This only works in the ontrol and elimination game modes
 * @param roundWinningTeam Round winning team
 */
export declare function declareRoundVictory(roundWinningTeam: WSTeam): void;

/**
 * Instantly ends the match with the specified team as the winner. This action has no effect in free-for-all modes.
 * @param team The winning team.
 */
export declare function declareTeamVictory(team: WSTeam): void;

/**
 * Destroys all effect entities created by create effect.
 */
export declare function destroyAllEffects(): void;

/**
 * Destroys all hud text that was created by the create hud text action.
 */
export declare function destroyAllHudText(): void;

/**
 * Destroys all icon entities created by create icon.
 */
export declare function destroyAllIcons(): void;

/**
 * Destroys all in-world text created by create in-world text.
 */
export declare function destroyAllInWorldText(): void;

/**
 * Destroys an effect entity that was created by create effect.
 * @param entity Specifies which effect entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.
 */
export declare function destroyEffect(entity: WSPlayer): void;

/**
 * Destroys hud text that was created by create hud text.
 * @param textId Specifies which hud text to destroy. This id may be last text id or a variable into which last text id was earlier stored.
 */
export declare function destroyHudText(textId: number): void;

/**
 * Destroys an icon entity that was created by create icon.
 * @param entity Specifies which icon entity to destroy. This entity may be last created entity or a variable into which last created entity was earlier stored.
 */
export declare function destroyIcon(entity: WSPlayer): void;

/**
 * Destroys in-world text that was created by create in-world text.
 * @param textId Specifies which in-world text to destroy. This id may be last text id or a variable into which last text id was earlier stored.
 */
export declare function destroyInWorldText(textId: number): void;

/**
 * Disables game mode announcements from the announcer until reenabled or the match ends.
 */
export declare function disableBuiltInGameModeAnnouncer(): void;

/**
 * Disables completion of the match from the game mode itself, only allowing the match to be completed by scripting commands.
 */
export declare function disableBuiltInGameModeCompletion(): void;

/**
 * Disables all game mode music until reenabled or the match ends.
 */
export declare function disableBuiltInGameModeMusic(): void;

/**
 * Disables automatic respawning for one or more players, only allowing respawning by scripting commands.
 * @param players The player or players whose respawning is affected.
 */
export declare function disableBuiltInGameModeRespawning(players: WSPlayer): void;

/**
 * Disables changes to player and team scores from the game mode itself, only allowing scores to be changed by scripting commands.
 */
export declare function disableBuiltInGameModeScoring(): void;

/**
 * Undoes the effect of the enable death spectate all players action for or more players.
 * @param player The player or players whose default death spectate behavior is restored.
 */
export declare function disableDeathSpectateAllPlayers(player: WSPlayer): void;

/**
 * Undoes the effect of the enable death spectate target hud action for or more players.
 * @param player The player or players who will revert to seeing their own hud while death spectating.
 */
export declare function disableDeathSpectateTargetHud(player: WSPlayer): void;

/**
 * Disables a logical button for one or more players such that pressing it has no effect.
 * @param player The player or players whose button is being disabled.
 * @param button The logical button that is being disabled.
 */
export declare function disallowButton(player: WSPlayer, button: WSButton): void;

/**
 * Undoes the effect of the disable built-in game mode announcer action.
 */
export declare function enableBuiltInGameModeAnnouncer(): void;

/**
 * Undoes the effect of the disable built-in game mode completion action.
 */
export declare function enableBuiltInGameModeCompletion(): void;

/**
 * Undoes the effect of the disable built-in game mode music action.
 */
export declare function enableBuiltInGameModeMusic(): void;

/**
 * Undoes the effect of the disable built-in game mode respawning action for one or more players.
 * @param players The player or players whose respawning is affected.
 */
export declare function enableBuiltInGameModeRespawning(players: WSPlayer): void;

/**
 * Undoes the effect of the disable built-in game mode scoring action.
 */
export declare function enableBuiltInGameModeScoring(): void;

/**
 * Allows one or more players to spectate all players when dead, as opposed to only allies.
 * @param player The player or players who will be allowed to spectate all players.
 */
export declare function enableDeathSpectateAllPlayers(player: WSPlayer): void;

/**
 * 'auses one or more players to see their spectate target's hud instead their own while death spectating.
 * @param player The player or players who will begin seeing their spectate targets hud while death spectating.
 */
export declare function enableDeathSpectateTargetHud(player: WSPlayer): void;

/**
 * Returns the match to the assemble heroes phase of the game mode. Only works if the game is in progress.
 */
export declare function goToAssembleHeroes(): void;

/**
 * Provides an instantaneous heal to one or more players. This heal will not resurrect dead players.
 * @param player The player or players whose health will be restored.
 * @param healer The player who will receive credit for the healing. A healer of null indicates no player will receive credit.
 * @param amount The amount of healing to apply. This amount may be modified by bufi or debuffs. Healing is capped by each player's max health.
 */
export declare function heal(player: WSPlayer, healer: WSPlayer, amount: number): void;

/**
 * Instantly kills one or more players.
 * @param player The player or players who will be killed.
 * @param killer The player who will receive credit for the kill. A killer of null indicates no player will receive credit.
 */
export declare function kill(player: WSPlayer, killer: WSPlayer): void;

/**
 * Restarts the action list from the beginning. To prevent an infinite .oop, a wait action must execute between the start of the action list this action.
 */
export declare function loop(): void;

/**
 * Restarts the action list from the beginning if this action's condition valuates to true. If it does not, execution continues with the next ction. To prevent an infinite loop, a wait action must execute etween the start of the action list and this action.
 * @param condition Specifies whether the loop will occur.
 */
export declare function loopIf(condition: boolean): void;

/**
 * Restarts the action list from the beginning if at least one condition the condition list is false. If all conditions are true, execution
 */
export declare function loopIfConditionIsFalse(): void;

/**
 * Restarts the action list from the beginning if every condition in the condition list is true. If any are false, execution continues with the next action. To prevent an infinite loop, a wait action must execute between the start of the action list and this action.
 */
export declare function loopIfConditionIsTrue(): void;

/**
 * Modifies the value of a global variable, which is a variable that belongs to the game itself.
 * @param variable The global variable to modify.
 * @param operation The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.
 * @param value The value used for the modification. For arithmetic operations, this is the second of the two operands. With the other being the variable's existing value. For array operations, this is the value to
 */
export declare function modifyGlobalVariable(variable: WSVariable, operation: WSOperation, value: WSAny): void;

/**
 * Modifies the score (kill count) of one or more players. This action only has an effect in free-for-all modes.
 * @param player The player or players whose score will change.
 * @param score The amount the score will increase or decrease. If positive, the score wu increase. If negative. The score will decrease.
 */
export declare function modifyPlayerScore(player: WSPlayer, score: number): void;

/**
 * Modifies the value of a player variable, which is a variable that belongs to a specific player.
 * @param player The player whose variable will be modified. If multiple players are provided, each of their variables will be set.
 * @param variable Specifies which of the player's variables to modify.
 * @param operation The way in which the variable's value will be changed. Options include standard arithmetic operations as well as array operations for appending and removing values.
 * @param value The value used for the modification. For arithmetic operations, this is the second of the two operands. With the other being the variable's existing value. For array operations, this is the value to
 */
export declare function modifyPlayerVariable(player: WSPlayer, variable: WSVariable, operation: WSOperation, value: WSAny): void;

/**
 * Modifies the score of one or both teams. This action has no effect in ree-for-all modes or modes without a team score.
 * @param team The team or teams whose score will be changed.
 * @param score The amount the score will increase or decrease. If positive, the score wu increase. If negative. The score will decrease.
 */
export declare function modifyTeamScore(team: WSTeam, score: number): void;

/**
 * Pauses the match time. Players, objective logic, and game mode advancement criteria are unaffected by the pause.
 */
export declare function pauseMatchTime(): void;

/**
 * Plays an effect at a position in the world. The lifetime of this effect is hort, so it does not need to be updated or destroyed.
 * @param visibleTo One or more players who will be able to see the effect.
 * @param type The type of effect to be created.
 * @param color The color of the effect to be created. If a particular team is chosen, the effect will either be red or blue. Depending on whether the team is hostile to the viewer.
 * @param position The effect's position. If this value is a player, then the effect will play at the player's position. Otherwise, the value is interpreted as a position in the world.
 * @param radius The effect's radius in meters.
 */
export declare function playEffect(visibleTo: WSPlayer, type: WSPlayEffect, color: WSColor, position: WSPosition, radius: number): void;

/**
 * Reemptively loads the specified hero or heroes into memory using he skins of the specified player or players, available memory ermitting. Useful whenever rapid hero changing is possible and the 'ext hero is known.
 * @param player The player or players who will begin preloading a hero or heroes. Only one preload hero action will be active at a time for a given player.
 * @param hero The hero or heroes to begin preloading for the specified player or players. When multiple heroes are specified in an array. The heroes towards the beginning of the array are prioritized.
 */
export declare function preloadHero(player: WSPlayer, hero: WSHero): void;

/**
 * Forces one or more players to press a button virtually for a single frame.
 * @param player The player or players for whom the virtual button input will be forced.
 * @param button The button to be pressed.
 */
export declare function pressButton(player: WSPlayer, button: WSButton): void;

/**
 * Restores the list of heroes available to one or more players to the list specified by the game settings. If a player's current hero becomes unavailable, the player is forced to choose a different hero and respawn at an appropriate spawn location.
 * @param player The player or players whose hero list is being reset.
 */
export declare function resetPlayerHeroAvailability(player: WSPlayer): void;

/**
 * Respawns one or more players at an appropriate spawn location with full health, even if they were already alive.
 * @param player The player or players to respawn.
 */
export declare function respawn(player: WSPlayer): void;

/**
 * Instantly resurrects one or more players at the location they died with no transition.
 * @param player The player or players who will be resurrected.
 */
export declare function resurrect(player: WSPlayer): void;

/**
 * Enables or disables ability 1 for one or more players.
 * @param player The player or players whose access to ability 1 is affected.
 * @param enabled Specifies whether the player or players are able to use ability 1 . Expects a boolean value such as true. False. Or compare.
 */
export declare function setAbility1Enabled(player: WSPlayer, enabled: boolean): void;

/**
 * Enables or disables ability 2 for one or more players.
 * @param player The player or players whose access to ability 2 is affected.
 * @param enabled Specifies whether the player or players are able to use ability 2. Expects a boolean value such as true. False. Or compare.
 */
export declare function setAbility2Enabled(player: WSPlayer, enabled: boolean): void;

/**
 * Sets the aim speed of one or more players to a percentage of their normal aim speed.
 * @param player The player or players whose aim speed will be set.
 * @param turnSpeedPercent The percentage of normal aim speed to which the player or players wu set their aim speed.
 */
export declare function setAimSpeed(player: WSPlayer, turnSpeedPercent: number): void;

/**
 * Sets the damage dealt of one or more players to a percentage of their raw damage dealt.
 * @param player The player or players whose damage dealt will be set.
 * @param damageDealtPercent The percentage of raw damage dealt to which the player or players wu set their damage dealt.
 */
export declare function setDamageDealt(player: WSPlayer, damageDealtPercent: number): void;

/**
 * Sets the damage received of one or more players to a percentage of their raw damage received.
 * @param player The player or players whose damage received will be set.
 * @param damageReceivedPercent The percentage of raw damage received to which the player or players will set their damage received.
 */
export declare function setDamageReceived(player: WSPlayer, damageReceivedPercent: number): void;

/**
 * Sets the facing of one or more players to the specified direction.
 * @param player The player or players whose facing will be set.
 * @param direction The unit direction in which the player or players will face. This value is normalized internally.
 * @param relative Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
 */
export declare function setFacing(player: WSPlayer, direction: WSDirection, relative: WSRelative): void;

/**
 * Stores a value into a global variable, which is a variable that belongs to the game itself.
 * @param variable Specifies which global variable to store the value into.
 * @param value The value that will be stored.
 */
export declare function setGlobalVariable(variable: WSVariable, value: WSAny): void;

/**
 * Finds or creates an array on a global variable, which is a variable that belongs to the game itself, then stores a value in the array at the specified index.
 * @param variable Specifies which global variable's value is the array to modify. If the variable's value is not an array. Then its value becomes an empty array.
 * @param index The index of the array to modify. If the index is beyond the end of the array. The array is extended with new elements given a value of zero.
 * @param value The value that will be stored into the array.
 */
export declare function setGlobalVariableAtIndex(variable: WSVariable, index: number, value: WSAny): void;

/**
 * Sets the movement gravity for one or more players to a percentage regular movement gravity.
 * @param player The player or players whose movement gravity will be set.
 * @param gravityPercent The percentage of regular movement gravity to which the player 0' players will set their personal movement gravity.
 */
export declare function setGravity(player: WSPlayer, gravityPercent: number): void;

/**
 * Sets the healing dealt of one or more players to a percentage of their raw healing dealt.
 * @param player The player or players whose healing dealt will be set.
 * @param healingDealtPercent 
 */
export declare function setHealingDealt(player: WSPlayer, healingDealtPercent: number): void;

/**
 * Sets the healing received of one or more players to a percentage of their raw healing received.
 * @param player The player or players whose healing received will be set.
 * @param healingReceivedPercent The percentage of raw healing received to which the player or players will set their healing received.
 */
export declare function setHealingReceived(player: WSPlayer, healingReceivedPercent: number): void;

/**
 * Causes one or more players to become invisible to either all other players or just enemies.
 * @param player The player or players who will become invisible.
 * @param invisibleTo Specifies for whom the player or players will be invisible.
 */
export declare function setInvisible(player: WSPlayer, invisibleTo: WSInvisibleTo): void;

/**
 * Sets the current match time (which is visible at the top of the screen). This can be used to shorten or extend the duration of a match or to change the duration of assemble heroes or setup.
 * @param time The match time in seconds.
 */
export declare function setMatchTime(time: number): void;

/**
 * Sets the max health of one or more players as a percentage of their max health. This action will ensure that a player's current health will not exceed the new max health.
 * @param player The player or players whose max health will be set.
 * @param healthPercent The percentage of raw max health to which the player or players wu set their max health.
 */
export declare function setMaxHealth(player: WSPlayer, healthPercent: number): void;

/**
 * Sets the move speed of one or more players to a percentage of their raw move speed.
 * @param player The player or players whose move speed will be set.
 * @param moveSpeedPercent The percentage of raw move speed to which the player or players wu set their move speed.
 */
export declare function setMoveSpeed(player: WSPlayer, moveSpeedPercent: number): void;

/**
 * Sets the text at the top center of the screen that normally describes the objective to a message visible to specific players.
 * @param visibleTo One or more players who will see the message.
 * @param header The message to be displayed.
 * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. The message will keep asking for and using new values from reevaluated inputs.
 */
export declare function setObjectiveDescription(visibleTo: WSPlayer, header: WSAny, reevaluation: WSObjectiveDescriptionReevaluation): void;

/**
 * Iets the list of heroes available to one or more players. If a player's iirrent hero becomes unavailable, the player is forced to choose a )ifferent hero and respawn at an appropriate spawn location.
 * @param player The player or players whose hero list is being set.
 * @param hero The hero or heroes that will be available. If no heroes are provided. The action has no effect.
 */
export declare function setPlayerAllowedHeroes(player: WSPlayer, hero: WSHero): void;

/**
 * Sets the score (kill count) of one or more players. This action only has an effect in free-for-all modes.
 * @param player The player or players whose score will be set.
 * @param score The score that will be set.
 */
export declare function setPlayerScore(player: WSPlayer, score: number): void;

/**
 * Stores a value into a player variable, which is a variable that belongs to a specific player.
 * @param player The player whose variable will be set. If multiple players are provided, each of their variables will be set.
 * @param variable Specifies which of the player's variables to store the value into.
 * @param value The value that will be stored.
 */
export declare function setPlayerVariable(player: WSPlayer, variable: WSVariable, value: WSAny): void;

/**
 * Finds or creates an array on a player variable, which is a variable that belongs to a specific player, then stores a value in the array at the specified index.
 * @param player The player whose variable will be modified. If multiple players are provided, each of their variables will be set.
 * @param variable Specifies which player variable's value is the array to modify. If the variable's value is not an array. Then its value becomes an empty array.
 * @param index The index of the array to modify. If the index is beyond the end of the array. The array is extended with new elements given a value of zero.
 * @param value The value that will be stored into the array.
 */
export declare function setPlayerVariableAtIndex(player: WSPlayer, variable: WSVariable, index: number, value: WSAny): void;

/**
 * Enables or disables primary fire for one or more players.
 * @param player The player or players whose access to primary fire is affected.
 * @param enabled Specifies whether the player or players are able to use primary fire. Expects a boolean value such as true, false, or compare.
 */
export declare function setPrimaryFireEnabled(player: WSPlayer, enabled: boolean): void;

/**
 * Sets the projectile gravity for one or more players to a percentage of regular projectile gravity.
 * @param player The player or players whose projectile gravity will be set.
 * @param projectileGravityPercent The percentage of regular projectile gravity to which the player or players will set their personal projectile gravity.
 */
export declare function setProjectileGravity(player: WSPlayer, projectileGravityPercent: number): void;

/**
 * Iets the projectile speed for one or more players to a percentage of projectile speed.
 * @param player The player or players whose projectile speed will be set.
 * @param projectileSpeedPercent The percentage of regular projectile speed to which the player or players will set their personal projectile speed.
 */
export declare function setProjectileSpeed(player: WSPlayer, projectileSpeedPercent: number): void;

/**
 * Sets the duration between death and respawn for one or more players. For players that are already dead when this action is executed, the change takes effect on their next death.
 * @param player The player or players whose respawn max time is being defined.
 * @param time The duration between death and respawn in seconds.
 */
export declare function setRespawnMaxTime(player: WSPlayer, time: number): void;

/**
 * Enables or disables secondary fire for one or more players.
 * @param player The player or players whose access to secondary fire is affected.
 * @param enabled Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false. Or compare.
 */
export declare function setSecondaryFireEnabled(player: WSPlayer, enabled: boolean): void;

/**
 * Enables or disables secondary fire for one or more players.
 * @param player The player or players whose access to secondary fire is affected.
 * @param enabled Specifies whether the player or players are able to use secondary fire. Expects a boolean value such as true, false. Or compare.
 */
export declare function setSecondaryFireEnabled(player: WSPlayer, enabled: boolean): void;

/**
 * Sets the simulation rate for the entire game, including all players, projectiles, effects, and game mode logic.
 * @param speedPercent The simulation rate as a percentage of normal speed. Only rates up to 100% are allowed.
 */
export declare function setSlowMotion(speedPercent: number): void;

/**
 * Applies a status to one or more players. This status will remain in effect for the specified duration or until it is cleared by the clear status action.
 * @param player The player or players to whom the status will be applied.
 * @param assister Specifies a player to be awarded assist credit should the affected player or players be killed while the status is in effect. An assister of null indicates no player will receive credit.
 * @param status The status to be applied to the player or players. These behave similarly to statuses applied from hero abilities.
 * @param duration The duration of the status in seconds. To have a status that lasts until a clear status action is executed. Provide an arbitrarily long duration such as 9999.
 */
export declare function setStatus(player: WSPlayer, assister: WSPlayer, status: WSStatus, duration: number): void;

/**
 * Sets the score for one or both teams. This action has no effect in free-for-all modes or modes without a team score.
 * @param team The team or teams whose score will be set.
 * @param score The score that will be set.
 */
export declare function setTeamScore(team: WSTeam, score: number): void;

/**
 * Enables or disables the ultimate ability of one or more players.
 * @param player The player or players whose access to their ultimate ability is affected.
 * @param enabled Specifies whether the player or players are able to use their ultimate ability. Expects a boolean value such as true. False, or compare.
 */
export declare function setUltimateAbilityEnabled(player: WSPlayer, enabled: boolean): void;

/**
 * Sets the ultimate charge for one or more players as a percentage of iaximum charge.
 * @param player The player or players whose ultimate charge will be set.
 * @param chargePercent The percentage of maximum charge.
 */
export declare function setUltimateCharge(player: WSPlayer, chargePercent: number): void;

/**
 * Skips execution of a certain number of actions in the action list.
 * @param numberOfActions The number of actions to skip, not including this action.
 */
export declare function skip(numberOfActions: number): void;

/**
 * Skips execution of a certain number of actions in the action list if this action's condition evaluates to true. If it does not, execution continues with the next action.
 * @param condition Specifies whether the skip occurs.
 * @param numberOfActions The number of actions to skip, not including this action.
 */
export declare function skipIf(condition: boolean, numberOfActions: number): void;

/**
 * Displays a small message beneath the reticle that is visible to specific players.
 * @param visibleTo One or more players who will see the message.
 * @param header The message to be displayed.
 */
export declare function smallMessage(visibleTo: WSPlayer, header: WSAny): void;

/**
 * Starts accelerating one or more players in a specified direction.
 * @param player The player or players that will begin accelerating.
 * @param direction The unit direction in which the acceleration will be applied. This value is normalized internally.
 * @param rate The rate of acceleration in meters per second squared. This value may need to be quite high in order to overcome gravity and/or surface friction.
 * @param maxSpeed The speed at which acceleration will stop for the player or players. It may not be possible to reach this speed due to gravity and/or surface friction.
 */
export declare function startAccelerating(player: WSPlayer, direction: WSDirection, rate: number, maxSpeed: number): void;

/**
 * Places your camera at a location, facing a direction.
 * @param player The player or players whose cameras will be placed at the location.
 * @param eyePosition The position of the camera. Reevaluates continuously.
 * @param lookAtPosition Where the camera looks at. Reevaluates continuously.
 * @param blendSpeed How fast to blend the camera speed as positions change. 0 means do not blend at all, and just change positions instantly.
 */
export declare function startCamera(player: WSPlayer, eyePosition: WSPosition, lookAtPosition: WSPosition, blendSpeed: number): void;

/**
 * Starts modifying how much damage one or more receivers will receive from one or more damagers. A reference to this damage aodification can be obtained from the last damage modification id value. This action will fail if too many damage modifications have been started.
 * @param receivers The player or players whose incoming damage will be modified (when attacked by the damagers).
 * @param damagers The player or players whose outgoing damage will be modified (when attacking the receivers).
 * @param damagePercent The percentage of damage that will apply to receivers when attacked by damagers.
 * @param reevaluation Specifies which of this action's inputs will be continuously reevaluated. This action will keep asking for and using new values from reevaluated inputs.
 */
export declare function startDamageModification(receivers: WSPlayer, damagers: WSPlayer, damagePercent: number, reevaluation: WSDamageModificationReevaluation): void;

/**
 * Starts an instance of damage over time. This dot will persist for the specified duration or until stopped by script. To obtain a reference ro this dot, use the last damage over time id value.
 * @param player One or more players who will receive the damage over time.
 * @param damager The player who will receive credit for the damage. A damager of null indicates no player will receive credit.
 * @param duration The duration of the damage over time in seconds. To have a dot thai lasts until stopped by script, provide an arbitrarily long duration such as 9999.
 * @param damagePerSecond The damage per second for the damage over time.
 */
export declare function startDamageOverTime(player: WSPlayer, damager: WSPlayer, duration: number, damagePerSecond: number): void;

/**
 * Starts turning one or more players to face the specified direction.
 * @param player The player or players who will start iurning.
 * @param direction The unit direction in which the player or players will eventually face. This value is normalized internally.
 * @param turnRate The turn rate in degrees per second.
 * @param relative Specifies whether direction is relative to world coordinates or the local coordinates of the player or players.
 */
export declare function startFacing(player: WSPlayer, direction: WSDirection, turnRate: number, relative: WSRelative): void;

/**
 * Starts forcing one or more players to be a specific hero and, if necessary, respawns them immediately in their current location. This will be the only hero available to the player or players until the top forcing player to be hero action is executed.
 * @param player The player or players who will be forced to be a specific hero.
 * @param hero The hero that the player or players will be forced to be.
 */
export declare function startForcingPlayerToBeHero(player: WSPlayer, hero: WSHero): void;

/**
 * Forces a team to spawn in a particular spawn room, regardless of the spawn room normally used by the game mode. This action only has an effect in assault, hybrid, and payload maps.
 * @param team The team whose spawn room will be forced.
 * @param room The number of the spawn room to be forced. O is the first spawn room, 1 the second. And 2 is the third. If the specified spawn room does not exist, players will use the normal spawn room.
 */
export declare function startForcingSpawnRoom(team: WSTeam, room: number): void;

/**
 * Defines minimum and maximum movement input values for one or more players, possibly forcing or preventing movement.
 * @param player The player or players whose movement will be forced or limited.
 * @param minForward Sets the minimum run forward amount. 0 allows the player or players to stop while 1 forces full forward movement.
 * @param maxForward Sets the maximum run forward amount. 0 prevents the player or players from moving forward while 1 allows full forward movement.
 * @param minBackward Sets the minimum run backward amount. 0 allows the player or players to stop while 1 forces full backward movement.
 * @param maxBackward Sets the maximum run backward amount. 0 prevents the player or players from moving backward while 1 allows full backward movement.
 * @param minSideways Sets the minimum run sideways amount. 0 allows the player or players to stop while 1 forces full sideways movement.
 * @param maxSideways Sets the maximum run sideways amount. 0 prevents the player or players from moving SIDEWAYS while 1 allows full sideways movement.
 */
export declare function startForcingThrottle(player: WSPlayer, minForward: number, maxForward: number, minBackward: number, maxBackward: number, minSideways: number, maxSideways: number): void;

/**
 * Starts an instance of heal over time. This hot will persist for the specified duration or until stopped by script. To obtain a reference to this hot, use the last heal over time id value.
 * @param player One or more players who will receive the heal over time.
 * @param healer The player who will receive credit for the healing. A healer of null indicates no player will receive credit.
 * @param duration The duration of the heal over time in seconds. To have a hot that lasts until stopped by script, provide an arbitrarily long duration such as 9999.
 * @param healingPerSecond The healing per second for the heal over time.
 */
export declare function startHealOverTime(player: WSPlayer, healer: WSPlayer, duration: number, healingPerSecond: number): void;

/**
 * Forces one or more players to hold a button virtually until stopped by the stop holding button action.
 * @param player The player or players who are holding a button virtually.
 * @param button The logical button that is being held virtually.
 */
export declare function startHoldingButton(player: WSPlayer, button: WSButton): void;

/**
 * Stops the acceleration started by the start accelerating action for one or more players.
 * @param player The player or players who will stop accelerating.
 */
export declare function stopAccelerating(player: WSPlayer): void;

/**
 * Stops all damage modifications that were started using the start damage modification action.
 */
export declare function stopAllDamageModifications(): void;

/**
 * Stops all damage over time started by start damage over time for one or more players.
 * @param player The player or players whose scripted damage over time will stop.
 */
export declare function stopAllDamageOverTime(player: WSPlayer): void;

/**
 * Stops all heal over time started by start heal over time for one or more players.
 * @param player The player or players whose scripted heal over time will stop.
 */
export declare function stopAllHealOverTime(player: WSPlayer): void;

/**
 * None
 * @param player The player or players whose cameras will be put back to the default view.
 */
export declare function stopCamera(player: WSPlayer): void;

/**
 * Stops an in-progress chase of a global variable, leaving it at its current value.
 * @param variable Specifies which global variable to stop modifying.
 */
export declare function stopChasingGlobalVariable(variable: WSVariable): void;

/**
 * Stops an in-progress chase of a player variable, leaving it at its current value.
 * @param player The player whose variable will stop changing. If multiple players ari provided, each of their variables will stop changing.
 * @param variable Specifies which of the player's variables to stop modifying.
 */
export declare function stopChasingPlayerVariable(player: WSPlayer, variable: WSVariable): void;

/**
 * Stops a damage modification that was started by the start damage modification action.
 * @param damageModification Specifies which damage modification instance to stop. This id may be last damage modification id or a variable into which last damage modification id was earlier stored.
 */
export declare function stopDamageModification(damageModification: number): void;

/**
 * Stops an instance of damage over time started by the start damage over time action.
 * @param damageOverTimeId Specifies which damage over time instance to stop. This id may be lasi damage over time id or a variable into which last damage over time id was earlier stored.
 */
export declare function stopDamageOverTime(damageOverTimeId: number): void;

/**
 * Stops the turning started by the start facing action for one or more players.
 * @param player The player or players who will stop wrning.
 */
export declare function stopFacing(player: WSPlayer): void;

/**
 * - stops forcing one or more players to be a specific hero. This will not respawn the player or players, but it will restore their hero availability the next time they go to select a hero.
 * @param player The player or players who will no longer be forced to be a specific hero.
 */
export declare function stopForcingPlayerToBeHero(player: WSPlayer): void;

/**
 * Undoes the effect of the start forcing spawn room action for the specified team.
 * @param team The team that will resume using their normal spawn room.
 */
export declare function stopForcingSpawnRoom(team: WSTeam): void;

/**
 * Undoes the effect of the start forcing throttle action for one or more players.
 * @param player The player or players whose movement input will be restored.
 */
export declare function stopForcingThrottle(player: WSPlayer): void;

/**
 * Stops an instance of heal over time started by the start heal over time action.
 * @param healOverTimeId Specifies which heal over time instance to stop. This id may be last heal over time id or a variable into which last heal over time id was earlier stored.
 */
export declare function stopHealOverTime(healOverTimeId: number): void;

/**
 * Undoes the effect of the start holding button action for one or more players.
 * @param player The player or players who are no longer holding a button virtually.
 * @param button The logical button that is no longer being held virtually.
 */
export declare function stopHoldingButton(player: WSPlayer, button: WSButton): void;

/**
 * Teleports one or more players to the specified position.
 * @param player The player or players to teleport.
 * @param position The position to which the player or players will teleport. If a player is provided, the position of the player is used.
 */
export declare function teleport(player: WSPlayer, position: WSPosition): void;

/**
 * Unpauses the match time.
 */
export declare function unpauseMatchTime(): void;

/**
 * Pauses the execution of the action list. Unless the wait is interrupted, he remainder of the actions will execute after the pause.
 * @param time The duration of the pause.
 * @param waitBehavior Specifies if and how the wait can be interrupted. If the condition list is ignored. The wait will not be interrupted. Otherwise. The condition list will determine if and when the action list will abort or restart.
 */
export declare function wait(time: number, waitBehavior: WSWaitBehavior): void;

/**
 * The absolute value of the specified value.
 * @param value The real number value whose absolute value will be computed.
 */
export declare function absoluteValue(value: number): number;

/**
 * The sum of two numbers or vectors.
 * @param value The left-hand operand. May be any value that results in a number or a vector.
 * @param value2 The right-hand operand. May be any value that results in a number or a vector.
 */
export declare function add(value: number, value2: number): WSBase;

/**
 * An array containing all dead players on a team or in the match.
 * @param team The team or teams from which players may come.
 */
export declare function allDeadPlayers(team: WSTeam): WSPlayer;

/**
 * The array of all heroes in overwatch.
 */
export declare var allHeroes: WSHero;

/**
 * An array containing all living players on a team or in the match.
 * @param team The team or teams from which players may come.
 */
export declare function allLivingPlayers(team: WSTeam): WSPlayer;

/**
 * An array containing all players on a team or in the match.
 * @param team The team or teams from which players may come.
 */
export declare function allPlayers(team: WSTeam): WSPlayer;

/**
 * An array containing all players occupying neither a payload nor a control point (either on a team or in the match).
 * @param team The team or teams from which players may come.
 */
export declare function allPlayersNotOnObjective(team: WSTeam): WSPlayer;

/**
 * An array containing all players occupying a payload or control point (either on a team or in the match).
 * @param team The team or teams from which players may come.
 */
export declare function allPlayersOnObjective(team: WSTeam): WSPlayer;

/**
 * The array of heroes from which the specified player is currently allowed to select.
 * @param player The player whose auowed heroes to acquire.
 */
export declare function allowedHeroes(player: WSPlayer): WSHero;

/**
 * The player's current height in meters above a surface. Results in o whenever the player is on a surface.
 * @param player The player whose altitude to acquire.
 */
export declare function altitudeOf(player: WSPlayer): number;

/**
 * Whether both of the two inputs are true (or equivalent to true).
 * @param value One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.
 * @param value2 One of the two inputs considered. If both are true (or equivalent to true), then the and value is true.
 */
export declare function and(value: boolean, value2: boolean): boolean;

/**
 * The difference in degrees between two angles. After the angles are wrapped to be within +/- 180 of each other, the result is positive if the second angle is greater than the first angle. Otherwise, the result is zero or negative.
 * @param angle One of the two angles between which to measure the resulting anole.
 * @param angle2 One of the two angles between which to measure the resulting anole.
 */
export declare function angleDifference(angle: number, angle2: number): number;

/**
 * A copy of an array with one or more values appended to the end.
 * @param array The array to which to append.
 * @param value The value to append to the end of the array. If this value is itself an array. Each element is appended.
 */
export declare function appendToArray(array: WSAny, value: WSAny): WSBase;

/**
 * A copy of the specified array containing only values from a specified index range.
 * @param array The array from which to make a copy.
 * @param startIndex The first index of the range.
 * @param count The number of elements in the resulting array. The resulting array wu contain fewer elements if the specified range exceeds the bounds of the array.
 */
export declare function arraySlice(array: WSAny, startIndex: number, count: number): WSBase;

/**
 * The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player.
 */
export declare var attacker: WSPlayer;

/**
 * Shorthand for the directional vector(0, 0, -1), which points backward.
 */
export declare var backward: WSDirection;

/**
 * The player closest to a position, optionally restricted by team.
 * @param center The position from which to measure proximity.
 * @param team The team or teams from which the closest player will come.
 */
export declare function closestPlayerTo(center: WSPosition, team: WSTeam): WSPlayer;

/**
 * Whether the comparison of the two inputs is true.
 * @param value The left-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.
 * @param comparison 
 * @param value2 The right-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected.
 */
export declare function compare(value: WSAny, comparison: WSCompareOperator, value2: WSAny): boolean;

/**
 * The score percentage for the specified team in control mode.
 * @param team The team whose score percentage to acquire.
 */
export declare function controlModeScoringPercentage(team: WSTeam): number;

/**
 * The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score.
 */
export declare var controlModeScoringTeam: WSTeam;

/**
 * Cosine of the specified angle in degrees.
 * @param angle Angle in degrees.
 */
export declare function cosineFromDegrees(angle: number): number;

/**
 * Cosine of the specified angle in radians.
 * @param angle Angle in radians.
 */
export declare function cosineFromRadians(angle: number): number;

/**
 * The number of elements in the specified array.
 * @param array The array whose elements will be counted.
 */
export declare function countOf(array: WSAny): number;

/**
 * The cross product of the specified values. (left cross up equals forward.)
 * @param value The left-hand-side vector operand of the cross product.
 * @param value2 The right-hand-side vector operand of the cross product.
 */
export declare function crossProduct(value: WSPosition, value2: WSPosition): WSPosition;

/**
 * The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array.
 */
export declare var currentArrayElement: WSBase;

/**
 * The unit-length direction vector corresponding to the specified angles.
 * @param horizontalAngle The horizontal angle in degrees used to construct the resulting vector.
 * @param verticalAngle The vertical angle in degrees used to construct the resulting vector.
 */
export declare function directionFromAngles(horizontalAngle: number, verticalAngle: number): WSPosition;

/**
 * The unit-length direction vector from one position to another.
 * @param startPos The position from which the resulting direction vector will point.
 * @param endPos The position to which the resulting direction vector will point.
 */
export declare function directionTowards(startPos: WSPosition, endPos: WSPosition): WSDirection;

/**
 * The distance between two positions in meters.
 * @param startPos One of the two positions used in the distance measurement.
 * @param endPos One of the two positions used in the distance measurement.
 */
export declare function distanceBetween(startPos: WSPosition, endPos: WSPosition): number;

/**
 * The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.
 * @param value The left-hand operand. May be any value that results in a number or a vector.
 * @param value2 The right-hand operand. May be any value that results in a number or a vector.
 */
export declare function divide(value: number, value2: number): WSBase;

/**
 * The dot product of the specified values.
 * @param value One of mo vector operands of the dot product.
 * @param value2 One of mo vector operands of the dot product.
 */
export declare function dotProduct(value: WSPosition, value2: WSPosition): number;

/**
 * Shorthand for the directional vector(0, -1 , 0), which points downward.
 */
export declare var down: WSDirection;

/**
 * An array with no elements.
 */
export declare var emptyArray: WSBase;

/**
 * Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed.
 * @param entity The player, icon entity, or effect entity whose existence to check.
 */
export declare function entityExists(entity: WSPlayer): boolean;

/**
 * The amount of damage received by the victim for the event currently being processed by this rule.
 */
export declare var eventDamage: number;

/**
 * The player executing this rule, as specified by the event. May be the same as the attacker or victim.
 */
export declare var eventPlayer: WSPlayer;

/**
 * Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule.
 */
export declare var eventWasCriticalHit: boolean;

/**
 * The position of a player's first person view (used for aiming)
 * @param player The position of a player's first person view (used for aiming)
 */
export declare function eyePosition(player: WSPlayer): WSPosition;

/**
 * The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing.
 * @param player The player whose facing direction to acquire.
 */
export declare function facingDirectionOf(player: WSPlayer): WSDirection;

/**
 * The player farthest from a position, optionally restricted by team.
 * @param center The position from which to measure distance.
 * @param team The team or teams from which the farthest player will come.
 */
export declare function farthestPlayerFrom(center: WSPosition, team: WSTeam): WSPlayer;

/**
 * A copy of the specified array with any values that do not match the specified condition removed.
 * @param array The array whose copy will be filtered.
 * @param condition The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered.
 */
export declare function filteredArray(array: WSAny, condition: boolean): WSBase;

/**
 * The value at the start of the specified array. Results in o if the specified array is empty.
 * @param array The array from which the value is acquired.
 */
export declare function firstOf(array: WSAny): WSBase;

/**
 * The position of a specific team's flag in capture the flag.
 * @param team The team whose flag position to acquire.
 */
export declare function flagPosition(team: WSTeam): WSPosition;

/**
 * Shorthand for the directional vector(0, 0, 1), which points forward.
 */
export declare var forward: WSDirection;

/**
 * The current value of a global variable, which is a variable that belongs to the game itself.
 * @param variable The variable whose value to acquire.
 */
export declare function globalVariable(variable: WSVariable): WSBase;

/**
 * Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet.
 * @param entity The player, icon entity, or effect entity whose presence in world to check.
 */
export declare function hasSpawned(entity: WSPlayer): boolean;

/**
 * Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic.
 * @param player The player whose status to check.
 * @param status The status to check for.
 */
export declare function hasStatus(player: WSPlayer, status: WSStatus): boolean;

/**
 * The current health of a player, including armor and shields.
 * @param player The player whose health to acquire.
 */
export declare function health(player: WSPlayer): number;

/**
 * The current health of a player as a percentage of their max health, including armor and shields.
 * @param player The player whose health percentage to acquire.
 */
export declare function healthPercent(player: WSPlayer): number;

/**
 * A hero constant.
 * @param hero A hero constant.
 */
export declare function hero(hero: WSHeroConstant): WSHero;

/**
 * Converts a hero parameter into a string that shows up as an icon.
 * @param value The hero that will be converted to an icon.
 */
export declare function heroIconString(value: WSHero): WSAny;

/**
 * The current hero of a player.
 * @param player The player whose hero ro acquire.
 */
export declare function heroOf(player: WSPlayer): WSHero;

/**
 * The horizontal angle in degrees corresponding to the specified direction vector.
 * @param direction The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins.
 */
export declare function horizontalAngleFromDirection(direction: WSDirection): number;

/**
 * The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative.
 * @param player The player from whose current facing the angle begins.
 * @param position The position in the world where the angle ends.
 */
export declare function horizontalAngleTowards(player: WSPlayer, position: WSPosition): number;

/**
 * The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 1 80).
 * @param player The player whose horizontal facing angle to acquire.
 */
export declare function horizontalFacingAngleOf(player: WSPlayer): number;

/**
 * The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion.
 * @param player The player whose horizontal speed to acquire.
 */
export declare function horizontalSpeedOf(player: WSPlayer): number;

/**
 * The index of a value within an array or -1 if no such value can be found.
 * @param array The array in which to search for the specified value.
 * @param value The value for which to search.
 */
export declare function indexOfArrayValue(array: WSAny, value: number): WSBase;

/**
 * Whether a player is alive.
 * @param player The player whose life to check.
 */
export declare function isAlive(player: WSPlayer): boolean;

/**
 * Whether the match is currently in its assemble heroes phase.
 */
export declare var isAssemblingHeroes: boolean;

/**
 * Whether the match is between rounds.
 */
export declare var isBetweenRounds: boolean;

/**
 * Whether a player is holding a specific button.
 * @param player The player whose button to check.
 * @param button The button to check.
 */
export declare function isButtonHeld(player: WSPlayer, button: WSButton): boolean;

/**
 * Whether a player is using a specific communication type (such as emoting, using a voice line, etc. ).
 * @param player The player whose communication status to check.
 * @param type The type of communication to consider. The duration of emotes is exact. The duration of voice lines is assumed to be 4 seconds. And all other durations are assumed to be 2 seconds.
 */
export declare function isCommunicating(player: WSPlayer, type: WSCommunicate): boolean;

/**
 * Whether a player is using any communication type (such as emoting, using a voice line, etc. ).
 * @param player The player whose communication status to check.
 */
export declare function isCommunicatingAny(player: WSPlayer): boolean;

/**
 * Whether a player is using an emote.
 * @param player The player whose emoting status to check.
 */
export declare function isCommunicatingAnyEmote(player: WSPlayer): boolean;

/**
 * Whether a player is using a voice line. (the duration of voice lines is assumed to be 4 seconds.)
 * @param player The player whose voice line status to check.
 */
export declare function isCommunicatingAnyVoiceLine(player: WSPlayer): boolean;

/**
 * Whether the point is locked in control mode.
 */
export declare var isControlModePointLocked: boolean;

/**
 * Whether a player is crouching.
 * @param player The player whose crouching status to check.
 */
export declare function isCrouching(player: WSPlayer): boolean;

/**
 * Whether the current game of capture the flag is in sudden death.
 */
export declare var isCtfModeInSuddenDeath: boolean;

/**
 * Whether a player is dead.
 * @param player The player whose death to check.
 */
export declare function isDead(player: WSPlayer): boolean;

/**
 * Whether the specified player's primary weapon attack is being used.
 * @param player The player whose primary weapon attack usage to check.
 */
export declare function isFiringPrimary(player: WSPlayer): boolean;

/**
 * Whether the specified player's secondary weapon attack is being used.
 * @param player The player whose secondary weapon attack usage to check.
 */
export declare function isFiringSecondary(player: WSPlayer): boolean;

/**
 * Whether a specific team's flag is at its base in capture the flag.
 * @param team The team whose flag to check.
 */
export declare function isFlagAtBase(team: WSTeam): boolean;

/**
 * Whether a specific team's flag is being carried by a member of the opposing team in capture the flag.
 * @param team The team whose flag to check.
 */
export declare function isFlagBeingCarried(team: WSTeam): boolean;

/**
 * Whether the main phase of the match is in progress (during which time combat and scoring are allowed).
 */
export declare var isGameInProgress: boolean;

/**
 * Whether a specific hero is being played (either on a team or in the match).
 * @param hero The hero to check for play.
 * @param team The team or teams on which to check for the hero being played.
 */
export declare function isHeroBeingPlayed(hero: WSHero, team: WSTeam): boolean;

/**
 * Whether a player is airborne.
 * @param player The player whose airborne status to check.
 */
export declare function isInAir(player: WSPlayer): boolean;

/**
 * Whether two positions have line of sight with each other.
 * @param startPos The start position for the lineof-sight check. If a player is provided, a position 2 meters above the player's feet is used.
 * @param endPos The end position for the line-of-sight check. If a player is provided. A position 2 meters above the player's feet is used.
 * @param barriers Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used.
 */
export declare function isInLineOfSight(startPos: WSPosition, endPos: WSPosition, barriers: WSBarriersLos): boolean;

/**
 * Whether the match is currently in its setup phase.
 */
export declare var isInSetup: boolean;

/**
 * Whether a specific player is in the spawn room (and is thus being healed and able to change heroes).
 * @param player The player whose spawn room status to check.
 */
export declare function isInSpawnRoom(player: WSPlayer): boolean;

/**
 * Whether a location is within view of a player.
 * @param player The player whose view to use for n-le check.
 * @param location The location to test if it's within view.
 * @param viewAngle The view angle to compare against in degrees.
 */
export declare function isInViewAngle(player: WSPlayer, location: WSPosition, viewAngle: number): boolean;

/**
 * Whether the match has finished.
 */
export declare var isMatchComplete: boolean;

/**
 * Whether a player is moving (defined as having a nonzero current speed).
 * @param player The player whose moving status to check.
 */
export declare function isMoving(player: WSPlayer): boolean;

/**
 * Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or assault/escort.
 * @param number The index of the objective to consider. Starting at o and counting up. Each control point. Payload checkpoint, and payload destination has its own index.
 */
export declare function isObjectiveComplete(number: number): boolean;

/**
 * Whether a player is on the ground (or other walkable surface).
 * @param player The player whose ground status to check.
 */
export declare function isOnGround(player: WSPlayer): boolean;

/**
 * Whether a specific player is currently occupying a payload or capture point.
 * @param player The player whose objective status to check.
 */
export declare function isOnObjective(player: WSPlayer): boolean;

/**
 * Whether a player is on a wall (climbing or riding).
 * @param player The player whose wall status to check.
 */
export declare function isOnWall(player: WSPlayer): boolean;

/**
 * Whether a specific player's portrait is on fire.
 * @param player The player whose portrait to check.
 */
export declare function isPortraitOnFire(player: WSPlayer): boolean;

/**
 * Whether a player is standing (defined as both not moving and not in the air).
 * @param player The player whose standing status to check.
 */
export declare function isStanding(player: WSPlayer): boolean;

/**
 * Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or assault/escort.
 * @param team The team whose role to check.
 */
export declare function isTeamOnDefense(team: WSTeam): boolean;

/**
 * Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or assault/escort.
 * @param team The team whose role to check.
 */
export declare function isTeamOnOffense(team: WSTeam): boolean;

/**
 * Whether the specified condition evaluates to true for every value in the specified array.
 * @param array The array whose values will be considered.
 * @param condition The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.
 */
export declare function isTrueForAll(array: WSAny, condition: boolean): WSBase;

/**
 * Whether the specified condition evaluates to true for any value in the specified array.
 * @param array The array whose values will be considered.
 * @param condition The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered.
 */
export declare function isTrueForAny(array: WSAny, condition: boolean): WSBase;

/**
 * Whether the specified player is using ability 1.
 * @param player The player whose ability 1 usage to check.
 */
export declare function isUsingAbility1(player: WSPlayer): boolean;

/**
 * Whether the specified player is using ability 2.
 * @param player The player whose ability 2 usage to check.
 */
export declare function isUsingAbility2(player: WSPlayer): boolean;

/**
 * Whether a player is using an ultimate ability.
 * @param player The player whose ultimate ability usage to check.
 */
export declare function isUsingUltimate(player: WSPlayer): WSBase;

/**
 * Whether the match is waiting for players to join before starting.
 */
export declare var isWaitingForPlayers: boolean;

/**
 * A reference to the last effect or icon entity created by the event player (or created at the global level).
 */
export declare var lastCreatedEntity: WSPlayer;

/**
 * An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level).
 */
export declare var lastDamageModificationId: number;

/**
 * An id representing the most recent damage over time action that was executed by the event player (or executed at the global level).
 */
export declare var lastDamageOverTimeId: number;

/**
 * An id representing the most recent heal over time action that was executed by the event player (or executed at the global level).
 */
export declare var lastHealOverTimeId: number;

/**
 * The value at the end of the specified array. Results in o if the specified array is empty.
 * @param array The array from which the value is acquired.
 */
export declare function lastOf(array: WSAny): WSBase;

/**
 * A reference to the last piece of text created by the event player (or created at the global level) via the create hud text or create in- world text action.
 */
export declare var lastTextId: number;

/**
 * Shorthand for the directional vector(1, 0, 0), which points to the left.
 */
export declare var left: WSDirection;

/**
 * The vector in local coordinates corresponding to the provided vector in world coordinates.
 * @param worldVector The vector in world coordinates that will be converted to local coordinates.
 * @param relativePlayer The player to whom the resulting vector will be relative.
 * @param transformation Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).
 */
export declare function localVectorOf(worldVector: WSPosition, relativePlayer: WSPlayer, transformation: WSTransformation): WSPosition;

/**
 * The current round of the match, counting up from 1
 */
export declare var matchRound: number;

/**
 * The amount of time in seconds remaining in the current game mode phase.
 */
export declare var matchTime: number;

/**
 * The greater of two numbers.
 * @param value The left-hand operand. May be any value that results in a number.
 * @param value2 The right-hand operand. May be any value that results in a number.
 */
export declare function max(value: number, value2: number): number;

/**
 * The max health of a player, including armor and shields.
 * @param player The player whose max health to acquire.
 */
export declare function maxHealth(player: WSPlayer): number;

/**
 * The lesser of two numbers.
 * @param value The left-hand operand. May be any value that results in a number.
 * @param value2 The right-hand operand. May be any value that results in a number.
 */
export declare function min(value: number, value2: number): number;

/**
 * The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.
 * @param value The left-hand operand. May be any value that results in a number.
 * @param value2 The right-hand operand. May be any value that results in a number.
 */
export declare function modulo(value: number, value2: number): number;

/**
 * The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.
 * @param value The left-hand operand. May be any value that results in a number or a vector.
 * @param value2 The right-hand operand. May be any value that results in a number or a vector.
 */
export declare function multiply(value: number, value2: number): WSBase;

/**
 * The position closest to the specified position that can be stood on and is accessible from a spawn point.
 * @param position The position from which to search for the nearest walkable position.
 */
export declare function nearestWalkablePosition(position: WSPosition): WSPosition;

/**
 * The unit-length normalization of a vector.
 * @param vector The vector to normalize.
 */
export declare function normalize(vector: WSPosition): WSPosition;

/**
 * Whether the input is false (or equivalent to false).
 * @param value When this input is false (or equivalent to false). Then the not value is true. Otherwise. The not value is false.
 */
export declare function not(value: boolean): boolean;

/**
 * The number of dead players on a team or in the match.
 * @param team The team or teams on which to count players.
 */
export declare function numberOfDeadPlayers(team: WSTeam): number;

/**
 * The number of deaths a specific player has earned. This value only accumulates while a game is in progress.
 * @param player The player whose death count to acquire.
 */
export declare function numberOfDeaths(player: WSPlayer): number;

/**
 * The number of eliminations a specific player has earned. This value only accumulates while a game is in progress.
 * @param player The player whose elimination count to acquire.
 */
export declare function numberOfEliminations(player: WSPlayer): number;

/**
 * The number of final blows a specific player has earned. This value only accumulates while a game is in progress.
 * @param player The player whose final blow count to acquire.
 */
export declare function numberOfFinalBlows(player: WSPlayer): number;

/**
 * The number of players playing a specific hero on a team or in the match.
 * @param hero The hero to check for play.
 * @param team The team or teams on which to check for the hero being played.
 */
export declare function numberOfHeroes(hero: WSHero, team: WSTeam): number;

/**
 * The number of living players on a team or in the match.
 * @param team The team or teams on which to count players.
 */
export declare function numberOfLivingPlayers(team: WSTeam): number;

/**
 * The number of players on a team or in the match.
 * @param team The team or teams on which to count players.
 */
export declare function numberOfPlayers(team: WSTeam): number;

/**
 * The number of players occupying a payload or control point (either on a team or in the match).
 * @param team The team or teams on which to count players.
 */
export declare function numberOfPlayersOnObjective(team: WSTeam): number;

/**
 * The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, assault/escort, escort, and control.
 */
export declare var objectiveIndex: number;

/**
 * The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, assault/escort, escort, and control.
 * @param number The index of the objective to consider. Starting at 0 and counting up. Each control point. Payload checkpoint, and payload destination has its own index.
 */
export declare function objectivePosition(number: number): WSPosition;

/**
 * The team opposite the specified team.
 * @param team The team whose opposite to acquire. If all, the result will be all.
 */
export declare function oppositeTeamOf(team: WSTeam): WSTeam;

/**
 * Whether either of the two inputs are true (or equivalent to true).
 * @param value One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.
 * @param value2 One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true.
 */
export declare function or(value: boolean, value2: boolean): boolean;

/**
 * The position in the world of the active payload.
 */
export declare var payloadPosition: WSPosition;

/**
 * The current progress towards the destination for the active payload (expressed as a percentage).
 */
export declare var payloadProgressPercentage: number;

/**
 * The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag.
 * @param team The team whose flag to check.
 */
export declare function playerCarryingFlag(team: WSTeam): WSPlayer;

/**
 * The player closest to the reticle of the specified player, optionally restricted by team.
 * @param player The player from whose reticle to search for the closest player.
 * @param team The team or teams on which to search for the closest player.
 */
export declare function playerClosestToReticle(player: WSPlayer, team: WSTeam): WSBase;

/**
 * The current value of a player variable, which is a variable that belongs to a specific player.
 * @param player The player whose variable value to acquire.
 * @param variable The variable whose value to acquire.
 */
export declare function playerVariable(player: WSPlayer, variable: WSVariable): WSBase;

/**
 * The player or array of players who occupy a specific slot in the game.
 * @param slot The slot number from which to acquire a player or players. In team games. Each team has slots o through 5. In free-for-au games. Slots are numbered o through 1 1.
 * @param team The team or teams from which to acquire a player or players.
 */
export declare function playersInSlot(slot: number, team: WSTeam): WSPlayer;

/**
 * The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.
 * @param player The player whose view to use for ne check.
 * @param team The team or teams on which to consider players.
 * @param viewAngle The view angle to compare against in degrees.
 */
export declare function playersInViewAngle(player: WSPlayer, team: WSTeam, viewAngle: number): WSBase;

/**
 * The array of players playing a specific hero on a team or in the match.
 * @param hero The hero to check for play.
 * @param team The team or teams on which to check for the hero being played.
 */
export declare function playersOnHero(hero: WSHero, team: WSTeam): WSPlayer;

/**
 * An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.
 * @param center The center position from which to measure distance.
 * @param radius The radius in meters inside which players must be in order to be included in the resulting array.
 * @param team The team or teams to which a player must belong to be included in the resulting array.
 * @param losCheck Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array.
 */
export declare function playersWithinRadius(center: WSPosition, radius: number, team: WSTeam, losCheck: WSLosCheck): WSPlayer;

/**
 * The current progress towards capture for the active control point (expressed as a percentage).
 */
export declare var pointCapturePercentage: number;

/**
 * The current position of a player as a vector.
 * @param player The player whose position to acquire.
 */
export declare function positionOf(player: WSPlayer): WSPosition;

/**
 * The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative, the result is always zero.
 * @param value The left-hand operand. May be any value that results in a number.
 * @param value2 The right-hand operand. May be any value that results in a number.
 */
export declare function raiseToPower(value: number, value2: number): number;

/**
 * A random integer between the specified min and max, inclusive.
 * @param min The smallest integer allowed. If a real number is provided to this input. It is rounded to the nearest integer.
 * @param max The largest integer allowed. If a real number is provided to this input. It is rounded to the nearest integer.
 */
export declare function randomInteger(min: number, max: number): number;

/**
 * A random real number between the specified min and max.
 * @param min The smallest real number allowed.
 * @param max The largest real number allowed.
 */
export declare function randomReal(min: number, max: number): number;

/**
 * A random value from the specified array.
 * @param array The array from which to randomly take a value. If a non-array value is provided. The result is simply the provided value.
 */
export declare function randomValueInArray(array: WSAny): WSBase;

/**
 * A copy of the specified array with the values in a random order.
 * @param array The array whose copy will be randomized.
 */
export declare function randomizedArray(array: WSAny): WSBase;

/**
 * The surface normal at the ray cast hit position (or from end pos to start pos if no hit occurs).
 * @param startPos The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
 * @param endPos The end position for the ray cast. If a player is provided. A position 2 meters above the player's feet is used.
 * @param playersToInclude Which players can be hit by this ray cast.
 * @param playersToExclude Which players cannot be hit by this ray cast. This list takes precedence over players to include.
 * @param includePlayerOwnedObjects Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.
 */
export declare function rayCastHitNormal(startPos: WSPosition, endPos: WSPosition, playersToInclude: WSPlayer, playersToExclude: WSPlayer, includePlayerOwnedObjects: boolean): WSAny;

/**
 * The player hit by the ray cast (or null if no player is hit).
 * @param startPos The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
 * @param endPos The end position for the ray cast. If a player is provided. A position 2 meters above the player's feet is used.
 * @param playersToInclude Which players can be hit by this ray cast.
 * @param playersToExclude Which players cannot be hit by this ray cast. This list takes precedence over players to include.
 * @param includePlayerOwnedObjects Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.
 */
export declare function rayCastHitPlayer(startPos: WSPosition, endPos: WSPosition, playersToInclude: WSPlayer, playersToExclude: WSPlayer, includePlayerOwnedObjects: boolean): WSPlayer;

/**
 * The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs).
 * @param startPos The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used.
 * @param endPos The end position for the ray cast. If a player is provided. A position 2 meters above the player's feet is used.
 * @param playersToInclude Which players can be hit by this ray cast.
 * @param playersToExclude Which players cannot be hit by this ray cast. This list takes precedence over players to include.
 * @param includePlayerOwnedObjects Whether player-owned objects (such as barriers or turrets) should be included in the ray cast.
 */
export declare function rayCastHitPosition(startPos: WSPosition, endPos: WSPosition, playersToInclude: WSPlayer, playersToExclude: WSPlayer, includePlayerOwnedObjects: boolean): WSPlayer;

/**
 * A copy of an array with one or more values removed (if found).
 * @param array The array from which to remove values.
 * @param value The value to remove from the array (if found). If this value is itself an array. Each matching element is removed.
 */
export declare function removeFromArray(array: WSAny, value: WSAny): WSBase;

/**
 * Shorthand for the directional vector(-1 , 0, 0), which points to the right.
 */
export declare var right: WSDirection;

/**
 * The integer to which the specified value rounds.
 * @param value The real number to round.
 * @param roundingType Determines the direction in which the value will be rounded.
 */
export declare function roundToInteger(value: number, roundingType: WSRoundingType): number;

/**
 * The current score of a player. Results in o if the game mode is not free-for-all.
 * @param player The player whose score to acquire.
 */
export declare function scoreOf(player: WSPlayer): number;

/**
 * Sine of the specified angle in degrees.
 * @param angle Angle in degrees.
 */
export declare function sineFromDegrees(angle: number): number;

/**
 * Sine of the specified angle in radians.
 * @param angle Angle in radians.
 */
export declare function sineFromRadians(angle: number): number;

/**
 * The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11
 * @param player The player whose slot number to acquire.
 */
export declare function slotOf(player: WSPlayer): number;

/**
 * A copy of the specified array with the values sorted according to the value rank that is evaluated for each element.
 * @param array The array whose copy will be sorted.
 * @param valueRank The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered.
 */
export declare function sortedArray(array: WSAny, valueRank: number): WSBase;

/**
 * The current speed of a player in meters per second.
 * @param player The player whose speed to acquire.
 */
export declare function speedOf(player: WSPlayer): number;

/**
 * The current speed of a player in a specific direction in meters per second.
 * @param player The player whose speed to acquire.
 * @param direction The direction of travel in which to measure the player's speed.
 */
export declare function speedOfInDirection(player: WSPlayer, direction: WSDirection): number;

/**
 * The square root of the specified value.
 * @param value The real number value whose square root will be computed. Negative values result in zero.
 */
export declare function squareRoot(value: number): number;

/**
 * Text formed from a selection of strings and specified values.
 * @param string 
 * @param arg0 The value that will be converted to text and used to replace
 * @param arg1 The value that will be converted to text and used to replace
 * @param arg2 The value that will be converted to text and used to replace
 */
export declare function stringFormat(string: WSStringConstant, arg0: WSAny, arg1: WSAny, arg2: WSAny): WSAny;

/**
 * The difference between two numbers or vectors.
 * @param value The left-hand operand. May be any value that results in a number or a vector.
 * @param value2 The right-hand operand. May be any value that results in a number or a vector.
 */
export declare function subtract(value: number, value2: number): WSBase;

/**
 * A team constant. The all option represents both teams in a team game or all players in a free-for-all game.
 * @param team A team constant. The all option represents both teams in a team game or all players in a free-for-all game.
 */
export declare function team(team: WSTeamConstant): WSTeam;

/**
 * The team of a player. If the game mode is free-for-all, the team is considered to be all.
 * @param player The player whose team to acquire.
 */
export declare function teamOf(player: WSPlayer): WSTeam;

/**
 * The current score for the specified team. Results in 0 in free-for-all game modes.
 * @param team The team whose score to acquire.
 */
export declare function teamScore(team: WSTeam): number;

/**
 * The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward).
 * @param player The player whose directional input to acquire.
 */
export declare function throttleOf(player: WSPlayer): WSPosition;

/**
 * The total time in seconds that have elapsed since the game instance was created (including setup time and transitions).
 */
export declare var totalTimeElapsed: number;

/**
 * The current ultimate ability charge percentage of a player.
 * @param player The player whose ultimate charge percentage to acquire.
 */
export declare function ultimateChargePercent(player: WSPlayer): number;

/**
 * Shorthand for the directional vector(0, l, 0), which points upward.
 */
export declare var up: WSDirection;

/**
 * The value found at a specific element of an array. Results in o if the element does not exist.
 * @param array The array whose element to acquire.
 * @param index The index of the element to acquire.
 */
export declare function valueInArray(array: WSAny, index: number): WSBase;

/**
 * A vector composed of three real numbers (x, y, z) where x is left, y is up, and z is forward. Vectors are used for position, direction, and velocity.
 * @param x The x value of the vector.
 * @param y The y value of the vector.
 * @param z The z value of the vector.
 */
export declare function vector(x: number, y: number, z: number): WSPosition;

/**
 * The displacement vector from one position to another.
 * @param startPos The position from which the resulting displacement vector begins.
 * @param endPos The position at which the resulting displacement vector ends.
 */
export declare function vectorTowards(startPos: WSPosition, endPos: WSPosition): WSDirection;

/**
 * The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be o, even when traveling up or down a slope.
 * @param player The player whose velocity to acquire.
 */
export declare function velocityOf(player: WSPlayer): WSAny;

/**
 * The vertical angle in degrees corresponding to the specified direction vector.
 * @param direction The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins.
 */
export declare function verticalAngleFromDirection(direction: WSDirection): number;

/**
 * The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative.
 * @param player The player from whose current facing the angle begins.
 * @param position The position in the world where the angle ends.
 */
export declare function verticalAngleTowards(player: WSPlayer, position: WSPosition): number;

/**
 * The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down.
 * @param player The player whose vertical facing angle to acquire.
 */
export declare function verticalFacingAngleOf(player: WSPlayer): number;

/**
 * The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes.
 * @param player The player whose vertical speed to acquire.
 */
export declare function verticalSpeedOf(player: WSPlayer): number;

/**
 * The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player.
 */
export declare var victim: WSPlayer;

/**
 * The vector in world coordinates corresponding to the provided vector in local coordinates.
 * @param localVector The vector in local coordinates that will be converted to world coordinates.
 * @param relativePlayer The player to whom the local vector is relative.
 * @param transformation Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities).
 */
export declare function worldVectorOf(localVector: WSPosition, relativePlayer: WSPlayer, transformation: WSTransformation): WSPosition;

/**
 * The x component of the specified vector, usually representing a leftward amount.
 * @param value The vector from which to acquire the x component.
 */
export declare function xComponentOf(value: WSPosition): number;

/**
 * The y component of the specified vector, usually representing an upward amount.
 * @param value The vector from which to acquire the y component.
 */
export declare function yComponentOf(value: WSPosition): number;

/**
 * The z component of the specified vector, usually representing a forward amount.
 * @param value The vector from which to acquire the z component.
 */
export declare function zComponentOf(value: WSPosition): number;

export declare enum WSTransformation {
    Rotation = "ROTATION",
    RotationAndTranslation = "ROTATION AND TRANSLATION"
}

export declare enum WSInvisibleTo {
    All = "ALL",
    Enemies = "ENEMIES",
    None = "NONE"
}

export declare enum WSColor {
    Blue = "BLUE",
    Green = "GREEN",
    Purple = "PURPLE",
    Red = "RED",
    Team1 = "TEAM 1",
    Team2 = "TEAM 2",
    White = "WHITE",
    Yellow = "YELLOW"
}

export declare enum WSButton {
    Ability1 = "ABILITY 1",
    Ability2 = "ABILITY 2",
    Crouch = "CROUCH",
    Interact = "INTERACT",
    Jump = "JUMP",
    PrimaryFire = "PRIMARY FIRE",
    SecondaryFire = "SECONDARY FIRE",
    Ultimate = "ULTIMATE"
}

export declare enum WSOperation {
    Add = "ADD",
    AppendToArray = "APPEND TO ARRAY",
    Divide = "DIVIDE",
    Max = "MAX",
    Min = "MIN",
    Modulo = "MODULO",
    Multiply = "MULTIPLY",
    RaiseToPower = "RAISE TO POWER",
    RemoveFromArrayByIndex = "REMOVE FROM ARRAY BY INDEX",
    RemoveFromArrayByValue = "REMOVE FROM ARRAY BY VALUE",
    Subtract = "SUBTRACT"
}

export declare enum WSEvent {
    OngoingEachPlayer = "ONGOING - EACH PLAYER",
    OngoingGlobal = "ONGOING - GLOBAL",
    PlayerDealtDamage = "PLAYER DEALT DAMAGE",
    PlayerDealtFinalBlow = "PLAYER DEALT FINAL BLOW",
    PlayerDied = "PLAYER DIED",
    PlayerEarnedElimination = "PLAYER EARNED ELIMINATION",
    PlayerTookDamage = "PLAYER TOOK DAMAGE"
}

export declare enum WSStringConstant {
    EmptyString = "",
    Exclamation = "!",
    ExclamationExclamation = "!!",
    ExclamationExclamationExclamation = "!!!",
    NumberArg0 = "#{0}",
    LeftParenArg0RightParen = "({0})",
    Asterisk = "*",
    DashDashDashDashDashDashDashDashDashDash = "----------",
    DashGreaterThanArg0 = "-> {0}",
    PeriodPeriodPeriod = "...",
    LessThanDashArg0 = "<- {0}",
    LessThanDashGreaterThanArg0 = "<-> {0}",
    Question = "?",
    QuestionQuestion = "??",
    QuestionQuestionQuestion = "???",
    Abilities = "ABILITIES",
    Ability = "ABILITY",
    Ability1 = "ABILITY 1",
    Ability2 = "ABILITY 2",
    Alert = "ALERT",
    Alive = "ALIVE",
    Allies = "ALLIES",
    Ally = "ALLY",
    Attack = "ATTACK",
    Attacked = "ATTACKED",
    Attacking = "ATTACKING",
    Attempt = "ATTEMPT",
    Attempts = "ATTEMPTS",
    Average = "AVERAGE",
    Avoid = "AVOID",
    Avoided = "AVOIDED",
    Avoiding = "AVOIDING",
    Backward = "BACKWARD",
    Bad = "BAD",
    Ban = "BAN",
    Banned = "BANNED",
    Banning = "BANNING",
    Best = "BEST",
    Better = "BETTER",
    Boss = "BOSS",
    Bosses = "BOSSES",
    Bought = "BOUGHT",
    Build = "BUILD",
    Building = "BUILDING",
    Built = "BUILT",
    Burn = "BURN",
    Burning = "BURNING",
    Burnt = "BURNT",
    Buy = "BUY",
    Buying = "BUYING",
    Capture = "CAPTURE",
    Captured = "CAPTURED",
    Capturing = "CAPTURING",
    Caution = "CAUTION",
    Center = "CENTER",
    ChallengeAccepted = "CHALLENGE ACCEPTED",
    Chase = "CHASE",
    Chased = "CHASED",
    Chasing = "CHASING",
    Checkpoint = "CHECKPOINT",
    Checkpoints = "CHECKPOINTS",
    Cloud = "CLOUD",
    Clouds = "CLOUDS",
    ComeHere = "COME HERE",
    Condition = "CONDITION",
    Congratulations = "CONGRATULATIONS",
    Connect = "CONNECT",
    Connected = "CONNECTED",
    Connecting = "CONNECTING",
    ControlPoint = "CONTROL POINT",
    ControlPoints = "CONTROL POINTS",
    Cooldown = "COOLDOWN",
    Cooldowns = "COOLDOWNS",
    Corrupt = "CORRUPT",
    Corrupted = "CORRUPTED",
    Corrupting = "CORRUPTING",
    Credit = "CREDIT",
    Credits = "CREDITS",
    Critical = "CRITICAL",
    Crouch = "CROUCH",
    Crouched = "CROUCHED",
    Crouching = "CROUCHING",
    Current = "CURRENT",
    CurrentAllies = "CURRENT ALLIES",
    CurrentAlly = "CURRENT ALLY",
    CurrentAttempt = "CURRENT ATTEMPT",
    CurrentCheckpoint = "CURRENT CHECKPOINT",
    CurrentEnemies = "CURRENT ENEMIES",
    CurrentEnemy = "CURRENT ENEMY",
    CurrentForm = "CURRENT FORM",
    CurrentGame = "CURRENT GAME",
    CurrentHero = "CURRENT HERO",
    CurrentHeroes = "CURRENT HEROES",
    CurrentHostage = "CURRENT HOSTAGE",
    CurrentHostages = "CURRENT HOSTAGES",
    CurrentLevel = "CURRENT LEVEL",
    CurrentMission = "CURRENT MISSION",
    CurrentObject = "CURRENT OBJECT",
    CurrentObjective = "CURRENT OBJECTIVE",
    CurrentObjects = "CURRENT OBJECTS",
    CurrentPhase = "CURRENT PHASE",
    CurrentPlayer = "CURRENT PLAYER",
    CurrentPlayers = "CURRENT PLAYERS",
    CurrentRound = "CURRENT ROUND",
    CurrentTarget = "CURRENT TARGET",
    CurrentTargets = "CURRENT TARGETS",
    CurrentUpgrade = "CURRENT UPGRADE",
    Damage = "DAMAGE",
    Damaged = "DAMAGED",
    Damaging = "DAMAGING",
    Danger = "DANGER",
    Dead = "DEAD",
    Defeat = "DEFEAT",
    Defend = "DEFEND",
    Defended = "DEFENDED",
    Defending = "DEFENDING",
    Deliver = "DELIVER",
    Delivered = "DELIVERED",
    Delivering = "DELIVERING",
    Destabilize = "DESTABILIZE",
    Destabilized = "DESTABILIZED",
    Destabilizing = "DESTABILIZING",
    Destroy = "DESTROY",
    Destroyed = "DESTROYED",
    Destroying = "DESTROYING",
    Die = "DIE",
    Disconnect = "DISCONNECT",
    Disconnected = "DISCONNECTED",
    Disconnecting = "DISCONNECTING",
    Distance = "DISTANCE",
    Distances = "DISTANCES",
    Dodge = "DODGE",
    Dodged = "DODGED",
    Dodging = "DODGING",
    Dome = "DOME",
    Domes = "DOMES",
    Down = "DOWN",
    Download = "DOWNLOAD",
    Downloaded = "DOWNLOADED",
    Downloading = "DOWNLOADING",
    Draw = "DRAW",
    Drop = "DROP",
    Dropped = "DROPPED",
    Dropping = "DROPPING",
    Dying = "DYING",
    East = "EAST",
    Eliminate = "ELIMINATE",
    Eliminated = "ELIMINATED",
    Eliminating = "ELIMINATING",
    Elimination = "ELIMINATION",
    Eliminations = "ELIMINATIONS",
    Enemies = "ENEMIES",
    Enemy = "ENEMY",
    Entrance = "ENTRANCE",
    Escort = "ESCORT",
    Escorted = "ESCORTED",
    Escorting = "ESCORTING",
    Excellent = "EXCELLENT",
    Exit = "EXIT",
    Extreme = "EXTREME",
    Failed = "FAILED",
    Failing = "FAILING",
    Failure = "FAILURE",
    Fall = "FALL",
    Fallen = "FALLEN",
    Falling = "FALLING",
    Far = "FAR",
    Fast = "FAST",
    Faster = "FASTER",
    Fastest = "FASTEST",
    Fault = "FAULT",
    Faults = "FAULTS",
    Final = "FINAL",
    FinalAllies = "FINAL ALLIES",
    FinalAlly = "FINAL ALLY",
    FinalAttempt = "FINAL ATTEMPT",
    FinalCheckpoint = "FINAL CHECKPOINT",
    FinalEnemies = "FINAL ENEMIES",
    FinalEnemy = "FINAL ENEMY",
    FinalForm = "FINAL FORM",
    FinalGame = "FINAL GAME",
    FinalHero = "FINAL HERO",
    FinalHeroes = "FINAL HEROES",
    FinalHostage = "FINAL HOSTAGE",
    FinalHostages = "FINAL HOSTAGES",
    FinalItem = "FINAL ITEM",
    FinalLevel = "FINAL LEVEL",
    FinalMission = "FINAL MISSION",
    FinalObject = "FINAL OBJECT",
    FinalObjective = "FINAL OBJECTIVE",
    FinalObjects = "FINAL OBJECTS",
    FinalPhase = "FINAL PHASE",
    FinalPlayer = "FINAL PLAYER",
    FinalPlayers = "FINAL PLAYERS",
    FinalRound = "FINAL ROUND",
    FinalTarget = "FINAL TARGET",
    FinalTargets = "FINAL TARGETS",
    FinalTime = "FINAL TIME",
    FinalUpgrade = "FINAL UPGRADE",
    Find = "FIND",
    Finding = "FINDING",
    Finish = "FINISH",
    Finished = "FINISHED",
    Finishing = "FINISHING",
    Flown = "FLOWN",
    Fly = "FLY",
    Flying = "FLYING",
    Form = "FORM",
    Forms = "FORMS",
    Forward = "FORWARD",
    Found = "FOUND",
    Freeze = "FREEZE",
    Freezing = "FREEZING",
    Frozen = "FROZEN",
    Game = "GAME",
    Games = "GAMES",
    GamesLost = "GAMES LOST",
    GamesWon = "GAMES WON",
    Gg = "GG",
    Go = "GO",
    Goal = "GOAL",
    Goals = "GOALS",
    Going = "GOING",
    Good = "GOOD",
    GoodLuck = "GOOD LUCK",
    Goodbye = "GOODBYE",
    Guilty = "GUILTY",
    Hack = "HACK",
    Hacked = "HACKED",
    Hacking = "HACKING",
    Heal = "HEAL",
    Healed = "HEALED",
    Healer = "HEALER",
    Healers = "HEALERS",
    Healing = "HEALING",
    Hello = "HELLO",
    Help = "HELP",
    Here = "HERE",
    Hero = "HERO",
    Heroes = "HEROES",
    Hidden = "HIDDEN",
    Hide = "HIDE",
    Hiding = "HIDING",
    HighScore = "HIGH SCORE",
    HighScores = "HIGH SCORES",
    Hmmm = "HMMM",
    Hostage = "HOSTAGE",
    Hostages = "HOSTAGES",
    Huh = "HUH",
    Hunt = "HUNT",
    Hunted = "HUNTED",
    Hunter = "HUNTER",
    Hunters = "HUNTERS",
    Hunting = "HUNTING",
    IGiveUp = "I GIVE UP",
    ITried = "I TRIED",
    InView = "IN VIEW",
    Incoming = "INCOMING",
    Initial = "INITIAL",
    InitialAllies = "INITIAL ALLIES",
    InitialAlly = "INITIAL ALLY",
    InitialAttempt = "INITIAL ATTEMPT",
    InitialCheckpoint = "INITIAL CHECKPOINT",
    InitialEnemies = "INITIAL ENEMIES",
    InitialEnemy = "INITIAL ENEMY",
    InitialForm = "INITIAL FORM",
    InitialGame = "INITIAL GAME",
    InitialHero = "INITIAL HERO",
    InitialHeroes = "INITIAL HEROES",
    InitialHostage = "INITIAL HOSTAGE",
    InitialLevel = "INITIAL LEVEL",
    InitialMission = "INITIAL MISSION",
    InitialObject = "INITIAL OBJECT",
    InitialObjective = "INITIAL OBJECTIVE",
    InitialObjects = "INITIAL OBJECTS",
    InitialPhase = "INITIAL PHASE",
    InitialPlayer = "INITIAL PLAYER",
    InitialPlayers = "INITIAL PLAYERS",
    InitialRound = "INITIAL ROUND",
    InitialTarget = "INITIAL TARGET",
    InitialTargets = "INITIAL TARGETS",
    InitialUpgrade = "INITIAL UPGRADE",
    Innocent = "INNOCENT",
    Inside = "INSIDE",
    Invisible = "INVISIBLE",
    Item = "ITEM",
    Items = "ITEMS",
    Join = "JOIN",
    Joined = "JOINED",
    Joining = "JOINING",
    Jump = "JUMP",
    Jumping = "JUMPING",
    Kill = "KILL",
    Kills = "KILLS",
    Killstreak = "KILLSTREAK",
    Killstreaks = "KILLSTREAKS",
    Leader = "LEADER",
    Leaders = "LEADERS",
    Least = "LEAST",
    Left = "LEFT",
    Less = "LESS",
    Level = "LEVEL",
    Levels = "LEVELS",
    Life = "LIFE",
    Limited = "LIMITED",
    Lives = "LIVES",
    Load = "LOAD",
    Loaded = "LOADED",
    Loading = "LOADING",
    Lock = "LOCK",
    Locked = "LOCKED",
    Locking = "LOCKING",
    Loser = "LOSER",
    Losers = "LOSERS",
    Loss = "LOSS",
    Losses = "LOSSES",
    Max = "MAX",
    Mild = "MILD",
    Min = "MIN",
    Mission = "MISSION",
    MissionAborted = "MISSION ABORTED",
    MissionAccomplished = "MISSION ACCOMPLISHED",
    MissionFailed = "MISSION FAILED",
    Missions = "MISSIONS",
    Moderate = "MODERATE",
    Money = "MONEY",
    More = "MORE",
    Most = "MOST",
    MyMistake = "MY MISTAKE",
    Near = "NEAR",
    NewHighScore = "NEW HIGH SCORE",
    NewRecord = "NEW RECORD",
    Next = "NEXT",
    NextAllies = "NEXT ALLIES",
    NextAlly = "NEXT ALLY",
    NextAttempt = "NEXT ATTEMPT",
    NextCheckpoint = "NEXT CHECKPOINT",
    NextEnemies = "NEXT ENEMIES",
    NextEnemy = "NEXT ENEMY",
    NextForm = "NEXT FORM",
    NextGame = "NEXT GAME",
    NextHero = "NEXT HERO",
    NextHeroes = "NEXT HEROES",
    NextHostage = "NEXT HOSTAGE",
    NextHostages = "NEXT HOSTAGES",
    NextLevel = "NEXT LEVEL",
    NextMission = "NEXT MISSION",
    NextObject = "NEXT OBJECT",
    NextObjective = "NEXT OBJECTIVE",
    NextObjects = "NEXT OBJECTS",
    NextPhase = "NEXT PHASE",
    NextPlayer = "NEXT PLAYER",
    NextPlayers = "NEXT PLAYERS",
    NextRound = "NEXT ROUND",
    NextTarget = "NEXT TARGET",
    NextTargets = "NEXT TARGETS",
    NextUpgrade = "NEXT UPGRADE",
    NiceTry = "NICE TRY",
    No = "NO",
    NoThanks = "NO THANKS",
    None = "NONE",
    Normal = "NORMAL",
    North = "NORTH",
    Northeast = "NORTHEAST",
    Northwest = "NORTHWEST",
    NotToday = "NOT TODAY",
    Object = "OBJECT",
    Objective = "OBJECTIVE",
    Objectives = "OBJECTIVES",
    Objects = "OBJECTS",
    Obtain = "OBTAIN",
    Obtained = "OBTAINED",
    Obtaining = "OBTAINING",
    Off = "OFF",
    On = "ON",
    Oof = "OOF",
    Oops = "OOPS",
    Optimal = "OPTIMAL",
    Optimize = "OPTIMIZE",
    Optimized = "OPTIMIZED",
    Optimizing = "OPTIMIZING",
    OutOfView = "OUT OF VIEW",
    Outgoing = "OUTGOING",
    Outside = "OUTSIDE",
    Over = "OVER",
    Overtime = "OVERTIME",
    Payload = "PAYLOAD",
    Payloads = "PAYLOADS",
    Phase = "PHASE",
    Phases = "PHASES",
    Pick = "PICK",
    Picked = "PICKED",
    Picking = "PICKING",
    Player = "PLAYER",
    Players = "PLAYERS",
    Point = "POINT",
    Points = "POINTS",
    PointsEarned = "POINTS EARNED",
    PointsLost = "POINTS LOST",
    PowerDashup = "POWER-UP",
    PowerDashups = "POWER-UPS",
    Price = "PRICE",
    Protect = "PROTECT",
    Protected = "PROTECTED",
    Protecting = "PROTECTING",
    Purified = "PURIFIED",
    Purify = "PURIFY",
    Purifying = "PURIFYING",
    Raise = "RAISE",
    Raised = "RAISED",
    Raising = "RAISING",
    Rank = "RANK",
    RankA = "RANK A",
    RankB = "RANK B",
    RankC = "RANK C",
    RankD = "RANK D",
    RankE = "RANK E",
    RankF = "RANK F",
    RankG = "RANK G",
    Ready = "READY",
    Record = "RECORD",
    Records = "RECORDS",
    Recover = "RECOVER",
    Recovered = "RECOVERED",
    Recovering = "RECOVERING",
    Remain = "REMAIN",
    Remaining = "REMAINING",
    Rescue = "RESCUE",
    Rescued = "RESCUED",
    Rescuing = "RESCUING",
    Resurrect = "RESURRECT",
    Resurrected = "RESURRECTED",
    Resurrecting = "RESURRECTING",
    Reveal = "REVEAL",
    Revealed = "REVEALED",
    Revealing = "REVEALING",
    Right = "RIGHT",
    Round = "ROUND",
    RoundArg0 = "ROUND {0}",
    Rounds = "ROUNDS",
    RoundsLost = "ROUNDS LOST",
    RoundsWon = "ROUNDS WON",
    Run = "RUN",
    Running = "RUNNING",
    Safe = "SAFE",
    Save = "SAVE",
    Saved = "SAVED",
    Saving = "SAVING",
    Score = "SCORE",
    Scores = "SCORES",
    Secure = "SECURE",
    Secured = "SECURED",
    Securing = "SECURING",
    Sell = "SELL",
    Selling = "SELLING",
    Sever = "SEVER",
    Severe = "SEVERE",
    Severed = "SEVERED",
    Severing = "SEVERING",
    Sink = "SINK",
    Sinking = "SINKING",
    Sleep = "SLEEP",
    Sleeping = "SLEEPING",
    Slept = "SLEPT",
    Slow = "SLOW",
    Slower = "SLOWER",
    Slowest = "SLOWEST",
    Sold = "SOLD",
    Sorry = "SORRY",
    South = "SOUTH",
    Southeast = "SOUTHEAST",
    Southwest = "SOUTHWEST",
    Sparkles = "SPARKLES",
    Spawn = "SPAWN",
    Spawned = "SPAWNED",
    Spawning = "SPAWNING",
    Sphere = "SPHERE",
    Spheres = "SPHERES",
    Stabilize = "STABILIZE",
    Stabilized = "STABILIZED",
    Stabilizing = "STABILIZING",
    Stable = "STABLE",
    Star = "STAR",
    Stars = "STARS",
    Start = "START",
    Started = "STARTED",
    Starting = "STARTING",
    Status = "STATUS",
    StayAway = "STAY AWAY",
    Stop = "STOP",
    Stopped = "STOPPED",
    Stopping = "STOPPING",
    Stun = "STUN",
    Stunned = "STUNNED",
    Stunning = "STUNNING",
    Suboptimal = "SUBOPTIMAL",
    Success = "SUCCESS",
    SuddenDeath = "SUDDEN DEATH",
    Sunk = "SUNK",
    Superb = "SUPERB",
    Survive = "SURVIVE",
    Survived = "SURVIVED",
    Surviving = "SURVIVING",
    Target = "TARGET",
    Targets = "TARGETS",
    Team = "TEAM",
    Teammate = "TEAMMATE",
    Teammates = "TEAMMATES",
    Teams = "TEAMS",
    Terrible = "TERRIBLE",
    ThankYou = "THANK YOU",
    Thanks = "THANKS",
    ThatWasAwesome = "THAT WAS AWESOME",
    Threat = "THREAT",
    ThreatLevel = "THREAT LEVEL",
    ThreatLevels = "THREAT LEVELS",
    Threats = "THREATS",
    Tiebreaker = "TIEBREAKER",
    Time = "TIME",
    Times = "TIMES",
    Total = "TOTAL",
    Trade = "TRADE",
    Traded = "TRADED",
    Trading = "TRADING",
    Traitor = "TRAITOR",
    Traitors = "TRAITORS",
    Transfer = "TRANSFER",
    Transferred = "TRANSFERRED",
    Transferring = "TRANSFERRING",
    TryAgain = "TRY AGAIN",
    Turret = "TURRET",
    Turrets = "TURRETS",
    Ugh = "UGH",
    UltimateAbility = "ULTIMATE ABILITY",
    Under = "UNDER",
    Unknown = "UNKNOWN",
    Unlimited = "UNLIMITED",
    Unlock = "UNLOCK",
    Unlocked = "UNLOCKED",
    Unlocking = "UNLOCKING",
    Unsafe = "UNSAFE",
    Unstable = "UNSTABLE",
    Up = "UP",
    Upgrade = "UPGRADE",
    Upgrades = "UPGRADES",
    Upload = "UPLOAD",
    Uploaded = "UPLOADED",
    Uploading = "UPLOADING",
    UseAbility1 = "USE ABILITY 1",
    UseAbility2 = "USE ABILITY 2",
    UseUltimateAbility = "USE ULTIMATE ABILITY",
    Victory = "VICTORY",
    Visible = "VISIBLE",
    Vortex = "VORTEX",
    Vortices = "VORTICES",
    Wait = "WAIT",
    Waiting = "WAITING",
    Wall = "WALL",
    Walls = "WALLS",
    Warning = "WARNING",
    WellPlayed = "WELL PLAYED",
    West = "WEST",
    Win = "WIN",
    Winner = "WINNER",
    Winners = "WINNERS",
    Wins = "WINS",
    Worse = "WORSE",
    Wow = "WOW",
    Yes = "YES",
    You = "YOU",
    YouLose = "YOU LOSE",
    YouWin = "YOU WIN",
    Zone = "ZONE",
    Zones = "ZONES",
    Arg0ExclamationEqualsArg1 = "{0} != {1}",
    Arg0AsteriskArg1 = "{0} * {1}",
    Arg0PlusArg1 = "{0} + {1}",
    Arg0CommaArg1CommaAndArg2 = "{0} ,{1}, AND{2}",
    Arg0DashArg1 = "{0} - {1}",
    Arg0DashArg1DashArg2 = "{0} - {1} - {2}",
    Arg0DashGreaterThan = "{0} ->",
    Arg0DashGreaterThanArg1 = "{0} -> {1}",
    Arg0FSlashArg1 = "{0} / {1}",
    Arg0ColonArg1ColonArg2 = "{0} : {1} : {2}",
    Arg0LessThanArg1 = "{0} < {1}",
    Arg0LessThanDashArg1 = "{0} <- {1}",
    Arg0LessThanDashGreaterThan = "{0} <->",
    Arg0LessThanDashGreaterThanArg1 = "{0} <-> {1}",
    Arg0LessThanEqualsArg1 = "{0} <= {1}",
    Arg0EqualsArg1 = "{0} = {1}",
    Arg0EqualsEqualsArg1 = "{0} == {1}",
    Arg0GreaterThanArg1 = "{0} > {1}",
    Arg0GreaterThanEqualsArg1 = "{0} >= {1}",
    Arg0AndArg1 = "{0} AND {1}",
    Arg0M = "{0} M",
    Arg0MFSlashs = "{0} M/S",
    Arg0Sec = "{0} SEC",
    Arg0VsArg1 = "{0} VS {1}",
    Arg0Arg1Arg2 = "{0} {1} {2}",
    Arg0Exclamation = "{0}!",
    Arg0ExclamationExclamation = "{0}!!",
    Arg0ExclamationExclamationExclamation = "{0}!!!",
    Arg0Percent = "{0}%",
    Arg0CommaArg1 = "{0}, {1}",
    Arg0Colon = "{0}:",
    Arg0ColonSpaceArg1 = "{0}: {1}",
    Arg0ColonArg1AndArg2 = "{0}: {1} AND {2}",
    Arg0ColonArg1 = "{0}:{1}",
    Arg0Question = "{0}?",
    Arg0QuestionQuestion = "{0}??",
    Arg0QuestionQuestionQuestion = "{0}???",
    UpsideDownExclamationArg0Exclamation = "¡{0}!",
    UpsideDownQuestionArg0Question = "¿{0}?"
}

export declare enum WSTeamConstant {
    All = "ALL",
    Team1 = "TEAM 1",
    Team2 = "TEAM 2"
}

export declare enum WSHeroConstant {
    Ana = "ANA",
    Ashe = "ASHE",
    Baptiste = "BAPTISTE",
    Bastion = "BASTION",
    Brigitte = "BRIGITTE",
    DVa = "D.VA",
    Doomfist = "DOOMFIST",
    Genji = "GENJI",
    Hanzo = "HANZO",
    Junkrat = "JUNKRAT",
    Lucio = "LÚCIO",
    Mccree = "MCCREE",
    Mei = "MEI",
    Mercy = "MERCY",
    Moira = "MOIRA",
    Orisa = "ORISA",
    Pharah = "PHARAH",
    Reaper = "REAPER",
    Reinhardt = "REINHARDT",
    Roadhog = "ROADHOG",
    Soldier76 = "SOLDIER: 76",
    Sombra = "SOMBRA",
    Symmetra = "SYMMETRA",
    Torbjorn = "TORBJÖRN",
    Tracer = "TRACER",
    Widowmaker = "WIDOWMAKER",
    Winston = "WINSTON",
    WreckingBall = "WRECKING BALL",
    Zarya = "ZARYA",
    Zenyatta = "ZENYATTA"
}

export declare enum WSEventPlayer {
    All = "ALL",
    Ana = "ANA",
    Ashe = "ASHE",
    Baptiste = "BAPTISTE",
    Bastion = "BASTION",
    Brigitte = "BRIGITTE",
    DVa = "D.VA",
    Doomfist = "DOOMFIST",
    Genji = "GENJI",
    Hanzo = "HANZO",
    Junkrat = "JUNKRAT",
    Lucio = "LÚCIO",
    Mccree = "MCCREE",
    Mei = "MEI",
    Mercy = "MERCY",
    Moira = "MOIRA",
    Orisa = "ORISA",
    Pharah = "PHARAH",
    Reaper = "REAPER",
    Reinhardt = "REINHARDT",
    Roadhog = "ROADHOG",
    Slot0 = "SLOT 0",
    Slot1 = "SLOT 1",
    Slot10 = "SLOT 10",
    Slot11 = "SLOT 11",
    Slot2 = "SLOT 2",
    Slot3 = "SLOT 3",
    Slot4 = "SLOT 4",
    Slot5 = "SLOT 5",
    Slot6 = "SLOT 6",
    Slot7 = "SLOT 7",
    Slot8 = "SLOT 8",
    Slot9 = "SLOT 9",
    Soldier76 = "SOLDIER: 76",
    Sombra = "SOMBRA",
    Symmetra = "SYMMETRA",
    Torbjorn = "TORBJÖRN",
    Tracer = "TRACER",
    Widowmaker = "WIDOWMAKER",
    Winston = "WINSTON",
    WreckingBall = "WRECKING BALL",
    Zarya = "ZARYA",
    Zenyatta = "ZENYATTA"
}

export declare enum WSVariable {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I",
    J = "J",
    K = "K",
    L = "L",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}

export declare enum WSPlayEffect {
    BadExplosion = "BAD EXPLOSION",
    BadPickupEffect = "BAD PICKUP EFFECT",
    BuffExplosionSound = "BUFF EXPLOSION SOUND",
    BuffImpactSound = "BUFF IMPACT SOUND",
    DebuffImpactSound = "DEBUFF IMPACT SOUND",
    ExplosionSound = "EXPLOSION SOUND",
    GoodExplosion = "GOOD EXPLOSION",
    GoodPickupEffect = "GOOD PICKUP EFFECT",
    RingExplosion = "RING EXPLOSION",
    RingExplosionSound = "RING EXPLOSION SOUND"
}

export declare enum WSCreateEffect {
    BadAura = "BAD AURA",
    BadAuraSound = "BAD AURA SOUND",
    BeaconSound = "BEACON SOUND",
    Cloud = "CLOUD",
    DecalSound = "DECAL SOUND",
    EnergySound = "ENERGY SOUND",
    GoodAura = "GOOD AURA",
    GoodAuraSound = "GOOD AURA SOUND",
    LightShaft = "LIGHT SHAFT",
    Orb = "ORB",
    PickUpSound = "PICK-UP SOUND",
    Ring = "RING",
    SmokeSound = "SMOKE SOUND",
    Sparkles = "SPARKLES",
    SparklesSound = "SPARKLES SOUND",
    Sphere = "SPHERE"
}

export declare enum WSCommunicate {
    Acknowledge = "ACKNOWLEDGE",
    EmoteDown = "EMOTE DOWN",
    EmoteLeft = "EMOTE LEFT",
    EmoteRight = "EMOTE RIGHT",
    EmoteUp = "EMOTE UP",
    GroupUp = "GROUP UP",
    Hello = "HELLO",
    NeedHealing = "NEED HEALING",
    Thanks = "THANKS",
    UltimateStatus = "ULTIMATE STATUS",
    VoiceLineDown = "VOICE LINE DOWN",
    VoiceLineLeft = "VOICE LINE LEFT",
    VoiceLineRight = "VOICE LINE RIGHT",
    VoiceLineUp = "VOICE LINE UP"
}

export declare enum WSIcon {
    ArrowDown = "ARROW: DOWN",
    ArrowLeft = "ARROW: LEFT",
    ArrowRight = "ARROW: RIGHT",
    ArrowUp = "ARROW: UP",
    Asterisk = "ASTERISK",
    Bolt = "BOLT",
    Checkmark = "CHECKMARK",
    Circle = "CIRCLE",
    Club = "CLUB",
    Diamond = "DIAMOND",
    Dizzy = "DIZZY",
    ExclamationMark = "EXCLAMATION MARK",
    Eye = "EYE",
    Fire = "FIRE",
    Flag = "FLAG",
    Halo = "HALO",
    Happy = "HAPPY",
    Heart = "HEART",
    Moon = "MOON",
    No = "NO",
    Plus = "PLUS",
    Poison = "POISON",
    Poison2 = "POISON 2",
    QuestionMark = "QUESTION MARK",
    Radioactive = "RADIOACTIVE",
    Recycle = "RECYCLE",
    RingThick = "RING THICK",
    RingThin = "RING THIN",
    Sad = "SAD",
    Skull = "SKULL",
    Spade = "SPADE",
    Spiral = "SPIRAL",
    Stop = "STOP",
    Trashcan = "TRASHCAN",
    Warning = "WARNING",
    X = "X"
}

export declare enum WSRelative {
    ToPlayer = "TO PLAYER",
    ToWorld = "TO WORLD"
}

export declare enum WSMotion {
    CancelContraryMotion = "CANCEL CONTRARY MOTION",
    IncorporateContraryMotion = "INCORPORATE CONTRARY MOTION"
}

export declare enum WSRoundingType {
    Down = "DOWN",
    ToNearest = "TO NEAREST",
    Up = "UP"
}

export declare enum WSLosCheck {
    Off = "OFF",
    Surfaces = "SURFACES",
    SurfacesAndAllBarriers = "SURFACES AND ALL BARRIERS",
    SurfacesAndEnemyBarriers = "SURFACES AND ENEMY BARRIERS"
}

export declare enum WSWorldTextClipping {
    ClipAgainstSurfaces = "CLIP AGAINST SURFACES",
    DoNotClip = "DO NOT CLIP"
}

export declare enum WSHudLocation {
    Left = "LEFT",
    Right = "RIGHT",
    Top = "TOP"
}

export declare enum WSIconReevaluation {
    None = "NONE",
    Position = "POSITION",
    VisibleTo = "VISIBLE TO",
    VisibleToAndPosition = "VISIBLE TO AND POSITION"
}

export declare enum WSEffectReevaluation {
    None = "NONE",
    PositionAndRadius = "POSITION AND RADIUS",
    VisibleTo = "VISIBLE TO",
    VisibleToPositionAndRadius = "VISIBLE TO, POSITION, AND RADIUS"
}

export declare enum WSHudTextReevaluation {
    String = "STRING",
    VisibleToAndString = "VISIBLE TO AND STRING"
}

export declare enum WSWorldTextReevaluation {
    String = "STRING",
    VisibleToAndString = "VISIBLE TO AND STRING",
    VisibleToPositionAndString = "VISIBLE TO, POSITION, AND STRING"
}

export declare enum WSChaseRateReevaluation {
    DestinationAndRate = "DESTINATION AND RATE",
    None = "NONE"
}

export declare enum WSChaseTimeReevaluation {
    DestinationAndDuration = "DESTINATION AND DURATION",
    None = "NONE"
}

export declare enum WSObjectiveDescriptionReevaluation {
    String = "STRING",
    VisibleToAndString = "VISIBLE TO AND STRING"
}

export declare enum WSDamageModificationReevaluation {
    None = "NONE",
    ReceiversAndDamagers = "RECEIVERS AND DAMAGERS",
    ReceiversDamagersAndDamagePercent = "RECEIVERS, DAMAGERS, AND DAMAGE PERCENT"
}

export declare enum WSWaitBehavior {
    AbortWhenFalse = "ABORT WHEN FALSE",
    IgnoreCondition = "IGNORE CONDITION",
    RestartWhenTrue = "RESTART WHEN TRUE"
}

export declare enum WSBarriersLos {
    AllBarriersBlockLos = "ALL BARRIERS BLOCK LOS",
    BarriersDoNotBlockLos = "BARRIERS DO NOT BLOCK LOS",
    EnemyBarriersBlockLos = "ENEMY BARRIERS BLOCK LOS"
}

export declare enum WSStatus {
    Asleep = "ASLEEP",
    Burning = "BURNING",
    Frozen = "FROZEN",
    Hacked = "HACKED",
    Invincible = "INVINCIBLE",
    KnockedDown = "KNOCKED DOWN",
    PhasedOut = "PHASED OUT",
    Rooted = "ROOTED",
    Stunned = "STUNNED",
    Unkillable = "UNKILLABLE"
}

export declare enum WSCompareOperator {
    EqualsEquals = "==",
    ExclamationEquals = "!=",
    LessThan = "<",
    LessThanEquals = "<=",
    GreaterThan = ">",
    GreaterThanEquals = ">="
}

export declare interface WSBase extends WSAny {}

export declare interface WSHero extends WSBase {}

export declare interface WSDirection extends WSBase {}

export declare interface WSPosition extends WSDirection {}

export declare interface WSPlayer extends WSPosition {}

export declare interface WSTeam extends WSBase {}

export declare interface WSAny {}

export declare function rule(
	title: string,
	eventType: WSEvent, 
	team?: WSTeamConstant, 
	player?: WSEventPlayer, 
): (conditions: boolean[], actions: ()=>void)=> void;
