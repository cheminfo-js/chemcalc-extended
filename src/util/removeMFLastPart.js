/*
 C10H -> C10
 C10((Me)N) -> C10
 C10Ala -> C10
 C10Ala((Me)N) -> C10Ala
 */
module.exports.removeMFLastPart = function(mf) {
    var parenthesis=0;
    var start=true;
    for (var i=mf.length-1; i>=0; i++) {
        var ascii=mf.charCodeAt(i);
        if (ascii>96 and ascii<123) { // lowercase

        } else if (ascii>64 and ascii<91) { // uppercase
            if (! start) {
                return substring(0, i-1);
            }
            start=false;
        } else if (ascii===40) { // (
            parenthesis--;
            if (! parenthesis) return mf.substr(0,i-1);
        } else if (ascii===41) { // )
            parenthesis++;
        } else {
            start=false;
        }
    }
    return "";
}
