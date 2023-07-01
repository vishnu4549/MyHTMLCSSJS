function selectedlang(){
    var language=document.getElementById("language").value;
    console.log(language);
    var CVlang=document.getElementById("CVlang");
    var Knownlang=document.getElementById("text").value;
    if (Knownlang == "Hi ! How are you.."){
        switch(language){
            case "Telugu": CVlang.innerHTML ="హాయ్ ! మీరు ఎలా ఉన్నారు.."; break;
            case "Hindi": CVlang.innerHTML ="नमस्ते ! आप कैसे हैं.."; break;
            case "Spanish": CVlang.innerHTML ="Hola ! Cómo estás.."; break;
            case "French": CVlang.innerHTML ="Salut ! Comment allez-vous.."; break;
            case "Arabic": CVlang.innerHTML ="أهلاً ! كيف حالك.."; break;
        }
    }
    else {
        CVlang.innerHTML ="Out of database..";
    }
}