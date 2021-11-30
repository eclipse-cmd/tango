<template>
  <div
    class="d-flex flex-column align-items-stretch flex-shrink-0"
    style="width: auto; overflow-y: scroll"
  >
    <div class="list-category-two-default py-2 lh-tight">
      <div class="d-flex w-100 align-items-center justify-content-start">
        <span class="">Featured Offers</span>
      </div>

      <div
        class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        style="width: auto; overflow-x: scroll"
      >
        <div
          style="
            display: flex;
            flex-direction: row;
            width: auto;
            overflow-x: scroll;
          "
        >
          <div class="card" v-for="(item, index) in items" :key="index">
            <!-- <div class="card-header">Earn <b>10</b> Bouns Pts</div> -->
            <div class="img-wrapper">
              <img
                src="https://picsum.photos/200/300?random"
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
                <a href="#" class="card-link">${{item.promotion_price}}</a>
                <a href="#" class="card-link">$2.50</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import promotions from "../data/promotions";

export default {
  name: "FeaturedOffers",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    getItems() {
      for (let i = 0; i < 15; i++) {
        const index = Math.floor(Math.random() * promotions.length);
        promotions[index].img_path = "https://source.unsplash.com/random/900×700/?food,fruit"
        this.items.push(promotions[index]);
      }
    },
  },
};
</script>
