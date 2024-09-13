document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });


    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");

            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInDown") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });

    const aSeekers = [
        "animate__bounce",
        "animate__swing",
        "animate__heartBeat",
        "animate__tada"
    ];

    const randomizeAnim = aSeekers[Math.floor(Math.random() * aSeekers.length)];

    const hbAnimation = document.querySelector('.greeting');
    hbAnimation.classList.add("animate__animated", randomizeAnim);

    document.getElementById('submit').addEventListener('click', function () {
        const balloonSelected = [...document.querySelectorAll('.form-check-input')].some(checkbox => checkbox.checked); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

        if(!balloonSelected) {
            const toastAppear = document.getElementById('liveToast');
            const toast = new bootstrap.Toast(toastAppear);
            toast.show();
        }
    });

    document.getElementById('toggleAll').addEventListener('click', function () {
        const checkboxes = document.querySelectorAll('.form-check-input');
        const checked = [...checkboxes].every(checkbox => checkbox.checked);

        checkboxes.forEach(checkbox => checkbox.checked = !checked);

        checkboxes.forEach(checkbox => {
            const element = document.getElementById(checkbox.id + 'Img');
            element.style.visibility = checkbox.checked ? "visible" : "hidden";
        });
    });

    const h1E = document.querySelector('.greeting');

    document.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.addEventListener('mouseover', function () {
            switch (checkbox.id) {
                case 'red':
                    h1E.style.color = 'red';
                    break;
                case 'green':
                    h1E.style.color = 'green';
                    break;
                case 'blue':
                    h1E.style.color = 'blue';
                    break;
            }
        });

        checkbox.addEventListener('mouseout', function () {
            h1E.style.color = 'gray';
        });
    });
});