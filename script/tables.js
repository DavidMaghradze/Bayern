$(document).ready(function(){
    $('.tables__content').hide();
    $('.tables__europe').show();

    var activeToggle = function(element){
        element.addClass('active');
        element.siblings().removeClass('active');
    }

    $('.europe').click(function(){
        var element = $(this);
        activeToggle(element);

        $('.tables__europe').fadeIn();
        $('.tables__europe').siblings().hide();
    })

    $('.bundesliga').click(function(){
        var element = $(this);
        activeToggle(element);

        $('.tables__bundesliga').fadeIn();
        $('.tables__bundesliga').siblings().hide();
    })

    $('.cup').click(function(){
        var element = $(this);
        activeToggle(element);

        $('.tables__cup').fadeIn();
        $('.tables__cup').siblings().hide();
    })

    // Responsive Tables
    var screenSize = $(window).width()+17;

    console.log(screenSize);

    if(screenSize<= 576) {
        $('.tables__header ul li').hide();
        $('.tables__header ul .active').show();

        // var showTableHeader = function(){

        //     $('.tables__header ul .active').siblings().slideToggle();
        // }

        $('.tables__header-toggle').click(function(){
            $('.tables__header ul .active').siblings().slideToggle(0);
            $(this).toggleClass('tables__header-toggle-animation');
            $(this).toggleClass('top20');
            console.log($('.tables__header ul .active').siblings())
        })
    }
})