String.prototype.format = function () {
    var stringArgs = [...arguments];
    var string = this;
    stringArgs.forEach((value, index) => {
        var regexString = "\\{"+index+"\\}"
        var re = new RegExp(regexString, "g");
        string = string.replace(re, value);
    });
    return string;
}
