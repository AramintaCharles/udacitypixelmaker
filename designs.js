// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(function() {
    //Get user input value for the grid size
    $('#sizePicker').submit(function(event) {
        event.preventDefault();
        let height = $('#inputHeight').val();
        let width = $('#inputWeight').val();
        makeGrid(height, width); 
    });

    //Make the grid
    function makeGrid(row, column) {
        $('tr').remove();

        for (let i = 0; i < row; i++) {
            $('#pixelCanvas').append('<tr></tr>');
        }
        for (let j = 0; j < column; j++) {
            $('tr').append('<td></td>');
        }
        $('#pixelCanvas').on('click', 'td', (function() {
            let color = $('#colorPicker').val();
            $('td').css('background-color',color);
        });
    }   
});
