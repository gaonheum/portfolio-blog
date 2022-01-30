<template>
  <aside
    id="sidebar-main"
  >
    <img
      class="bg-img"
      :src="require('@/assets/sidebar.jpg')"
      alt="sidebar-content-background-img"
    >

    <div
      id="sidebar-layout"
      class="flex flex-1 flex-col justify-between"
    >
      <!-- Sidebar header -->
      <div
        id="sidebar-header"
        class="text-center bg-gray-800 py-3"
      >
        <h1 class="text-gray-100 text-2xl tracking-widest font-bold">
          MSSEO<span class="text-red-300">.DEV</span>
        </h1>
      </div>

      <!-- Sidebar content -->
      <div
        id="sidebar-content"
        class="flex flex-col"
      >
        <!-- Main menu -->
        <main-menu />

        <!-- Blog menu -->
        <div
          v-show="isBlogPage"
          id="blog-menu"
        />
      </div>

      <!-- Sidebar footer -->
      <div
        id="sidebar-footer"
        class="flex justify-between bg-gray-800 py-4 px-4 text-gray-100"
      >
        <div class="cursor-pointer">
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg> <!-- settings -->
        </div>
        <div class="cursor-pointer">
          <div v-if="login">
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
          <div v-else>
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
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg> <!-- login -->
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import MainMenu from "@/components/menu/MainMenu";

export default {
  name: "SidebarMenu",
  components: {
    'main-menu': MainMenu,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['nav']),
    ...mapState('sidebarStore', [
      "curMenu", "blogCategory", "login",
    ]),
    ...mapGetters('sidebarStore', [
      "MAIN_MENU", "BLOG_CATEGORY",
    ]),
    isBlogPage: function () {
      return this.curMenu === "Blog";
    },
  },
  mounted() {

  },
  methods: {
    ...mapMutations([
      "SET_MENU", "SET_PAGE",
    ]),
    setPage(title) {
      this.$store.commit('sidebarStore/SET_PAGE', { title });
    },
    selectMenu($event) {
      // if (event.target.)
    }
  },
}
</script>

<style lang="scss">

#sidebar-main {
  position: fixed;
  top: 0;

  .bg-img {
    width: 300px;
    height: 100vh;
    z-index: 1;

    filter: brightness(50%);
  }

  #sidebar-layout {
    position: absolute;
    min-width: 300px;
    top: 0;
    left: 0;
    z-index: 2;

    border-right: 1px solid gray;

    #sidebar-content {
      max-width: 300px;
      height: calc(100vh - 111.5px);
      padding: 1em 1.5em 1em;

      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;

      text-align: left;
      color: white;

      #blog-menu {
        padding: 1em 0;

        #blog-tracking {
          border-bottom: 1px solid lightgray;
        }
      }
    }
  }
}
</style>