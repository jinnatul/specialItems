$(function() {

    $(".secondary-content").on("click",function(){
        let copyText = $('#divId').text();
        console.log(copyText);
        let input = document.createElement('input');
        input.value = copyText;
        
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        showMaterialToast("Copied " + copyText, "deep-purple darken-4");
        document.body.removeChild(input);
     });
});


function showMaterialToast(data, style) {
    M.toast({
        html : data,
        classes : style
    });
}