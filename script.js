const products = {

    franklin: {
        name: "Vợt Franklin",
        price: 550000,
        image: "votfranklin.png"
    },

    joola: {
        name: "Vợt Joola",
        price: 450000,
        image: "votjoola.jpg"
    },

    loco: {
        name: "Vợt Loco",
        price: 700000,
        image: "votloco.webp"
    },

    proton: {
        name: "Vợt Proton",
        price: 1200000,
        image: "votproton.jpg"
    },

    rpm: {
        name: "Vợt RPM",
        price: 850000,
        image: "votrpm.webp"
    },

    wika: {
        name: "Vợt Wika",
        price: 650000,
        image: "votwika.jpg"
    }

};


const productSelect =
    document.getElementById("productSelect");

const quantityInput =
    document.getElementById("quantity");

const productImage =
    document.getElementById("productImage");

const productName =
    document.getElementById("productName");

const productPrice =
    document.getElementById("productPrice");

const subtotalElement =
    document.getElementById("subtotal");

const discountElement =
    document.getElementById("discount");

const totalElement =
    document.getElementById("total");

const imageText =
    document.getElementById("imageText");

const imageBox =
    document.getElementById("image");


function formatMoney(number) {

    return number.toLocaleString("vi-VN");

}


function update(element) {

    console.log("Mouse over / focus event");

    console.log("Alt:", element.alt);

    console.log("Source:", element.src);

    imageText.textContent =
        element.alt;

    imageBox.style.backgroundImage =
        "url('" + element.src + "')";

}


function undo() {

    console.log("Mouse leave / blur event");

    imageBox.style.backgroundImage =
        "none";

    imageText.textContent =
        "Di chuột qua hoặc dùng phím Tab vào hình ảnh.";

}


function selectImage(element) {

    console.log("Image selected:", element.alt);

    productImage.src =
        element.src;

    productImage.alt =
        element.alt;

    imageText.textContent =
        element.alt;

}


function addTabFocus() {

    console.log("Page loaded successfully");

    const images =
        document.querySelectorAll(".thumbnail");

    for (
        let i = 0;
        i < images.length;
        i++
    ) {

        images[i].setAttribute(
            "tabindex",
            "0"
        );

        images[i].setAttribute(
            "role",
            "button"
        );

        console.log(
            "Tabindex added to image " +
            (i + 1)
        );

        images[i].addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    selectImage(this);

                    console.log(
                        "Keyboard selected:",
                        this.alt
                    );

                }

            }
        );

    }

}


window.addEventListener(
    "load",
    addTabFocus
);


productSelect.addEventListener(
    "change",
    function() {

        const selectedProduct =
            products[this.value];

        productName.textContent =
            selectedProduct.name;

        productPrice.textContent =
            "Giá: " +
            formatMoney(
                selectedProduct.price
            ) +
            " VNĐ";

        productImage.src =
            selectedProduct.image;

        productImage.alt =
            selectedProduct.name;

        console.log(
            "Product changed:",
            selectedProduct.name
        );

    }
);


document
    .getElementById("calculateBtn")
    .addEventListener(
        "click",
        function() {

            const selectedProduct =
                products[productSelect.value];

            const quantity =
                Number(quantityInput.value);

            if (
                quantity < 1 ||
                isNaN(quantity)
            ) {

                alert(
                    "Vui lòng nhập số lượng lớn hơn 0."
                );

                quantityInput.focus();

                return;

            }


            const subtotal =
                selectedProduct.price *
                quantity;


            let discount = 0;


            if (subtotal >= 500000) {

                discount =
                    subtotal * 0.10;

            }


            const total =
                subtotal - discount;


            subtotalElement.textContent =
                formatMoney(subtotal);

            discountElement.textContent =
                formatMoney(discount);

            totalElement.textContent =
                formatMoney(total);


            console.log(
                "Calculation completed"
            );

        }
    );


const colorButtons =
    document.querySelectorAll(".color-btn");


colorButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                document.body.classList.remove(
                    "theme-blue",
                    "theme-pink",
                    "theme-yellow"
                );


                const color =
                    this.dataset.color;


                document.body.classList.add(
                    "theme-" + color
                );


                console.log(
                    "Theme changed to:",
                    color
                );

            }
        );

    }
);


document
    .getElementById("priceBtn")
    .addEventListener(
        "click",
        function() {

            const priceList =
                document.getElementById(
                    "priceList"
                );


            priceList.innerHTML = `

                <ol>

                    <li>
                        Vợt Franklin -
                        ${formatMoney(
                            products.franklin.price
                        )}
                        VNĐ
                    </li>

                    <li>
                        Vợt Joola -
                        ${formatMoney(
                            products.joola.price
                        )}
                        VNĐ
                    </li>

                    <li>
                        Vợt Loco -
                        ${formatMoney(
                            products.loco.price
                        )}
                        VNĐ
                    </li>

                    <li>
                        Vợt Proton -
                        ${formatMoney(
                            products.proton.price
                        )}
                        VNĐ
                    </li>

                    <li>
                        Vợt RPM -
                        ${formatMoney(
                            products.rpm.price
                        )}
                        VNĐ
                    </li>

                    <li>
                        Vợt Wika -
                        ${formatMoney(
                            products.wika.price
                        )}
                        VNĐ
                    </li>

                </ol>

            `;


            console.log(
                "Price list displayed: 6 products"
            );

        }
    );
