function showNavItems() {
  const navLinksOnPhone = $(".phone-nav-links")
  const isHidden = navLinksOnPhone.is(':hidden')
  if (isHidden) {
    navLinksOnPhone.slideDown()
  } else {
    navLinksOnPhone.slideUp()
  }
}
