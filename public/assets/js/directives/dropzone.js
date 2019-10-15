app.directive('dropZone', function() {
  return function(scope, element, attrs) {
    element.dropzone({
        url: "/upload",
        maxFilesize: 100,
        paramName: "uploadfile",
        maxThumbnailFilesize: 5
    });
  }
});
