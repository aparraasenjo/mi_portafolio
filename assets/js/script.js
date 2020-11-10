$(function () {
    $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
        $("a").click(function(event) {
                if (this.hash !== "") {
                event.preventDefault();
                var gato = this.hash;
                $('html, body').animate({
                scrollTop: $(gato).offset().top
                }, 800, function(){
                window.location.hash = gato;
                });
                }
            });
    $('body').popover({
        selector: '[data-popover]',
        trigger: 'hover',
        placement: 'left',
        delay: {
            show: 10,
            hide: 800,
            }
        });    
})