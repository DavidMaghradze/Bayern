$(document).ready(function(){
    $('.profile-edit__header').click(function(){
        $('.profile-edit__header i').toggleClass('rotate');
        $('.register__form').slideToggle('fast');
    })
})