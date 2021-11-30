<template>
  <div>
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
</template>

<script>
export default {
  name: "Duffering",
};
</script>
