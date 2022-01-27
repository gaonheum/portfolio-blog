<template>
  <div
    id="content-app"
    class="flex flex-grow-0 flex-shrink-0 w-full h-screen p-3"
  >
    <div class="content--left" />

    <!-- Content -->
    <div
      id="content"
      class="flex flex-col w-full h-screen"
    >
      <router-view />

      <!-- Footer -->
      <main-footer />
    </div>

    <div class="content--right" />
  </div>
</template>

<script>
import MainFooter from "@/components/MainFooter";

export default {
  name: "Content",
  components: {
    'main-footer': MainFooter,
  }
}
</script>

<style lang="scss" scoped>

#content-app {
  width: 100%;
  height: 100vh;
}

@media (max-width: 1536px) {
  .content--left,
  .content--right {
    flex-basis: 2.5%;
  }
  #content {
    flex-basis: 95%;
  }
}
@media (min-width: 1536px) {
  .content--left,
  .content--right {
    flex-basis: 7.5%;
  }
  #content {
    flex-basis: 85%;
  }
}

</style>