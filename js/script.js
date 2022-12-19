$(document).ready(function() {
    $('.nav-icon').click(function (e) {
        e.preventDefault();
        $('.navbar').addClass('active')
        $('.cover').addClass('active')
    })
    $('.cover').click(function (e) {
        e.preventDefault();
        $('.navbar').removeClass('active')
        $('.cover').removeClass('active')
    })
    $('.selling-title li').click(function(e) {
        e.preventDefault();
        $('.selling-title li').removeClass('active')
        $(this).addClass('active')

        let id_top_sell = $(this).children('a').attr('href')
        $('.selling-items.'+id_top_sell).show()
        $('.selling-items:not(.'+id_top_sell+')').hide()

        return false
    })
})