window.addEventListener("load", init);

let searching_part_heading = document.querySelector(".searching_part h1");
let input_placeholder = document.querySelector(".search input");
let tuong_lan_introduce_container = document.querySelector(
  ".tuong_lan_introduce_container"
);

let localProduct_page_eng = {
  searching_part_heading: "WHAT IS THE PRODUCT YOU WANT TO BUY",
  tuong_lan_introduce_container:
    "TUONG LAN ARGEX CO., LTD would like to sincerely thank you for your interest and always welcome you to our company.",
};

let list_product_in_LocalProduct_page = [
  {
    product_name: "Gạo huyết rồng",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_huyet_rong.jpg?t=2023-10-09T13%3A13%3A13.051Z",
  },

  {
    product_name: "Gạo 3 in 1",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_3in1.jpg?t=2023-10-09T13%3A13%3A32.692Z",
  },

  {
    product_name: "Gạo 504",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_504.jpg?t=2023-10-09T13%3A13%3A53.391Z",
  },

  {
    product_name: "Gạo Japonica",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_japonica.jpg?t=2023-10-09T13%3A14%3A11.491Z",
  },

  {
    product_name: "Gạo Jasmine",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_jasmine.jpg?t=2023-10-09T13%3A14%3A24.199Z",
  },

  {
    product_name: "Gạo Lứt",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_lut.jpg?t=2023-10-09T13%3A14%3A43.081Z",
  },

  {
    product_name: "Gạo nếp cái hoa vàng",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_nep_cai_hoa_vang.jpg?t=2023-10-09T13%3A15%3A03.333Z",
  },

  {
    product_name: "Gạo Nếp tím",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_nep_tim.jpg?t=2023-10-09T13%3A15%3A14.974Z",
  },

  {
    product_name: "Gạo ST25",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_ST25.jpg?t=2023-10-09T13%3A15%3A25.497Z",
  },

  {
    product_name: "Gạo tẻ hạt trung",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_te_hat_trung.jpg?t=2023-10-09T13%3A15%3A36.690Z",
  },

  {
    product_name: "Gạo KDM",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_KDM.jpg?t=2023-10-09T13%3A15%3A49.332Z",
  },

  {
    product_name: "Gạo Seng Cu",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_Seng_Cu.jpg?t=2023-10-09T13%3A16%3A00.164Z",
  },

  {
    product_name: "Gạo Lứt Japonica",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_Lut_Japonica.jpg?t=2023-10-09T13%3A16%3A19.596Z",
  },

  {
    product_name: "Gạo Lứt DT8",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_Lut_DT8.jpg?t=2023-10-09T13%3A16%3A31.004Z",
  },

  {
    product_name: "Gạo dẻo giống nhật...",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/each_rice_product.jpg?t=2023-10-09T13%3A16%3A49.021Z",
  },
];

let list_product_in_LocalProduct_page_eng = [
  {
    product_name: "Dragon blood rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_huyet_rong.jpg?t=2023-10-09T13%3A13%3A13.051Z",
  },

  {
    product_name: "3 in 1 rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_3in1.jpg?t=2023-10-09T13%3A13%3A32.692Z",
  },

  {
    product_name: "504 Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_504.jpg?t=2023-10-09T13%3A13%3A53.391Z",
  },

  {
    product_name: "Japonica Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_japonica.jpg?t=2023-10-09T13%3A14%3A11.491Z",
  },

  {
    product_name: "Jasmine Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_jasmine.jpg?t=2023-10-09T13%3A14%3A24.199Z",
  },

  {
    product_name: "Brown Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_lut.jpg?t=2023-10-09T13%3A14%3A43.081Z",
  },

  {
    product_name: "Yellow flower sticky rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_nep_cai_hoa_vang.jpg?t=2023-10-09T13%3A15%3A03.333Z",
  },

  {
    product_name: "Purple Sticky Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_nep_tim.jpg?t=2023-10-09T13%3A15%3A14.974Z",
  },

  {
    product_name: "ST25 Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_ST25.jpg?t=2023-10-09T13%3A15%3A25.497Z",
  },

  {
    product_name: "Medium grain plain rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_te_hat_trung.jpg?t=2023-10-09T13%3A15%3A36.690Z",
  },

  {
    product_name: "KDM Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_KDM.jpg?t=2023-10-09T13%3A15%3A49.332Z",
  },

  {
    product_name: "Seng Cu Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_Seng_Cu.jpg?t=2023-10-09T13%3A16%3A00.164Z",
  },

  {
    product_name: "Japonica Brown Rice",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_Lut_Japonica.jpg?t=2023-10-09T13%3A16%3A19.596Z",
  },

  {
    product_name: "Brown Rice DT8",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/Gao_Lut_DT8.jpg?t=2023-10-09T13%3A16%3A31.004Z",
  },

  {
    product_name: "Sticky rice like Japanese...",
    product_img:
      "https://cenrjrdducmjwprodjnw.supabase.co/storage/v1/object/public/hihi/each_rice_product.jpg?t=2023-10-09T13%3A16%3A49.021Z",
  },
];

let t = list_product_in_LocalProduct_page;

if (page_language == "ENG") {
  let title_page_product_name = document.querySelector("title");
  title_page_product_name.innerText = "Products";
  searching_part_heading.innerText =
    localProduct_page_eng.searching_part_heading;
  tuong_lan_introduce_container.innerText =
    localProduct_page_eng.tuong_lan_introduce_container;
  input_placeholder.placeholder = "Yellow flower sticky rice";

  list_product_in_LocalProduct_page = list_product_in_LocalProduct_page_eng;
} else {
  list_product_in_LocalProduct_page = t;
}

function init() {
  let get_list_product_container = document.querySelector(
    ".list_products_container"
  );
  let temp_render = "";

  for (let i = 0; i < list_product_in_LocalProduct_page.length; i++) {
    temp_render += `
    <div eachProductId="${i}" class="product">
    <img src="${list_product_in_LocalProduct_page[i].product_img}" alt="" />
    <div class="product_details">
      <div class="product_name_price">
        <div onclick="moveToPage()" class="product_name">${list_product_in_LocalProduct_page[i].product_name}</div>
        <div class="product_price"></div>
      </div>

      <div class="product_add_to_card">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </div>
    `;
  }

  get_list_product_container.innerHTML = temp_render;
}

function moveToPage() {
  let id_of_product =
    this.event.target.parentElement.parentElement.parentElement.getAttribute(
      "eachProductId"
    );

  console.log(id_of_product);
  localStorage.setItem("current_product", JSON.stringify(t[id_of_product]));

  localStorage.setItem(
    "current_product_eng",
    JSON.stringify(list_product_in_LocalProduct_page_eng[id_of_product])
  );
  window.location.href = "../EachProduct/EachProduct.html";
}
