var imgs = document.querySelectorAll('.item__img');
for (var i = 0;i < imgs.length;i++) {
    targetImg = imgs[i];
    targetImg.addEventListener('click', function(e) {
        imgOriginalSrc = this.getAttribute('src');

        var bodyPage = document.getElementById('body');
        var imgWrapper = document.createElement('div');
        var imgSource = document.createElement('img');
        var imgClose = document.createElement('span');

        bodyPage.appendChild(imgWrapper);
        imgWrapper.appendChild(imgSource);
        imgWrapper.appendChild(imgClose);

        imgWrapper.className = 'image-full-screen-viewer';
        imgSource.className = 'image-source';
        imgClose.className = 'image-close';
        imgClose.textContent = 'x';
        imgSource.setAttribute('src', imgOriginalSrc);     
        
        imgClose.addEventListener('click', function() {
            bodyPage.removeChild(imgWrapper);
        });
    });
};

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.028486732905726,73.29739090599446],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        });
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');
        let myPlacemark = new ymaps.Placemark([55.028486732905726,73.29739090599446], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/where/marker.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40]
        });
    myMap.geoObjects
        .add(myPlacemark);
        // .add(myPlacemarkWithContent);
});