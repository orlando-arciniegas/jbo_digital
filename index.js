window.onload = (e) => {
    let btnNavbar = document.querySelector(".navbar-icon");
    let iconToggle = document.querySelector(".fa-ellipsis-h");
    btnNavbar.addEventListener('click', () => {
        iconToggle.classList.toggle('fa-times');
        iconToggle.classList.toggle("fa-ellipsis-h");
    });

    let barProgress = document.querySelector('.progress-bar');
    let divProgress = document.querySelector('.progress-div');
    let textProgress = document.querySelector('.progress-text');
    divProgress.addEventListener('click', function () {
        for (let width = 0; width <= 100; width++) {
            barProgress.style.width = `${width +'%'}`;
            barProgress.style.transition = '5s';
            barProgress.innerHTML = `${width +'%'}`;
            textProgress.innerHTML = "Así sera tu evolución con nosotros";
        }
    });

    const form = document.querySelector("#form");

    form.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const formData = {
        name: form.name.value,
        question: form.question.value,
    };

    const URL = `https://api.whatsapp.com/send?phone=5491137967706&text=Hola%20mi%20nombre%20es%20${formData.name}%20me%20gustaría%20hacer%20una%20consulta%20sobre:%20${formData.question}%20&source=&data=`;

    window.open(URL, "_blank");
    });
};

