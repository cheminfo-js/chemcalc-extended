/*
 C10H -> C10
 C10((Me)N) -> C10
 C10Ala -> C10
 C10Ala((Me)N) -> C10Ala
 */
module.exports = function(mf) {
    var parenthesis=0;
    var start=true;
    for (var i=mf.length-1; i>=0; i--) {
        var ascii=mf.charCodeAt(i);
        
        if (ascii>96 && ascii<123) { // lowercase
            if (! start && ! parenthesis) {
                return mf.substr(0, i+1);
            }
        } else if (ascii>64 && ascii<91) { // uppercase
            if (! start && ! parenthesis) {
                return mf.substr(0, i+1);
            }
            start=false;
        } else if (ascii===40) { // (
            parenthesis--;
            if (! parenthesis) return mf.substr(0,i);
        } else if (ascii===41) { // )
            parenthesis++;
        } else {
            start=false;
            if (! parenthesis) return mf.substr(0,i+1);
        }
    }
    return "";
}
