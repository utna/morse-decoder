const MORSE_CODE = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"A",
    "-...":"B",
    "-.-.":"C",
    "-..":"D",
    ".":"E",
    "..-.":"F",
    "--.":"G",
    "....":"H",
    "..":"I",
    ".---":"J",
    "-.-":"K",
    ".-..":"L",
    "--":"M",
    "-.":"N",
    "---":"O",
    ".--.":"P",
    "--.-":"Q",
    ".-.":"R",
    "...":"S",
    "-":"T",
    "..-":"U",
    "...-":"V",
    ".--":"W",
    "-..-":"X",
    "-.--":"Y",
    "--..":"Z",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
};

decodeSymbol = function(morse){
    return MORSE_CODE[morse]
}

decodeMorse = function(morseCode){
    res = ''

    words =  morseCode.trim().split("   ")
    // You can use MORSE_CODE[morse]
    symbols = []
    for (i = 0;i < words.length; i++){
        symbols[i] = words[i].split(" ")
    }

    for(i= 0; i< symbols.length;i++){
        if (i>0) res += " "
        for(j = 0; j< symbols[i].length;j++){
            res += decodeSymbol(symbols[i][j])
        }
        
    }
    return(res)
  }
//.... . -.--   .--- ..- -.. .

input = document.getElementById("input")
output = document.getElementById("output")

output.defaultValue = "result"
input.defaultValue = "input morse"

input.oninput = function(){
    output.value = decodeMorse(input.value)
}

