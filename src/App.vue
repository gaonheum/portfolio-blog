<template>
  <div
    id="app"
  >
    <main-sidebar id="sidebar-main" />
    <main-content
      id="content-main"
      :class="{ 'open': nav, 'close': !nav }"
    />
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

import MainSidebar from "@/components/MainSidebar";
import Content from "@/components/Content";

export default {
  name: 'App',
  components: {
    'main-sidebar': MainSidebar,
    'main-content': Content,
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

<style lang="scss">

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}

#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;

  display: flex;

  @media (max-width: 1280px) {
    #content-main {
      position: absolute;
      min-height: 100vh;
    }
    .open {
      transform: translateX(300px);
      transition: 0.5s;
    }
    .close {
      transition: 0.5s;
    }
  }
  @media (min-width: 1280px) {
    #content-main {
      transform: translateX(300px);
      width: calc(100% - 300px);
      transition: 0.5s;
    }
  }

}
</style>