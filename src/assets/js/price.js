const toggle = document.querySelector("#pricing-387 .cs-toggle");
        const option1 = document.querySelector("#pricing .cs-toggle-group #cs-option1");
        const optionGroup = Array.from(document.querySelectorAll('.cs-option-group'))

        toggle.addEventListener('click', (e) => { 
            for (const item of optionGroup) {
                item.classList.toggle("option2-active");
            }
            toggle.classList.toggle("active");
        });
        option1.addEventListener('click', (e) => { 
            for (const item of optionGroup) {
                item.classList.remove("option2-active");
            }
            toggle.classList.remove("active");
        });
                                