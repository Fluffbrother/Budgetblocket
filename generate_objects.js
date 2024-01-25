const objs = [
  {
    img: "./assets/shirt_1.jpg",
    desc: "T-shirt Loose Fit",
    price: "99,00",
    url: "https://www2.hm.com/sv_se/productpage.0608945008.html",
  },
  {
    img: "./assets/shirt_2.webp",
    desc: "Pikétröja i bomull Regular Fit",
    price: "399,00",
    url: "https://www2.hm.com/sv_se/productpage.1209351001.html",
  },
  {
    img: "./assets/shirt_3.webp",
    desc: "Strukturstickad pikétröja Regular Fit",
    price: "399,00",
    url: "https://www2.hm.com/sv_se/productpage.1220022001.html",
  },
  {
    img: "./assets/shirt_4.webp",
    desc: "Pikétröja Regular Fit",
    price: "229,00",
    url: "https://www2.hm.com/sv_se/productpage.1201445001.html",
  },
  {
    img: "./assets/shirt_5.webp",
    desc: "Pikétröja Regular Fit",
    price: "449,00",
    url: "https://www2.hm.com/sv_se/productpage.1228024001.html",
  },
  {
    img: "./assets/shirt_6.webp",
    desc: "Rugbytröja i bomull Regular Fit",
    price: "329,00",
    url: "https://www2.hm.com/sv_se/productpage.1212670001.html",
  },
  {
    img: "./assets/shirt_7.webp",
    desc: "3-pack T-shirt Regular Fit",
    price: "229,00",
    url: "https://www2.hm.com/sv_se/productpage.0945531045.html",
  },
  {
    img: "./assets/shirt_8.jpg",
    desc: "T-shirt Loose Fit",
    price: "99,00",
    url: "https://www2.hm.com/sv_se/productpage.1003662053.html",
  },
  {
    img: "./assets/shirt_9.jpg",
    desc: "3-pack T-shirt Regular Fit",
    price: "229,00",
    url: "https://www2.hm.com/sv_se/productpage.0945531023.html",
  },
  {
    img: "./assets/shirt_10.webp",
    desc: "2-pack tanktop Regular Fit",
    price: "149,00",
    url: "https://www2.hm.com/sv_se/productpage.0649098002.html",
  },
];

for (const index in objs) {
  const element = objs[index];
  const html =
`<div class="item">
  <a
    href="${element.url}"
    class="buy_img"
    target="_blank"
  >
    <img src="${element.img}" alt="shirt ${index}" />
  </a>
  <span class="item-desc">${element.desc}</span>
  <span class="item-price">Pris: ${element.price} sek</span>
  <a
    href="${element.url}"
    class="buy_button"
    target="_blank"
  >
    Köp
  </a>
</div>`;
  console.log(html);
}
