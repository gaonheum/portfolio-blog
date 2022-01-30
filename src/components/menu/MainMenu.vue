<template>
  <div
    id="main-menu"
  >
    <ul class="menu flex flex-col flex-1 ml-3.5">
      <li>
        <router-link
          :to="MAIN_MENU[0].to"
          class="menu-item flex"
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span class="ml-2"> {{ MAIN_MENU[0].title }} </span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="MAIN_MENU[1].to"
          class="menu-item flex"
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <span class="ml-2"> {{ MAIN_MENU[1].title }} </span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="MAIN_MENU[2].to"
          class="menu-item flex"
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
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <span class="ml-2"> {{ MAIN_MENU[2].title }} </span>
        </router-link>
      </li>
      <li>
        <router-link
          :to="MAIN_MENU[3].to"
          class="menu-item flex"
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="ml-2"> {{ MAIN_MENU[3].title }} </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MainMenu",
  computed: {
    ...mapGetters('sidebarStore', [
      "MAIN_MENU",
    ])
  },
  mounted() {

  },
  methods: {
    setMenu(title) {
      this.$store.commit('sidebarStore/SET_MENU', { title });
    },
  }
}
</script>

<style lang="scss" scoped>

#main-menu {
  border-bottom: 1px solid lightgray;

  .menu {
    text-align: center;

    .menu-item {
      margin-left: 2em;
      margin-bottom: 1rem;
      line-height: 1.45rem;
      font-size: 1.125rem;
      text-align: center;

      &:hover {
        --tw-text-opacity: 1;
        color: rgba(254, 202, 202, var(--tw-text-opacity));
      }
    }

    .active {
      --tw-text-opacity: 1;
      color: rgba(252, 165, 165, var(--tw-text-opacity));
    }
  }
}

</style>