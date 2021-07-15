const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

  let activeIndex = 0;

  const refs = {
    gallery: document.querySelector(".gallery"),
    modal: document.querySelector(".js-lightbox"),
    modalImg: document.querySelector(".lightbox__image"),
    closeBtn: document.querySelector("[data-action=close-lightbox]"),
  };

  const makeGalleryMarkup = ({ preview, original, description }) =>
    `<li class="gallery__item">
      <a
        class="gallery__link"
        href='${original}'
      >
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
      </a>
    </li>`;

  const markup = galleryItems.map(makeGalleryMarkup);

  refs.gallery.insertAdjacentHTML("beforeend", markup.join(""));

  function onOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeNme !== "IMG") {
      return;
    }
    markup.forEach((el, index) => {
      if (el.includes(e.target.src)) {
        activeIndex = index;
      }

    })
    console.log(activeIndex);
    window.addEventListener("keydown", onEscapeBtnPress);
    refs.modal.classList.add("is-open");
    refs.modalImg.src = e.target.dataset.sourse;
    refs.modalImg.alt = e.target.alt;
  }

  function closeModal() {
    refs.modal.classList.remove("is-open");
    window.removeEventListener("keydown", onEscapeBtnPress);
    refs.modalImg.src = "#";
    refs.modalImg.alt = "#";
  } 

function onModalClose(e) {
  if (e.target.nodeNme === "IMG") {
    return;
  }  
  closeModal();
}

function onEscapeBtnPress(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
  console.log(e.key);
}



  refs.gallery.addEventListener("click", onOpenModal);
  refs.modal.addEventListener("click", onModalClose);