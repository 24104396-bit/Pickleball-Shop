```javascript
/* =========================
   DANH SÁCH SẢN PHẨM
========================= */

const products = {

    joola: {
        name: "Vợt Joola",
        price: 450000,
        image: "votjoola.jpg"
    },

    wika: {
        name: "Vợt Wika",
        price: 650000,
        image: "votwika.jpg"
    },

    proton: {
        name: "Vợt Proton",
        price: 1200000,
        image: "votproton.jpg"
    }

};


/* =========================
   LẤY CÁC PHẦN TỬ HTML
========================= */

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

const image =
    document.getElementById("image");


/* =========================
   ĐỊNH DẠNG TIỀN
========================= */

function formatMoney(number) {

    return number.toLocaleString("vi-VN");

}


/* =====================================================
   CHỨC NĂNG THEO YÊU CẦU BÀI TẬP
   UPDATE
===================================================== */

function update(element) {

    /*
       Kiểm tra xem sự kiện có hoạt động hay không
    */

    console.log("Mouse over image");


    /*
       In ALT của hình ảnh
    */

    console.log("Alt:", element.alt);


    /*
       In SOURCE của hình ảnh
    */

    console.log("Source:", element.src);


    /*
       Thay đổi văn bản của phần tử có id="image"
    */

    document.getElementById("image").setAttribute(
        "data-text",
        element.alt
    );


    /*
       Thay đổi tên sản phẩm
    */

    document.getElementById("productName").textContent =
        element.alt;


    /*
       Thay đổi hình nền của phần tử có id="image"
    */

    document.getElementById("image").style.backgroundImage =
        "url('" + element.src + "')";


    /*
       Làm hình nền hiển thị đẹp
    */

    document.getElementById("image").style.backgroundSize =
        "cover";

    document.getElementById("image").style.backgroundPosition =
        "center";

}


/* =====================================================
   CHỨC NĂNG THEO YÊU CẦU BÀI TẬP
   UNDO
===================================================== */

function undo() {

    /*
       Kiểm tra sự kiện
    */

    console.log("Mouse out image");


    /*
       Trả lại tên sản phẩm ban đầu
    */

    document.getElementById("productName").textContent =
        "Vợt Joola";


    /*
       Trả hình nền về trạng thái ban đầu
       url("")
    */

    document.getElementById("image").style.backgroundImage =
        "url('')";


    /*
       Xóa thuộc tính phụ
    */

    document.getElementById("image").removeAttribute(
        "data-text"
    );

}


/* =========================
   CHỨC NĂNG 1
   CHỌN SẢN PHẨM
========================= */

productSelect.addEventListener(
    "change",
    function () {

        const selectedProduct =
            products[this.value];


        productName.textContent =
            selectedProduct.name;


        productPrice.textContent =
            "Giá: " +
            formatMoney(selectedProduct.price) +
            " VNĐ";


        productImage.src =
            selectedProduct.image;


        productImage.alt =
            selectedProduct.name;

    }
);


/* =========================
   CHỨC NĂNG 2
   TÍNH TIỀN
========================= */

document
    .getElementById("calculateBtn")
    .addEventListener(
        "click",
        function () {

            const selectedProduct =
                products[productSelect.value];


            const quantity =
                Number(quantityInput.value);


            /*
               KIỂM TRA SỐ LƯỢNG
            */

            if (
                quantity < 1 ||
                isNaN(quantity)
            ) {

                alert(
                    "Vui lòng nhập số lượng lớn hơn 0."
                );

                return;
            }


            /*
               TÍNH TIỀN HÀNG
            */

            const subtotal =
                selectedProduct.price *
                quantity;


            let discount = 0;


            /*
               GIẢM GIÁ 10%
               Từ 500.000 VNĐ
            */

            if (subtotal >= 500000) {

                discount =
                    subtotal * 0.10;

            }


            /*
               TIỀN PHẢI TRẢ
            */

            const total =
                subtotal - discount;


            /*
               HIỂN THỊ
            */

            subtotalElement.textContent =
                formatMoney(subtotal);

            discountElement.textContent =
                formatMoney(discount);

            totalElement.textContent =
                formatMoney(total);

        }
    );


/* =========================
   CHỨC NĂNG 3
   ĐỔI MÀU GIAO DIỆN
========================= */

const colorButtons =
    document.querySelectorAll(".color-btn");


colorButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                /*
                   XÓA MÀU CŨ
                */

                document.body.classList.remove(
                    "theme-blue",
                    "theme-pink",
                    "theme-yellow"
                );


                /*
                   LẤY MÀU
                */

                const color =
                    this.dataset.color;


                /*
                   THÊM MÀU MỚI
                */

                document.body.classList.add(
                    "theme-" + color
                );

            }
        );

    }
);


/* =========================
   CHỨC NĂNG 4
   HIỂN THỊ BẢNG GIÁ
========================= */

document
    .getElementById("priceBtn")
    .addEventListener(
        "click",
        function () {

            const priceList =
                document.getElementById(
                    "priceList"
                );


            priceList.innerHTML = `

                <ol>

                    <li>
                        Vợt Joola -
                        ${formatMoney(
                            products.joola.price
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

                    <li>
                        Vợt Proton -
                        ${formatMoney(
                            products.proton.price
                        )}
                        VNĐ
                    </li>

                </ol>

            `;

        }
    );
```
