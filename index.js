// New Releases
let newReleases = [
  {
    img: "/images/assets/image4.png",
    title: "Trapsoul",
    subTitle: "Bryson Tiller",
    text:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
  {
    img: "/images/assets/image4.png",
    title: "Trapsoul",
    subTitle: "Bryson Tiller",
    text:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
  {
    img: "/images/assets/image4.png",
    title: "Trapsoul",
    subTitle: "Bryson Tiller",
    text:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
  {
    img: "/images/assets/image4.png",
    title: "Trapsoul",
    subTitle: "Bryson Tiller",
    text:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
  {
    img: "/images/assets/image4.png",
    title: "Trapsoul",
    subTitle: "Bryson Tiller",
    text:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
];
$(document).ready(function () {
  // Grab Carousel Container
  let carousel = document.querySelector(".carousel");

  window.onload = function () {
    //   Map Array and return card per object
    newReleases.map((item) => {
      let cardContainer = document.createElement("div");
      cardContainer.classList.add("card-container");

      let card = document.createElement("div");
      card.classList.add("card");

      let imageContainer = document.createElement("div");
      imageContainer.classList.add("album-container");

      let contentContainer = document.createElement("div");
      contentContainer.classList.add("content-container");

      let image = document.createElement("img");
      image.src = item.img;
      imageContainer.appendChild(image);

      let title = document.createElement("p");
      title.textContent += item.title;
      title.classList.add("title");
      contentContainer.appendChild(title);

      let subTitle = document.createElement("p");
      subTitle.textContent += item.subTitle;
      subTitle.classList.add("carousel-text");
      contentContainer.appendChild(subTitle);

      let text = document.createElement("p");
      text.textContent += item.text;
      text.classList.add("text");
      contentContainer.appendChild(text);

      card.appendChild(imageContainer);
      card.appendChild(contentContainer);

      cardContainer.appendChild(card);

      console.log(card);

      carousel.appendChild(cardContainer);
    });
  };

  let count = 0;
  setTimeout(() => {
    $(".carousel-container .carousel").slick({
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      responsive: [
        {
          breakpoint: 1560,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 705,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, 2000);

  if (count == 1) {
    $(function () {
      $(".carousel-container .carousel").slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    });
  }

  // Maps Logic
  // Initialize and add the map
  ("use strict");

  function initMap() {
    const myLatLng = {
      lat: 38.9705,
      lng: -94.7044,
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false,
      mapId: "f88789afa85eec55",
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }

  initMap();

  // Mobile Menu Logic
  let menuButton = document.querySelector(".menu-button");
  let closeMenu = document.querySelector(".close-menu");
  let menu = document.querySelector(".mobile .nav-link-container");

  menuButton.onclick = function () {
    menu.style.left = "0%";
  };

  closeMenu.onclick = function () {
    menu.style.left = "-100%";
  };
});
