$(document).ready(function() {
    $(window).scroll( function(){
        $('.each-container').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.gallery-outer-container').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},800);
            }
        }); 
    });
});