document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', newWords);
    view();
});

function save(words)
{
    var wordList = words;
    chrome.storage.local.set({'wordList': wordList});
}

function load() {
    var words = "null";
    var object = "";
    chrome.storage.local.get('wordList', function (result) {
        words = result.wordList;
    });
    while (true) {
        if (!words.isEqual("null"))
            break;
    }
    alert("END of While");
    return words;
}

function view(){
    if(!localStorage['isWords']){
        localStorage['isWords'] = false;
    } else {
        if (localStorage['isWords'] == "true"){
            var element = document.getElementById('newWordsInput');
            element.value = localStorage['word_storage'];
        }
    }
}

function newWords(){
    var element = document.getElementById('newWordsInput');
    var words = element.value;
    localStorage['isWords'] = true;
    localStorage.setItem('word_storage', words);
    save(words);
}