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