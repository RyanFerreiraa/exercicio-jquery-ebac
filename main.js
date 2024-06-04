$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#resetar').click(function(e) {
        e.preventDefault();
        $('form').slideUp();
        $('#tarefa').val('');
        $('ul').empty();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa').val();
        const novoItem = 
        $(`
            <li>
                <input type="checkbox" class="checkbox">${novaTarefa}
            </li>
        `);
        novoItem.appendTo('ul');
        $('#tarefa').val('');
    })

    $('ul').on('click', '.checkbox', function() {
        $(this).parent().toggleClass('checked');
    })
})


