function showNavItems() {
  const isNavItemsShown = document.querySelector('.shown-on-phone')
  if (isNavItemsShown) {
    document.querySelector('.nav-links').classList.remove("shown-on-phone")
  } else {
    document.querySelector('.nav-links').classList.add("shown-on-phone")
  }
}
