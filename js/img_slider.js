// img_slider.js

function img_slider(img_num) { 
    $('.slider .sliders')
        .animate({
            marginLeft: -img_num*100 + '%'
        });
}

$(function() {
    var duration = 5000; 
    var slider_num = 0;
    
    setInterval(function(){ 
        slider_num++; 
        
        if(slider_num > 2) { 
            slider_num = 0;
        }

        img_slider(slider_num); 

        
        $('.slider_indicator li a') 
            .removeClass('active');
            
        $('.slider_indicator li') 
            .eq(slider_num)
            .find('a')
            .addClass('active');
    }, duration);    
});

    