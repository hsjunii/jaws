// img_slider.js

function noti_slider(noti_num) { 
    $('.slider1 .sliders1')
        .animate({
            marginLeft: -noti_num*100 + '%'
        });
}

$(function() {
    var duration = 5000; 
    var slider_noti_num = 0;
    
    setInterval(function(){ 
        slider_noti_num++; 
        
        if(slider_noti_num > 2) { 
            slider_noti_num = 0;
        }

        noti_slider(slider_noti_num);  
    }, duration);    
});

    