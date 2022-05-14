$(document).ready(function(){
    $('#send').click(function() {
        if ($('#phone').val().length != 9 || isNaN($('#phone').val())) {
            $('#phone').css('border-color','#FF0000');
            alert('El número de teléfono debe tener al menos 9 números.');
            return false;
        }
        else {
            alert('OK');
        }
    });
});