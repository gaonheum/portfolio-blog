<template>
  <div
    id="content"
  >
    <div class="flex flex-1 flex-col">
      <main-header id="header" />
      <router-view class="content bg-gray-300" />
      <main-footer />
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
  }
}
</script>

<style lang="scss">

#content {
  width: 100%;
}

.content {
  height: 100vh;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
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
</style>