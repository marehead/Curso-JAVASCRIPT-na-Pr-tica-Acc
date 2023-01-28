/*Scroll to top when arrow up clicked BEGIN*/ 
$(window).ready(() => {
  $(window).scroll(() => {
    let height = $(window).scrollTop();
    console.log(height);
    height > 100 ? $('#back2Top').fadeIn() : $('#back2Top').fadeOut();
  });

  $('#back2Top').click((event) => {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })
});