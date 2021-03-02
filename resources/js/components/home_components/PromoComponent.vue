<template>
  <div class="promo-info-section pt-5 pb-5">
      <div class="wrapper">
          <div class="row no-gutters">
              <div class="col-12 col-sm-12 col-md-2 col-lg-2">
                  <h2 class="promo-info__title">Почему следует, <br> выбирать нас</h2>
              </div>
              <div class="col-12 col-sm-12 col-md-5 col-lg-5">
                  <h5 class="promo-info__subtitle">Выгодные цены</h5>
                  <div class="d-flex flex-row justify-content-around">
                      <div class="promo-info__image">
                          <picture>
                              <img :src="`storage/img/service.png`" alt="service image">
                          </picture>
                      </div>
                      <div class="promo-info__text">
                          <p class="promo-info__text"> Лучшие товары в нашем понимании — это самые свежие и
                              отборные продукты от проверенных поставщиков и производителей. Выгодные цены на них
                              подразумевают устранение лишних звеньев в цепочке производитель — потребитель. </p>
                      </div>
                  </div>
              </div>
              <div class="col-12 col-sm-12 col-md-5 col-lg-5">
                  <h5 class="promo-info__subtitle">Высокое качество</h5>
                  <div class="d-flex flex-row  justify-content-around">
                      <div class="promo-info__image">
                          <picture>
                              <img :src=" `storage/img/discount.png`" alt="service image"> 
                          </picture>
                      </div>
                      <div class="promo-info__text">
                          <p class="promo-info__text">Мы стремимся к совершенству, а, как известно, совершенству
                              нет предела. Кто же, как не Вы, наш уважаемый Клиент, в этом нам поможет?</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'PromoComponent'
}
</script>
