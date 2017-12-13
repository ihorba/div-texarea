;(function(){
    "use strict";

    var editorDiv = document.querySelector('.magic-div');
    var editorArea = document.querySelector('.magic-textarea');

    editorArea.hidden = true;

    document.addEventListener('keydown', switchElements);

    function switchElements(event){

        if(event.keyCode == 69 && event.ctrlKey && editorArea.hidden){
            event.preventDefault();

            editorArea.value = editorDiv.innerHTML.trim();
            editorDiv.hidden = true;
            editorArea.hidden = false;

            editorArea.focus();

        }

        if(event.keyCode == 83 && event.ctrlKey && !editorArea.hidden){
            event.preventDefault();

            editorDiv.innerHTML = editorArea.value;
            editorDiv.hidden = false;
            editorArea.hidden = true;

        }

        if(event.keyCode == 27 && !editorArea.hidden){

            event.preventDefault();
            editorDiv.hidden = false;
            editorArea.hidden = true;
        }
    }

})();

