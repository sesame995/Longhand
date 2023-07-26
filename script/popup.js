   $(function(){
    $('.blank').click(function(){
        $('#img2').fadeIn();//.show()
        $('#img1, #img3, #img4').fadeOut();//.show()
    });
    $('.line').click(function(){
        $('#img3').fadeIn();//.show()
        $('#img1, #img2, #img4').fadeOut();//.show()
    });
     $('.grid').click(function(){
        $('#img4').fadeIn();//.show()
        $('#img1, #img3, #img2').fadeOut();//.show()
    });
});