<template>
  <aside
    id="sidebar"
  >
    <img
      class="bg-img"
      :src="require('@/assets/sidebar.jpg')"
      alt="sidebar-content-background-img"
    >

    <div
      id="sidebar-layout"
      class="flex flex-col"
    >
      <!-- Sidebar header -->
      <div class="text-center bg-gray-800 py-3">
        <h1 class="text-white text-2xl tracking-widest font-bold">
          MSSEO<span class="text-red-300">.DEV</span>
        </h1>
      </div>

      <!-- Sidebar content -->
      <div id="sidebar-content">
        <!-- Main menu -->
        <div id="main-menu">
          <nav
            v-for="menu in MAIN_MENU"
            :key="menu.id"
            class="text-center"
          >
            <router-link :to="menu.to">
              <h1
                class="menu-item"
                @click="setMenu(menu.title)"
              >
                {{ menu.title }}
              </h1>
            </router-link>
          </nav>
        </div>

        <!-- Blog menu -->
        <div
          v-show="isBlogPage"
          id="blog-menu"
        >
          <!-- Blog tracking -->
          <div id="blog-tracking">
            <nav
              v-for="menu in BLOG_TRACKING"
              :key="menu.id"
              class="text-center"
            >
              <router-link :to="menu.to">
                <h1
                  class="menu-item"
                >
                  {{ menu.title }}
                </h1>
              </router-link>
            </nav>
          </div>

          <!-- Blog category -->
          <div id="blog-category">
            <nav />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "SidebarMenu",
  computed: {
    ...mapState(['nav']),
    ...mapState('sidebarStore', [
      "curMenu",
    ]),
    ...mapGetters('sidebarStore', [
      "MAIN_MENU", "BLOG_TRACKING", "BLOG_CATEGORY",
    ]),
    isBlogPage: function () {
      return this.curMenu === "Blog";
    },
  },
  methods: {
    ...mapMutations([
      "SET_MENU", "SET_PAGE",
    ]),

    setMenu(title) {
      this.$store.commit('sidebarStore/SET_MENU', { title });
    },
    setPage(title) {
      this.$store.commit('sidebarStore/SET_PAGE', { title });
    },
  }
}
</script>

<style lang="scss">

#sidebar {
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
      padding: 1em 1.5em 1em;

      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;

      text-align: left;
      color: white;

      #main-menu {
        border-bottom: 1px solid lightgray;
      }

      #blog-menu {
        padding: 1em 0;

        #blog-tracking {
          border-bottom: 1px solid lightgray;
        }
      }

      .menu-item {
        display: inline-block;
        margin-bottom: 1rem;
        cursor: pointer;
      }
      .menu-item:hover {
        --tw-text-opacity: 1;
        color: rgba(253, 230, 138, var(--tw-text-opacity));
      }
    }
  }
}

</style>