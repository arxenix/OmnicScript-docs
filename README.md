# OmnicScript Documentation

This webpage contains TypeScript documentation for the OmnicScript language.


[Start Here](https://omnicscript-docs.arxenix.dev/modules/_workshop_types_d_.html)


## Basic Sample
```typescript
import {
    rule,
    WSEvent,
    WSTeamConstant,
    WSEventPlayer,
    eventPlayer,
    createHudText,
    WSStringConstant,
    WSColor,
    WSHudLocation,
    WSHudTextReevaluation,
    isButtonHeld,
    WSButton,
    damage,
    stringFormat
} from 'omnic';

rule("Hello World", WSEvent.OngoingGlobal)(
    [
        // conditions
    ],
    function() {
        // actions
        createHudText(
            eventPlayer,
            stringFormat(WSStringConstant.Hello, null, null, null),
            null,
            null,
            WSHudLocation.Left,
            0,
            WSColor.White,
            WSColor.White,
            WSColor.White,
            WSHudTextReevaluation.VisibleToAndString
        )
    });

rule("Damage self on interact", WSEvent.OngoingEachPlayer, WSTeamConstant.All, WSEventPlayer.All)(
    [
        // conditions
        isButtonHeld(eventPlayer, WSButton.Interact)
    ],
    function() {
        // actions
        damage(eventPlayer, null, 10);
    });
```
