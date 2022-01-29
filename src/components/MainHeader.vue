<template>
  <header
    id="header"
    class="flex flex-row justify-between py-4 px-2 text-white bg-gray-800"
  >
    <div class="flex">
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

    <div
      v-if="mobile"
      class="cursor-pointer"
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg> <!-- Mobile Search Icon -->
    </div>
    <div
      v-else
      class="search"
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg> <!-- Search Icon -->
      <input
        type="text"
        placeholder="Search..."
      >
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "MainHeader",
  computed: {
    ...mapState(["width", "mobile"]),

    showNav() {
      return this.width <= 1280;
    },
  },
  methods: {
    ...mapMutations(["toggleNav"]),
  },
}
</script>

<style lang="scss" scoped>

#header {
  position: sticky;
  top: 0;
}

.search {
  display: flex;
  padding-left: 5px;

  min-width: 210px;
  border-radius: 15px;
  background-color: #efefef;

  svg {
    left: 7px;
    color: #aaa;
  }
  input {
    border: none;
    outline: none;
    padding-left: 5px;
    width: calc(100% - 80px);
    min-width: 175px;
    border-radius: 15px;
    background-color: #efefef;
    color: black;
  }
}

@media (max-width: 1024px) {
  #header {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (min-width: 1024px) and (max-width: 1536px) {
  #header {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
@media (min-width: 1536px) {
  #header {
    padding-left: 6rem;
    padding-right: 9rem;
  }
}
</style>