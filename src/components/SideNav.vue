<template>
  <div id="jpts" class="jptssidebar">
    <div class="box2">
      <div class="box8">
        <a href="javascript:void(0)" class="closebtnmember" onclick="closeNav()"
          >× close</a
        >
      </div>
      <div class="box7">
        <img
          src="@/assets/img/iconcarlarge.svg"
          class="avatar img-fluid profilimg"
          alt="car image"
        />
      </div>
      <div class="box6">
        <p class="profilename">{{customer.name}}</p>
      </div>
      <div class="box5">
        <p class="profileplate">ATY - {{customer.prod}}</p>
        <p class="profilecarinfo">{{customer.car_brand}}: {{customer.car_name}}</p>
      </div>
      <div class="box4">
        <div class="box4a">
          <p class="profilepoints">{{customer.point}}</p>
          <p class="profilepointstext">pts</p>
        </div>
      </div>
      <div class="box3nogifts">
        <div class="box3nogifta" alt="...">
          <img src="@/assets/img/nogift.svg" />
          <div class="box3nogiftaa">
            <div class="box3nogiftaatextone">{{customer.reward}} points</div>
            <div class="box3nogiftaatexttwo">until next reward</div>
          </div>
        </div>
      </div>
      <div class="box3">
        <div class="box3a">
          <div class="box3aa">
            <img src="@/assets/img/icongift.svg" class="" alt="..." />
            <div class="box3aagiftnum">
              <div class="box3aacircle">
                <div class="box3aanum">1</div>
              </div>
            </div>
          </div>
          <div class="box3ab">
            <p class="profileorangetext">Reward ready!</p>
            <p class="profileorangetexttwo">Valid until Mar, 2022</p>
          </div>
        </div>

        <div class="box3b">
          <!--------------- YELLOW BOX SCROLL ITEMS --------------->
          <div
            class="d-flex flex-column align-items-stretch flex-shrink-0"
            style="width: auto; height: auto; overflow-y: scroll"
          >
            <div
              style="
                display: flex;
                flex-direction: column;
                height: auto;
                overflow-y: scroll;
              "
            >
              <!--------------- ITEM --------------->

              <div class="cardgift">
                <img
                  src="@/assets/img/gift/giftoption1.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <!-- <h5 class="card-title">Coke</h5> -->
                  <p class="card-text">Reese Peanut Butter Cups</p>
                </div>
                <!-- 
                  <div class="card-body">
                    <a href="#" class="card-link">$2.50</a>
                  </div> -->
              </div>
              <!--------------- ITEM --------------->

              <div class="cardgift">
                <img
                  src="@/assets/img/gift/giftoption2.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <!-- <h5 class="card-title">Coke</h5> -->
                  <p class="card-text">Lay's Potato Chips</p>
                </div>
                <!-- <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              <a href="#" class="card-link">2 for $5</a>
                              <a href="#" class="card-link">3 for $7</a>
                            </li>
                          </ul> -->
                <!--                   
                  <div class="card-body">
                    <a href="#" class="card-link">$2.50</a>
                  </div> -->
              </div>
              <!--------------- ITEM --------------->

              <div class="cardgift">
                <img
                  src="@/assets/img/gift/giftoption3.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <!-- <h5 class="card-title">Coke</h5> -->
                  <p class="card-text">Clif Bar: Chocolate Chip</p>
                </div>
                <!-- 
                  <div class="card-body">
                    <a href="#" class="card-link">$2.50</a>
                  </div> -->
              </div>
              <!--------------- ITEM --------------->
            </div>
          </div>
          <!---------------END - YELLOW BOX --------------->
          <!------>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  props: ["customer"],
};
</script>
