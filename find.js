var wordList = null;
chrome.storage.local.get('wordList', function (result) {
    wordList = result.wordList;
    if (wordList != null && wordList.length > 0) {
        var words = wordList.split(" ");
        var count = 0;
        $(document).contents ().each (function processNodes () {
            if (this.tagName === "IMG") {
                var altString = this.alt;
                count++;
                for (var i = 0; i < words.length; i++) {
                    var str = "";
                    var reg = "";
                    if (words[i].length > 5) {
                        str = words[i].substr(0, words[i].length - 2);
                        reg = new RegExp(str + ".{0,2}", "i");
                    }
                    else {
                        str = words[i];
                        reg = new RegExp(str, "i");
                    }
                    if (altString.match(reg) != null) {
                        $(this).replaceWith("<li style='background-color:#158fcf' class='item'></li>");
                    }
                }
            }
            if (this.nodeType == 3) {
                count++;
                for (var i = 0; i < words.length; i++) {
                    var str = ""; 
                    var reg = "";
                    if (words[i].length > 5) {
                        str = words[i].substr(0, words[i].length - 2);
                        reg = new RegExp(str + ".{0,2}", "i");
                    }
                    else {
                        str = words[i];
                        reg = new RegExp(str, "i");
                    }
                    if ($(this).text().match(reg) != null) {
                        $(this).replaceWith("<li style='background-color:#158fcf' class='item'></li>");
                    }
                }
            }
            else
                $(this).contents ().each (processNodes);
        });
    }
});

