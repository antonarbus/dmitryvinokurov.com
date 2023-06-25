$('.gallery-thumbnails img').on('click', function () {
  $('#image').attr({ src: $(this).attr('src') })
  $('#dimmed').show()
  $('#image, #close, #next, #previous').show()
  $('.gallery-thumbnails, nav').hide()
  $('.gallery-thumbnails img').css('transform', 'scale("1.0")')
  $(this).css('transform', 'scale("1.1")')
})

$('#dimmed, #close').on('click', function () {
  $('#dimmed').hide()
  $('#image, #close, #next, #previous').hide()
  $('.gallery-thumbnails, nav').show()
})

$('#image').on('click', function () {
  SRC = $(this).attr('src')
  $('.gallery-thumbnails img').each(function () {
    if (SRC == $(this).attr('src')) {
      $('.gallery-thumbnails img').css('transform', 'scale("1.0")')
      if ($(this).next().length > 0) {
        $('#image').attr({ src: $(this).next().attr('src') })
        $(this).next().css('transform', 'scale("1.1")')
      } else {
        $('#image').attr({ src: $(this).siblings().first().attr('src') })
        $(this).siblings().first().css('transform', 'scale("1.1")')
      }
      return
    }
  })
})

$('#next').on('click', Right)

function Right() {
  SRC = $('#image').attr('src')
  $('.gallery-thumbnails img').each(function () {
    if (SRC == $(this).attr('src')) {
      $('.gallery-thumbnails img').css('transform', 'scale("1.0")')
      if ($(this).next().length > 0) {
        $('#image').attr({ src: $(this).next().attr('src') })
        $(this).next().css('transform', 'scale("1.1")')
      } else {
        $('#image').attr({ src: $(this).siblings().first().attr('src') })
        $(this).siblings().first().css('transform', 'scale("1.1")')
      }
      return
    }
  })
}
$('#previous').on('click', Left)

function Left() {
  SRC = $('#image').attr('src')
  $('.gallery-thumbnails img').each(function () {
    if (SRC == $(this).attr('src')) {
      $('.gallery-thumbnails img').css('transform', 'scale("1.0")')
      if ($(this).prev().length > 0) {
        $('#image').attr({ src: $(this).prev().attr('src') })
        $(this).prev().css('transform', 'scale("1.1")')
      } else {
        $('#image').attr({ src: $(this).siblings().last().attr('src') })
        $(this).siblings().last().css('transform', 'scale("1.1")')
      }
      return
    }
  })
}

$(document).on('keydown', function (event) {
  if ($('#image').is(':visible')) {
    if (event.keyCode == 39) {
      // right
      Right()
      $('#next').css({ color: 'white' })
      setTimeout(function () {
        $('#next').css({ color: '#c1c1c1' })
      }, 150)
    } else if (event.keyCode == 37) {
      // left
      Left()
      $('#previous').css({ color: 'white' })
      setTimeout(function () {
        $('#previous').css({ color: '#c1c1c1' })
      }, 150)
    } else if (event.keyCode == 27) {
      //ESC
      $('#dimmed').hide()
      $('#image, #close, #next, #previous').hide()
      $('.gallery-thumbnails, nav').show()
    }
  }
})
