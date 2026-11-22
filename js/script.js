// Image-map coordinates use the original 800px-wide image.
// Recalculate them from the originals so resizing does not accumulate rounding errors.
const venueImage = document.querySelector("#venue-image");
const mapAreas = document.querySelectorAll("map area");

function resizeImageMap() {
  const scale = venueImage.clientWidth / 800;

  mapAreas.forEach(function (area) {
    const originalCoordinates = area.dataset.coords.split(",");
    const scaledCoordinates = originalCoordinates.map(function (coordinate) {
      return Math.round(Number(coordinate) * scale);
    });

    area.coords = scaledCoordinates.join(",");
  });
}

venueImage.addEventListener("load", resizeImageMap);
window.addEventListener("resize", resizeImageMap);
resizeImageMap();
