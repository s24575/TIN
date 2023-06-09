$(document).ready(function () {
  var form = $('#photo-form');
  form.hide();
  var currentAlbum = null;

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/albums',
    method: 'GET',
    success: function (albums) {
      albums.forEach(function (album) {
        var galleryItem = $('<div class="gallery-item"></div>');
        galleryItem.append('<h3>' + album.title + '</h3>');
        galleryItem.data('albumId', album.id);
        $('.titles').append(galleryItem);
      });
    }
  });

  $(document).on('click', '.gallery-item', function () {
    var albumId = $(this).data('albumId');
    var gallery = $(this).closest('.gallery');
    var titles = $(this).closest('.titles');

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/photos',
      method: 'GET',
      data: { albumId: albumId },
      success: function (photos) {
        titles.empty();

        var galleryItem = $('<div class="gallery-item"></div>');
        galleryItem.append('<h3>' + photos[0].albumId + ': ' + photos[0].title + '</h3>');
        titles.append(galleryItem);

        photos.forEach(function (photo) {
          var link = $(`<a class="example-image-link" href="${photo.url}" data-lightbox="example"></a>`)
          var thumbnail = $('<img class="example-image" src="' + photo.thumbnailUrl + '" alt="' + photo.title + '">');
          link.append(thumbnail);
          gallery.append(link);
        });

        currentAlbum = albumId;
        form.show();
      }
    });
  });

  form.submit(function (event) {
    event.preventDefault();

    var albumId = currentAlbum;
    var title = $('#photo-title').val();
    var url = $('#photo-url').val();

    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/photos',
      method: 'POST',
      data: {
        albumId: albumId,
        title: title,
        url: url
      },
      success: function (response) {
        console.log('Image has been added:', response);
      }
    });
  });
});