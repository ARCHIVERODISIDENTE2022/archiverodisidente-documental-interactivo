$('#np-volume').on('input propertychange', function() {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

    $('#volume-progressbar').css('background',
        '-webkit-gradient(linear, left top, right top, '
        + 'color-stop(' + 0 + ', #D57D67), '
        + 'color-stop(' + val + ', #EDB472), '
        + 'color-stop(' + val + ', #CCC)'
        + ')'
    );
});