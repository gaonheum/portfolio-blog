<template>
  <header class="flex flex-row py-4 px-2 text-white bg-gray-800">
    <div class="header--left" />

    <div
      id="navbar"
      class="flex"
    >
      <div
        v-show="showNav"
        class="mr-4 cursor-pointer"
        @click="toggleNav"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg> <!-- Menu Button -->
      </div>

      <!-- 현재 위치 네비게이션 -->
      <div>
        Header
      </div>
    </div>

    <div class="header--right" />
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "MainHeader",
  computed: {
    ...mapState(["width"]),
    showNav() {
      return this.width < 1536;
    }
  },
  methods: {
    ...mapMutations(["toggleNav"]),
  },
}
</script>

<style lang="scss" scoped>

@media (max-width: 1536px) {
  .header--left,
  .header--right {
    flex-basis: 2.5%;
  }
  #navbar {
    flex-basis: 95%;
  }
}
@media (min-width: 1536px) {
  .header--left,
  .header--right {
    flex-basis: 7.5%;
  }
  #navbar {
    flex-basis: 85%;
  }
}

</style>