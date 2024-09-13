document.addEventListener('keypress', (event) => {

    switch(event.key) {
        case "1":
            document.querySelector('input').value = "M4artynasБ";
            document.querySelector('input[placeholder="Your email"]').value = "M4artynas";
            document.querySelector('input[placeholder="Domain"]').value = "tgsl";;
            document.querySelector('.dropdown__field').click();

            setTimeout(() => {
                const org = document.querySelector('.dropdown__list-item:nth-child(2)').click();
            }, 500);

            // const sutikimas = document.querySelector('.icon.icon-check.checkbox__check').click();
            const salygos = document.querySelector('.login-form__terms-conditions-underline').click();
            break;

        case "2":
            const salygostxt = document.querySelector('.terms-and-conditions__text-content'); // Replace with your CSS selector
            //slank.scrollTop = slank.scrollHeight;
            salygostxt.style.fontSize = "2px"; 
    }

});






