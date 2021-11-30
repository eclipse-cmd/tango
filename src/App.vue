<template>
  <main class="tango">
    <Member />
    <div id="main" class="jptsmain" style="width: auto; overflow-y: scroll">
      <PersonalizedOffers />
      <FeaturedOffers />
      <TopSellers />
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { post } from "./utils/app";
import { fetchToken } from "./utils/helper";
import Member from "./components/Member.vue";
import FeaturedOffers from "./components/FeaturedOffers.vue";
import TopSellers from "./components/TopSellers.vue";
import PersonalizedOffers from "./components/PersonalizedOffers.vue";

export default {
  name: "App",
  components: {
    Member,
    PersonalizedOffers,
    FeaturedOffers,
    TopSellers,
  },

  computed: {
    token: () => fetchToken(),
  },

  data() {
    return {
      connection: null,
    };
  },

  methods: {
    //Get token
    authorization() {
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", "h5hqpscvvjls5lltcnejd1a94");
      params.append(
        "client_secret",
        "govgb9gcbf51qqeu88o9tmertdcg7o9m2vchpae0qr25c47ni6p"
      );
      params.append("scope", "webapp/api.read");
      post(
        "https://dev-parkland.auth.us-west-2.amazoncognito.com/token",
        params
      )
        .then((response) => {
          if (response.access_token) {
            localStorage.setItem(
              "quuid",
              encodeURIComponent(JSON.stringify(response.access_token))
            );
          }
        })
        .catch((error) => console.log(error));
    },
  },

  created() {
    if (!fetchToken()) {
      this.authorization();
        // "https://9ifujbmd6i.execute-api.us-west-2.amazonaws.com/dev/promotions",
    }

    axios
      .get(
        "https://9ifujbmd6i.execute-api.us-west-2.amazonaws.com/dev/items",
        {
          headers: {
            Authorizer: this.token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("GET REQUEST RESPONSE: ", response);
      })
      .catch((error) => {
        console.log(error);
      });

    // get(
    //   "https://9ifujbmd6i.execute-api.us-west-2.amazonaws.com/dev/promotions",
    //   {
    //     site_id: 1234,
    //   }
    // );
  },
};
</script>

<style scoped></style>
