function showNavItems() {
  const navLinks = $(".nav-links")
  const navItemsShownOnPhone = navLinks.hasClass("shown-on-phone")
  
  if (navItemsShownOnPhone) {
    navLinks.show()
    navLinks.slideUp(function() {
      navLinks.removeClass("shown-on-phone")
    })
  } else {
    navLinks.hide()
    navLinks.addClass("shown-on-phone")
    navLinks.slideDown()
  }
}
