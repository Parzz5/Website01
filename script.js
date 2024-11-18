document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('add-image-button');
    const imageFileInput = document.getElementById('image-file');
    const imageContainer = document.getElementById('image-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightbox = document.getElementById('close-lightbox');

    // Menambahkan event listener pada tombol + untuk memicu input file
    button.addEventListener('click', () => {
        imageFileInput.click();
    });

    // Menangani perubahan input file
    imageFileInput.addEventListener('change', () => {
        const file = imageFileInput.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            // Setelah file dibaca, tampilkan gambar di galeri
            reader.onload = () => {
                const newImage = document.createElement('img');
                newImage.src = reader.result;
                newImage.alt = 'Gambar Ditambahkan';
                newImage.addEventListener('click', () => {
                    // Ketika gambar diklik, tampilkan gambar dalam lightbox
                    lightbox.style.display = 'flex';
                    lightboxImage.src = reader.result;
                });
                imageContainer.appendChild(newImage);
            };

            // Membaca file gambar sebagai URL data
            reader.readAsDataURL(file);

            // Kosongkan input file agar bisa digunakan lagi
            imageFileInput.value = '';
        } else {
            alert('Pilih file gambar yang valid!');
        }
    });

    // Menutup lightbox ketika tombol close ditekan
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Menutup lightbox jika area di luar gambar diklik
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});