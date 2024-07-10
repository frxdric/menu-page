const menu = [
      {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `Fluffy panackes served with fruit medley and topped with caramel.`,
      },
      {
        id: 2,
        title: "Angus Burger",
        category: "lunch",
        price: 18.99,
        img: "./images/item-2.jpeg",
        desc: `Angus beef burger with bacon,lettuce and special burger sauce. served with fries. `,
      },
      {
        id: 3,
        title: "jumbo crab cake",
        category: "dinner",
        price: 29.95,
        img: "./images/item-4.jpg",
        desc: `maryland-style jumbo lump crab cake served with house made tartar sauce.`,
      },
      {
        id: 4,
        title: "buttermilk chicken & waffle",
        category: "breakfast",
        price: 23.99,
        img: "./images/item-6.jpg",
        desc: `Fried chicken tenders  served over a waffle with maple butter syrup.`,
      },
      {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 18.00,
        img: "./images/item-5.jpeg",
        desc: `Angus burger topped with fried egg, lettuce, mayo, tomato and swiss cheese.`,
      },
      {
        id: 6,
        title: "cheesesteak egg roll",
        category: "lunch",
        price: 18.99,
        img: "./images/item-9.jpg",
        desc: `shredded steak and provolone cheese in egg rolls. Served with sweet chili sauce.`,
      },
      {
        id: 7,
        title: "bacon egg/cheese biscuit",
        category: "breakfast",
        price: 12.99,
        img: "./images/item-7.jpeg",
        desc: `Biscuit with fried egg, american cheese, turkey or pork bacon and lettuce. `,
      },
      {
        id: 8,
        title: "honey glazed lamb chops",
        category: "dinner",
        price: 31.99,
        img: "./images/item-3.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "blackened salmon",
        category: "dinner",
        price: 28.99,
        img: "./images/item-8.jpg",
        desc: `Blackened Salmon with sauteed asparagus and garlic mash potatoes.`,
      },
      {
        id: 10,
        title: "steak",
        category: "dinner",
        price: 30.99,
        img: "./images/item-10.jpeg",
        desc: `steak with in house glaze and served with smoked asparagus.`,
      },
      {
      id: 11,
      title: "Avacado Toast",
      category: "breakfast",
      price: 22.99,
      img:  "./images/item-11.jpg",
      desc: `Avacado toast with poached eggs and goat cheese with aleppo pepper`,
    },
    ];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
