// img_slider.js

function map_imgslider(map_num) { 
    $('.map_slider .map_sliders')
        .animate({
            marginLeft: -map_num*100 + '%'
        });
}

$(function() {
    var duration = 5000; 
    var slider_map_num = 0;
    
    setInterval(function(){ 
        slider_map_num++; 
        
        if(slider_map_num > 2) { 
            slider_map_num = 0;
        }
        console.log(map_imgslider);
        map_imgslider(slider_map_num);  
    }, duration);    
});

    