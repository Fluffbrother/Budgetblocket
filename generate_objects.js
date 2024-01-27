const objs = [
    {
        img: "./images/shirt_1.jpg",
        desc: "T-shirt Loose Fit",
        price: "99,00",
    },
    {
        img: "./images/shirt_2.webp",
        desc: "Pikétröja i bomull Regular Fit",
        price: "399,00",
    },
    {
        img: "./images/shirt_3.webp",
        desc: "Strukturstickad pikétröja Regular Fit",
        price: "399,00",
    },
    {
        img: "./images/shirt_4.webp",
        desc: "Pikétröja Regular Fit",
        price: "229,00",
    },
    {
        img: "./images/shirt_5.webp",
        desc: "Pikétröja Regular Fit",
        price: "449,00",
    },
    {
        img: "./images/shirt_6.webp",
        desc: "Rugbytröja i bomull Regular Fit",
        price: "329,00",
    },
    {
        img: "./images/shirt_7.webp",
        desc: "3-pack T-shirt Regular Fit",
        price: "229,00",
    },
    {
        img: "./images/shirt_8.jpg",
        desc: "T-shirt Loose Fit",
        price: "99,00",
    },
    {
        img: "./images/shirt_9.jpg",
        desc: "3-pack T-shirt Regular Fit",
        price: "229,00",
    },
    {
        img: "./images/shirt_10.webp",
        desc: "2-pack tanktop Regular Fit",
        price: "149,00",
    },
];

// Prints to STDOUT a list of items based off of the data in the 
// `objs` hashtable
for (const index in objs) {
    const element = objs[index];
    const html = `<div class="item">
    <a
        href="produkter/shirt_1.html"
        class="buy_img"
        target="_blank"
    >
        <img src="${element.img}" alt="shirt ${index}" />
    </a>
    <span class="item-desc">
        ${element.desc}
    </span>
    <span class="item-price">
        Pris: ${element.price} sek
    </span>
    <a
        href="produkter/shirt_1.html"
        class="buy_button"
        target="_blank"
    >
        Köp
    </a>
    <a
        href="https://maps.app.goo.gl/msHyrLp4MRJsgeuj9"
        class="map_button"
        target="_blank"
    >
        Till Butik
    </a>
</div>`;
    console.log(html);
}
