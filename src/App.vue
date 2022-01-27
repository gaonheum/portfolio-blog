<template>
  <div
    id="app"
  >
    <div class="layout">
      <!-- Sidebar -->
      <aside
        v-show="sidebar"
        :class="openSidebar"
        class="left-side"
      >
        <sidebar-menu />
      </aside>

      <div class="flexbox">
        <!-- Header -->
        <div class="header-basis bg-gray-800">
          <div class="header-basis-left" />
          <div class="header">
            <main-header />
          </div>
          <div class="header-basis-right" />
        </div>

        <div class="content-basis">
          <div class="content-basis-left" />

          <!-- Content -->
          <div class="content">
            <router-view />
          </div>


          <div class="content-basis-right" />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <main-footer />
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";
import SidebarMenu from "@/components/sidebar/SidebarMenu";

export default {
  name: 'App',
  components: {
    'sidebar-menu': SidebarMenu,
    'main-header': MainHeader,
    'main-footer': MainFooter,
  },
  data: () => {
    return {

    };
  },
  computed: {
    ...mapState(['width', 'sidebar',]),
    openSidebar() {
      if (this.sidebar === true) {
        return "display: block";
      } else {
        return "display: none";
      }
    }
  },
  created() {
    window.addEventListener('load', this.curView);
  },
  mounted() {
    window.addEventListener('resize', this.mobileView);
  },
  beforeDestroy() {
    window.removeEventListener('load', this.curView);
    window.removeEventListener('resize', this.mobileView);
  },
  methods: {
    ...mapMutations(["curView", "mobileView",]),
  },
}
</script>

<style>
body {
  background-color: gray;

  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  /*width: 100%;*/
  /*height: 100%;*/

  position: relative;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
}

.layout {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  background-color: beige;
}

.left-side {
  flex-basis: 300px;
  flex-grow: 0;
  flex-shrink: 0;
}

.flexbox {
  padding: 0 0;
}

.header-basis {
  display: flex;
  padding: 0 10px;
}

.content-basis {
  padding: 10px;
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
}

.content {
  padding: 15px 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 1536px) {
  .content-basis-left,
  .content-basis-right,
  .header-basis-left,
  .header-basis-right {
    flex-basis: 2.5%;
  }
  .content,
  .header {
    flex-basis: 95%;
  }
}
@media (min-width: 1536px) {
  .content-basis-left,
  .content-basis-right,
  .header-basis-left,
  .header-basis-right {
    flex-basis: 7.5%;
  }
  .content,
  .header {
    flex-basis: 85%;
  }
}
</style>
