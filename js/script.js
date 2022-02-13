var imgs = document.querySelectorAll('.item__img');
for (var i = 0;i < imgs.length;i++) {
    targetImg = imgs[i];
    targetImg.addEventListener('click', function() {
        this.classList.toggle('item__img-fs')
    })
}