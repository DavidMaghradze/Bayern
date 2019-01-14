$( document ).ready(function() {
    // For Touch fix
    function watchForHover() {
        var hasHoverClass = false;
        var container = document.body;
        var lastTouchTime = 0;
    
        function enableHover() {
            // filter emulated events coming from touch events
            if (new Date() - lastTouchTime < 500) return;
            if (hasHoverClass) return;
    
            container.className += ' hasHover';
            hasHoverClass = true;
        }
    
        function disableHover() {
            if (!hasHoverClass) return;
    
            container.className = container.className.replace(' hasHover', '');
            hasHoverClass = false;
        }
    
        function updateLastTouchTime() {
            lastTouchTime = new Date();
        }
    
        document.addEventListener('touchstart', updateLastTouchTime, true);
        document.addEventListener('touchstart', disableHover, true);
        document.addEventListener('mousemove', enableHover, true);
    
        enableHover();
    }
    
    watchForHover();
    // end Touch Fix
    
    var screenSize = $(window).width()+17;

    // Topnav
    if(screenSize>1200) {
        $('.dropdown').hover(function(e){
            e.preventDefault();
    
            var $this = $(this);
          if ($this.find('.dropdown_menu').hasClass('show')) {
              $this.find('.dropdown_menu').removeClass('show');
              $this.find('.dropdown_menu').slideUp(300);
          } else {
              $this.find('.dropdown_menu').removeClass('show');
              $this.find('.dropdown_menu').slideUp(300);
             $this.find('.dropdown_menu').toggleClass('show');
             $this.find('.dropdown_menu').slideToggle(300);
          }
        })
    } else {
        $('.toggle').click(function(e){
            e.preventDefault();
            var $this = $(this);
            console.log($this.parent().parent().find('.dropdown_menu'));
            if ($this.parent().parent().find('.dropdown_menu').hasClass('show')) {
                $this.parent().parent().find('.dropdown_menu').removeClass('show');
                $this.removeClass('toggle-hide');
                $this.parent().parent().find('.dropdown_menu').slideUp(300);
            } else {
                $this.parent().parent().find('.dropdown_menu').removeClass('show');
                $this.parent().parent().find('.dropdown_menu').slideUp(300);
                $this.parent().parent().find('.dropdown_menu').toggleClass('show');
                $this.parent().parent().find('.dropdown_menu').slideToggle(300);
                $this.addClass('toggle-hide');
            }
        })
    }
    

    // Slider
    var sliderToSlick = function(){
        if(screenSize<=768) {
            $('.crush').removeClass('carousel-item');
            $('.newSlide').slick({
                dots: true
            });
        } else {
            $('.newSlide').slick('unslick');
            $('.crush').addClass('carousel-item');
        }
    }

    // Matches Card
    var matchesDesktop = function(){
        $('.matches__header-prev').click(function(){
            $('.matches__card--next').hide();
            $('.matches__header-next').removeClass('active');
            $('.matches__card--prev').fadeIn();
            $('.matches__header-prev').addClass('active');
        })

        $('.matches__header-next').click(function(){
            $('.matches__card--prev').hide();
            $('.matches__header-prev').removeClass('active');
            $('.matches__card--next').fadeIn();
            $('.matches__header-next').addClass('active');
        })
    }

    var matchesToSlick = function(){
        if(screenSize<=768) {
            $('.matches__inner').slick({
                dots: true,
                arrows: false
            });
        } else {
            $('.matches__inner').slick('unslick');
            matchesDesktop();
        }
    }

    if(screenSize>768) {
        matchesDesktop();
    }  else {
        matchesToSlick();
        sliderToSlick();
    }

    $(window).resize(function(){
        screenSize = $(window).width()+17;
        matchesToSlick();
        sliderToSlick();
    })

    // Topnav
    $('.topnav__hamburger').click(function(){
        $('.topnav__menu').slideToggle();
        $(this).toggleClass('show');
    })

    // Videos
    $('.videos .row').slick({
        arrows: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    })

    $('.slick-prev').html('<i class="fas fa-angle-left"></i>');
    $('.slick-next').html('<i class="fas fa-angle-right"></i>');

    // players 
    $('#goalscorers').show();

    var  showGoalscorers = function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $('#goalscorers').siblings().hide();
        $('#goalscorers').fadeIn();
    }

    var  showAssistants = function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $('#assistants').siblings().hide();
        $('#assistants').fadeIn();
    }

    var  showCards = function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        $('#cards').siblings().hide();
        $('#cards').fadeIn();
    }

    
    $('.goalscorers').click(showGoalscorers);
    $('.assistants').click(showAssistants);
    $('.cards').click(showCards);
});