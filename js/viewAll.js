const getViewAll = function () {
    const linkMore = document.querySelector(".more"); // Ссылка товар

    // Отрисовывка
    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector(".long-goods-list");

        goodsContainer.innerHTML = ""; // Стираем содержимое контейнера

        // Макет
        goods.forEach((good) => {
            const goodBlock = document.createElement("div"); // Блок карточки

            goodBlock.classList.add("col-lg-3");
            goodBlock.classList.add("col-sm-6");

            // Содержимое
            goodBlock.innerHTML = `
						<div class="goods-card">
              <span class="label ${good.label ? null : "d-none"}">${
                good.label
            }</span>
							<img src="db/${good.img}" alt="image: ${good.name}" class="goods-image">
              <h3 class="goods-title">${good.name}</h3>
              <p class="goods-description">${good.description}</p>
              <button class="button goods-card-btn add-to-cart" data-id="${
                good.id
            }">
                <span class="button-price">$${good.price}</span>
              </button>
            </div>
			`;

            goodsContainer.append(goodBlock);
        });
    };

    // Обработчик
    const getData = function (value) {
        fetch("/db/db.json")
            .then((res) => res.json())
            .then((data) => {
                // Воозвращаем базу
                localStorage.setItem("goods", JSON.stringify(data));

                if (window.location.pathname !== "/goods.html") {
                    window.location.href = "/goods.html";
                } else {
                    renderGoods(aray);
                }
            });
    };

    linkMore.onclick = () => getData(linkMore.textContent);
};
getViewAll();