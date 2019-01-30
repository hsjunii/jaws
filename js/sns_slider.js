// sns_slider.js

function sns_slider(sns_num) { 
    $('.sns_slide .sns_slider')
        .animate({
            marginLeft: -sns_num*400 + 'px'
        });
}

$(function() {    
    var slider_num_sns = 0;    
    
    setInterval(function(){ 
        slider_num_sns++;   

        if(slider_num_sns > 4) {
            slider_num_sns = 0;
        }
        sns_slider(slider_num_sns);
    }, 5000);    
});