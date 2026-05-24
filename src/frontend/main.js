import "./modules/particlebg.js"
import $ from 'jquery';

$(document).ready(function() {
    $(window).scroll(function() {
        $(".hide").each(function(i) {
            let objectBottom = $(this).position().top + $(this).outerHeight();
            let bottomWindow = $(window).scrollTop() + $(window).height();

            if (bottomWindow > objectBottom) {
                $(this).animate({'opacity':'1'}, 0.5);
            }
        })
    });
});