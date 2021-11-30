<template>
  <div>
    <div
      class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
      style="width: 310px; overflow-y: auto"
    >
      <div class="list-group-location py-2 lh-tight">
        <div class="d-flex w-100 align-items-center justify-content-start">
          <span class="fs-5 fw-semibold">Dufferin</span>
        </div>
      </div>

      <div v-if="isConnecting && !connectionError" class="loader-state">
        <img src="@/assets/img/loader.svg" alt="" />
        <span class="mt-2">Loading</span>
      </div>

      <div v-if="!connectionError && !isConnecting && customers.length > 0">
        <div id="btnmem" v-for="customer in customers" :key="customer.id">
          <button
            class="list-group-item list-group-item-action py-2 lh-tight"
            v-on:click="openDetails(customer)"
          >
            <div class="d-flex w-100 align-items-center justify-content-start">
              <img
                src="@/assets/img/imgmem.svg"
                class="avatar img-fluid"
                alt="car image"
              />
              <div class="flex-column">
                <strong class="list-plate">{{ customer.name }}</strong>
                <br />
                <p class="list">
                  {{ customer.car_brand }}: {{ customer.car_name }}
                </p>
                <img
                  class="list-time-icon img-fluid rounded-circle"
                  src="@/assets/img/icontime.svg"
                  alt="time icon"
                />
                <small class="list-time text-muted">{{ customer.time }}</small>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div v-if="connectionError && !isConnecting">
        <div class="list-group-item-message py-2 lh-tight">
          <div class="d-flex w-100 align-items-center justify-content-start">
            <div class="flex-column">
              <div class="message">
                <img
                  class="imgerror"
                  src="@/assets/img/imgmessage/ErrorState.svg"
                />
                <div class="textpart">
                  <div class="textpartlineone">Something is wrong</div>
                  <div class="textpartlinetwo">
                    There was an error while attempting to display vehicles
                  </div>
                </div>
                <div class="refreshbtn">
                  <div class="refreshbtnicon">
                    <img src="@/assets/img/iconrefresh.svg" />
                  </div>
                  <div class="refreshbtntext">Try again</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-group-item-message py-2 lh-tight">
          <div class="d-flex w-100 align-items-center justify-content-start">
            <div class="flex-column">
              <div class="message">
                <img
                  class="imgerror"
                  src="@/assets/img/imgmessage/EmptyState.svg"
                />
                <div class="textpart">
                  <div class="textpartlineone">Empty Lot</div>
                  <div class="textpartlinetwo">
                    There are currently no vehicles to display
                  </div>
                </div>
                <div class="refreshbtn">
                  <div class="refreshbtnicon">
                    <img src="@/assets/img/iconrefresh.svg" />
                  </div>
                  <div class="refreshbtntext">Try again</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SideNav :customer="{ ...customer }" />
  </div>
</template>

<script>
import SideNav from "./SideNav.vue";
import customers from "../data/customers";
import { fetchToken } from "../utils/helper";

export default {
  name: "Member",
  components: {
    SideNav,
  },
  computed: {
    token: () => fetchToken(),
  },
  data() {
    return {
      isConnecting: true,
      connectionError: false,
      customers: [],
      customer: {},
      connection: null,
    };
  },
  methods: {
    //Websocket connection
    openWebsocketConn() {
      console.log("Webscocket Connection started ...");
      this.connection = new WebSocket(
        // `wss://nm01dxgeu4.execute-api.us-west-2.amazonaws.com/dev -H 'Authorizer:${this.token}'`
        "wss://ewp8434vll.execute-api.us-west-2.amazonaws.com/v1?Authorizer=" +
          this.token
      );
      this.connection.onopen = (e) => {
        console.log(e);
        console.log("Connection success");
      };
      this.connection.onmessage = (e) => {
        console.log(e);
      };
      this.connection.onerror = (e) => {
        // this.isConnecting = false;
        // this.connectionError = true;
        console.log("Connection failed: ", e);
      };
    },
    //Get Dummy customers
    getCustomers() {
      this.customers = customers;
      setTimeout(() => {
        this.isConnecting = false;
      }, 1000);
    },
    //Show customer details
    openDetails(customer) {
      document.getElementById("jpts").style.width = "265px";
      document.getElementById("main").style.marginLeft = "265px";
      this.customer = customer;
    },
  },
  created() {
    this.getCustomers();
    this.openWebsocketConn();
  },
};
</script>
