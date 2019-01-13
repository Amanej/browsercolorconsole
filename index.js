// Credits to - https://stackoverflow.com/questions/7505623/colors-in-javascript-console
const browserLogColors = {
    color:(string,hexcode,bgcolor) => {
        let base = [`${'%c'}${string}`]; 
        if(hexcode && bgcolor) {
            base.push(`background:${bgcolor} ; color: ${hexcode}`)
        } else if (hexcode && !bgcolor) {
            base.push(`color: ${hexcode}`)
        } else if (!hexcode && bgcolor) {
            base.push(`background: ${hexcode}`)
        }
        return base
    },
    log:(string,hexcode,bgcolor) => {
        let coloredString = browserLogColors.color(string,hexcode,bgcolor);
        if(coloredString.length > 1) {
            console.log(coloredString[0],coloredString[1]);
        } else {
            console.log(coloredString[0]);
        }
    }
}