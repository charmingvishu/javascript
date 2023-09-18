
function removeSpaces() {

    originalText ="Geeks for Geeks Portal";
    
    newText = originalText.replace(/ /g, "");
    
    document.querySelector('.output').textContent = newText;
    
    }