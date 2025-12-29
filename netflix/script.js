const faqs = document.querySelectorAll(".faq-box1");

faqs.forEach((faq) => {
    faq.querySelector(".question").addEventListener("click", () => {

        faqs.forEach((item) => {
            if (item !== faq) {
                item.classList.remove("active")
            }
        })
        faq.classList.toggle("active");

    })
})
