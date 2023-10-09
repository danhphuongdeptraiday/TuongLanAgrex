window.addEventListener("load", init);

var list_product_vie = [
  {
    product_name: "Gạo Nếp cái hoa vàng",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_nep_cai_hoa_vang.jpg?t=2023-10-09T09%3A44%3A46.306Z",
  },

  {
    product_name: "Gạo Tẻ hạt trung",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_te_hat_trung.jpg?t=2023-10-09T09%3A45%3A52.332Z",
  },

  {
    product_name: "Gạo ST25",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_ST25.jpg?t=2023-10-09T09%3A46%3A16.150Z",
  },

  {
    product_name: "Gạo Jasmine",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_jasmine.jpg?t=2023-10-09T09%3A46%3A35.270Z",
  },

  {
    product_name: "Gạo Lứt",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_lut.jpg?t=2023-10-09T09%3A46%3A51.540Z",
  },
];

let list_product_eng = [
  {
    product_name: "Yellow Flower Sticky Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_nep_cai_hoa_vang.jpg?t=2023-10-09T09%3A44%3A46.306Z",
  },

  {
    product_name: "Medium Grain Te Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_te_hat_trung.jpg?t=2023-10-09T09%3A45%3A52.332Z",
  },

  {
    product_name: "ST25 Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_ST25.jpg?t=2023-10-09T09%3A46%3A16.150Z",
  },

  {
    product_name: "Jasmine Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_jasmine.jpg?t=2023-10-09T09%3A46%3A35.270Z",
  },

  {
    product_name: "Brown Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_lut.jpg?t=2023-10-09T09%3A46%3A51.540Z",
  },
];

let banner_establish = document.querySelector(".banner_container p");
let main_product_container_title = document.querySelector(
  ".main_product_container_title"
);
let product_description = document.querySelector(".product_description");
let more_detail_btn = document.querySelector(".more_specific_product h2");
let tuong_lan_introduce_container = document.querySelector(
  ".tuong_lan_introduce_container"
);
let product_title = document.querySelector(".product_title");

let main_page_eng = {
  banner_establish:
    "ESTABLISHED IN 2006, THE COMPANY IS THE PRIORITY CHOICE OF MANY FOREIGN IMPORTERS BESIDES RICE AND CEREALS PRODUCTS. QUALITY AND ORIGIN ARE THE BUSINESS FOUNDATIONS THAT WE HAVE BUILT, OPTIMIZED AND DEVELOPED TO BE ABLE TO PROVIDE CUSTOMERS WITH RELIABLE, HEALTHY PRODUCTS.",

  main_product_container_title: "OUR PRODUCTS",
  product_title: "Japonica rice",
  product_description:
    "Japonica rice is widely grown and consumed in East Asia, while in In most other regions, indica rice is the dominant rice variety.",
  more_detail_btn: "Detail",
  tuong_lan_introduce_container:
    "TUONG LAN ARGEX CO., LTD would like to sincerely thank you for your interest and always welcome you to our company.",
};
let h2 = `<h2 class="detailsButton">Chi Tiết</h2>`;

if (page_language == "ENG") {
  list_product_vie = list_product_eng;

  banner_establish.innerText = main_page_eng.banner_establish;
  main_product_container_title.innerText =
    main_page_eng.main_product_container_title;
  product_description.innerText = main_page_eng.product_description;
  more_detail_btn.innerText = main_page_eng.more_detail_btn;

  tuong_lan_introduce_container.innerText =
    main_page_eng.tuong_lan_introduce_container;
  product_title.innerText = main_page_eng.product_title;
  h2 = `<h2 class="detailsButton">Detail</h2>`;
}

function init() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
  }

  setInterval(function () {
    plusSlides(1);
  }, 2000);

  let right_product_container = document.querySelector(
    ".right_product_container"
  );
  let temp_HTML_Render_Product = "";
  for (let i = 0; i < list_product_vie.length; i++) {
    temp_HTML_Render_Product += `
    <div productId="${i}" class="single_right_product_container">
    <div class="single_right_product_container_img">
    <img src="${list_product_vie[i].product_img}" alt="" />
    </div>
    
    <!-- single_right_product_container_details -->
    <div class="single_right_product_container_details">
    <!-- title -->
    <h3 class="product_title">${list_product_vie[i].product_name}</h3>
    
    <!-- price -->
    
    <!-- button_see_more_description -->
    <div onclick="getEle()" class="more_specific_product">
      ${h2}
      <i
        style="margin-left: 10px"
        class="fa-solid fa-arrow-right"
      ></i>
    </div>
    </div>
    </div>
    `;
  }

  let t = `
<!-- single_right_product_container -->
          <div class="single_right_product_container">
            <div class="four_img_container">
            <div class="each_four_img">
                <img src="https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_huyet_rong.jpg?t=2023-10-09T10%3A04%3A52.083Z" alt="" />
              </div>
              <div class="each_four_img">
              <img src="https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_3in1.jpg?t=2023-10-09T10%3A05%3A14.999Z" alt="" />
              </div>
              <div class="each_four_img">
              <img src="https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_nep_tim.jpg?t=2023-10-09T10%3A05%3A33.155Z" alt="" />
              </div>
              <div class="each_four_img">
              <img src="https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_504.jpg?t=2023-10-09T10%3A05%3A51.170Z" alt="" />
              </div>
              </div>
              
              <div class="more_specific_see_more_product">
              ${h2}
              <i style="margin-left: 10px" class="fa-solid fa-arrow-right"></i>
              </div>
              </div>`;

  temp_HTML_Render_Product = temp_HTML_Render_Product + t;
  console.log(right_product_container);

  right_product_container.innerHTML = temp_HTML_Render_Product;
}

// console.log(list_product_vie);

function getEle() {
  let id_of_product =
    this.event.target.parentElement.parentElement.parentElement.getAttribute(
      "productid"
    );

  console.log(id_of_product);

  console.log(list_product_vie[id_of_product]);
  localStorage.setItem(
    "current_product",
    JSON.stringify(list_product_vie[id_of_product])
  );
  window.location.href = "./EachProduct/EachProduct.html";
}
