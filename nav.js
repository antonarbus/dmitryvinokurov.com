function showNavItems() {
  const isNavItemsShown = document.querySelector('.shown-on-phone')
  if (isNavItemsShown) {
    $(".nav-links").show()
    $(".nav-links").slideUp(function() {
      document.querySelector('.nav-links').classList.remove("shown-on-phone")
    })
  } else {
    $(".nav-links").hide()
    document.querySelector('.nav-links').classList.add("shown-on-phone")
    $(".nav-links").slideDown()
  }
}
