<template>
  <header class="flex py-4 text-white">
    <div
      v-show="showSidebarButton"
      class="mr-4 cursor-pointer"
      @click="toggleSidebar"
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
    <div>
      Header
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "MainHeader",
  computed: {
    ...mapState(["width"]),
    showSidebarButton() {
      return this.width < 1536;
    }
  },
  methods: {
    ...mapMutations(["toggleSidebar"]),
  },
}
</script>

<style scoped>

</style>