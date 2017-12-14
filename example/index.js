var panorama, viewer, container, infospot;
var containerBaseWidth = 700;
var containerBaseHeight = 400;
var deltaSize = 100;

container = document.querySelector("#container");

panorama = new PANOLENS.ImagePanorama(
  "https://hybridranger.github.io/panolens360/images/Image2.jpg"
);

viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);
