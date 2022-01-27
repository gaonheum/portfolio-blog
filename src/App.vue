<template>
  <div
    id="app"
  >
    <div class="layout">
      <!-- Sidebar -->
      <aside
        v-show="nav"
        class="left-side"
      >
        <sidebar-menu />
      </aside>

      <div
        class="flexbox"
        :class="{'open':nav}"
      >
        <!-- Header -->
        <main-header />

        <!-- Content -->
        <main-content />
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

import SidebarMenu from "@/components/SidebarMenu";
import MainHeader from "@/components/MainHeader";
import Content from "@/components/Content";

export default {
  name: 'App',
  components: {
    'main-content': Content,
    'sidebar-menu': SidebarMenu,
    'main-header': MainHeader,
  },
  data: () => {
    return {

    };
  },
  computed: {
    ...mapState(['width', 'nav',]),
  },
  created() {
    window.addEventListener('load', this.curWidth);
  },
  mounted() {
    window.addEventListener('resize', this.isMobile);
  },
  beforeDestroy() {
    window.removeEventListener('load', this.curWidth);
    window.removeEventListener('resize', this.isMobile);
  },
  methods: {
    ...mapMutations(["curWidth", "isMobile",]),
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
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: scroll;
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
  width: 100%;
  height: 100vh;
}

@media (max-width: 1536px) {
  .open {
    transform: translateX(300px);
  }
  .flexbox {
    position: absolute;
  }
}
</style>
