<template>
  <div
    id="content-main"
  >
    <div class="content-layout">
      <main-header id="header-main" />
      <router-view class="content bg-gray-200" />
      <main-footer id="footer-main" />
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

export default {
  name: "Content",
  components: {
    'main-header': MainHeader,
    'main-footer': MainFooter,
  },
}
</script>

<style lang="scss">

#content-main {
  width: 100%;
  min-height: 100vh;

  .content-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .content {
      padding-top: 1.5em;
      padding-bottom: 1.5em;
      min-height: calc(100vh - 113.5px);
    }

    @media (max-width: 1024px) {
      .content {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    }
    @media (min-width: 1024px) and (max-width: 1536px) {
      .content {
        padding-left: 3rem;
        padding-right: 3rem;
      }
    }
    @media (min-width: 1536px) {
      .content {
        padding-left: 6rem;
        padding-right: 9rem;
      }
    }
  }
}

</style>