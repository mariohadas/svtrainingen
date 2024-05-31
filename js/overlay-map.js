document.addEventListener("DOMContentLoaded", function() {
    const legendeElement1 = document.querySelector('.legende-element1');
    const legendeElement3 = document.querySelector('.legende-element3');
    const legendeElement5 = document.querySelector('.legende-element5');
    const legendeElement7 = document.querySelector('.legende-element7');
    const overlayMap1 = document.querySelector('.overlay-map.overlay-map1');
    const overlayMap2 = document.querySelector('.overlay-map.overlay-map2');
    const overlayMap3 = document.querySelector('.overlay-map.overlay-map3');
    const overlayMap4 = document.querySelector('.overlay-map.overlay-map4');
    let activeOverlayMap = null;

    // Hoverfunktion
    function handleMouseEvents(legendeElement, overlayMap) {
        legendeElement.addEventListener('mouseover', function() {
            if (!activeOverlayMap) {
                overlayMap.classList.add('is-active-map');
            }
        });

        legendeElement.addEventListener('mouseout', function() {
            if (!activeOverlayMap) {
                overlayMap.classList.remove('is-active-map');
            }
        });
    }

    // Nach klick display map always
    function lockMap(legendeElement, overlayMap) {
        legendeElement.addEventListener('click', function() {
            // Remove 'is-active-map' class from all overlay maps
            document.querySelectorAll('.overlay-map').forEach(function(map) {
                map.classList.remove('is-active-map');
            });
            // Add 'is-active-map' class to the corresponding overlay map
            overlayMap.classList.add('is-active-map');
            // Update the active overlay map
            activeOverlayMap = overlayMap;
        });
    }

    // verhaltensabhängigkeiten
    handleMouseEvents(legendeElement1, overlayMap1);
    handleMouseEvents(legendeElement3, overlayMap2);
    handleMouseEvents(legendeElement5, overlayMap3);
    handleMouseEvents(legendeElement7, overlayMap4);


    lockMap(legendeElement1, overlayMap1);
    lockMap(legendeElement3, overlayMap2);
    lockMap(legendeElement5, overlayMap3);
    lockMap(legendeElement7, overlayMap4);
});
