// $('input[type="submit]').submit('disabled', 'disabled');
$('#btnSubmit').prop('disabled', 'disabled');
$(':input[type="text"]').keyup(function() {
if($(this).val() !== '') {
    $(':input[type="submit"]').prop('disabled', false);
}
});
$('<div></div>').appendTo('body');
$('#btnSubmit').on('click', function(e){
    e.preventDefault();
    let li =$('<li></li>');
    li.append($("input:text").val());
    li.hover(function() {
        li.css({background: 'grey', 'border-radius': '5px'});

    });
    $('div').append(li);
    alert($("input:text").val());

    $('li').click(function() {
        let r = Math.floor(Math.random() * 255); 
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        li.css("color", `rgb(${r}, ${g}, ${b})`);
    })
});
