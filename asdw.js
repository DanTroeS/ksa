document.addEventListener("DOMContentLoaded", function () {
    const genderBoxes = document.querySelectorAll(".gender-box");

    genderBoxes.forEach(box => {
        box.addEventListener("click", function () {
            genderBoxes.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const genderBoxes = document.querySelectorAll(".gender-box");
    const modal = document.getElementById("family-modal");
    const addFamilyBtn = document.querySelector(".add-family-btn");
    const closeModalBtn = document.querySelector(".close-modal");
    const fileInput = document.getElementById("file-input");
    const uploadedImage = document.getElementById("uploaded-image");
    const addPhotoBtn = document.querySelector(".add-photo-btn");

    // Выбор пола
    genderBoxes.forEach(box => {
        box.addEventListener("click", function () {
            genderBoxes.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Открытие модального окна
    addFamilyBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Запуск загрузки фото только по кнопке
    addPhotoBtn.addEventListener("click", function () {
        fileInput.click();
    });

    // Отображение загруженного фото
    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadedImage.src = e.target.result;
                uploadedImage.hidden = false;
            };
            reader.readAsDataURL(file);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const avatarUpload = document.getElementById("avatar-upload");
    const avatarImg = document.getElementById("avatar-img");
    const saveBtn = document.querySelector(".save-btn");
    const contestBtn = document.querySelector(".submit-btn");
    const themeToggle = document.querySelector(".theme-toggle");

    // Загрузка нового аватара
    avatarUpload.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                avatarImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Сохранение данных
    saveBtn.addEventListener("click", function () {
        alert("Изменения сохранены!");
    });

    // Запись на конкурс
    contestBtn.addEventListener("click", function () {
        const contest = document.getElementById("contest").value;
        const date = document.getElementById("contest-date").value;
        const time = document.getElementById("contest-time").value;
        const people = document.getElementById("people-count").value;

        if (!date || !time) {
            alert("Выберите дату и время!");
            return;
        }

        alert(`Вы записались на ${contest} \nДата: ${date} \nВремя: ${time} \nЧеловек: ${people}`);
    });

    // Переключение темы (светлая/темная)
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const registerBtn = document.querySelector(".register-btn");

    // Переключение темной/светлой темы
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
    });

    // Запись на конкурс
    registerBtn.addEventListener("click", function () {
        alert("Вы записаны на конкурс!");
    });

    // Переключение изображений (можно заменить на массив реальных изображений)
    const images = ["contest-image.jpg", "contest-image2.jpg", "contest-image3.jpg"];
    let currentImageIndex = 0;
    const contestImage = document.querySelector(".contest-image");

    document.querySelector(".left-btn").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        contestImage.src = images[currentImageIndex];
    });

    document.querySelector(".right-btn").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        contestImage.src = images[currentImageIndex];
    });
});





