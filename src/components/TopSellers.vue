<template>
  <!------- SECTION THREE - CATEGORY THREE - CARD HORIZONTAL VARIATIONS -->
  <div
    class="d-flex flex-column align-items-stretch flex-shrink-0"
    style="width: auto; overflow-y: scroll"
  >
    <div class="list-category-two-default py-2 lh-tight">
      <div class="d-flex w-100 align-items-center justify-content-start">
        <span class="">Top Store Sellers</span>
      </div>

      <div
        class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        style="width: auto; overflow-x: scroll"
      >
        <div style="display: flex; width: auto; overflow-x: scroll">
          <div class="card" v-for="(item, index) in items" :key="index">
            <!-- <div class="card-header">Earn <b>10</b> Bouns Pts</div> -->
            <div class="img-wrapper">
              <img
                src="https://source.unsplash.com/random/900×700/?food"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="card-body">
              <!-- <h5 class="card-title">Coke</h5> -->
              <p class="card-text">{{ item.promo_description }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item d-flex justify-content-between">
                <a href="#" class="card-link">${{ item.promotion_price }}</a>
                <a href="#" class="card-link">$2.50</a>
              </li>
            </ul>
          </div>
          <div class="cardhorz mb-3">
            <div class="row no-gutters">
              <div class="col-5">
                <!-- <div class="cardhorz-header">
Earn <b>10</b> Bouns Pts
</div>    -->
                <img
                  class="cardhorz-img-leftside"
                  width="140px"
                  height="128px"
                  src="@/assets/img/img_cliff.png"
                />
              </div>

              <div class="col-7">
                <div class="cardhorz-body">
                  <p class="card-text">Lorem ipsum lorem ipsum ipsum ipsum</p>
                  <a href="#" class="card-link">2 for $5</a>
                  <!--                   <br><small class="text-muted">Expires ...</small> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import promotions from "../data/promotions";

export default {
  name: "TopSellers",

  data() {
    return {
      isGettingPromotions: false,
      items: [],
    };
  },

  methods: {
    getPromotions() {
      for (let i = 0; i < 15; i++) {
        const index = Math.floor(Math.random() * promotions.length);
        this.items.push(promotions[index]);
      }
    },
  },

  created() {
    this.getPromotions();
  },
};
</script>
