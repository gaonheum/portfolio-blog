<template>
  <div
    id="sidebar-app"
    class="flex flex-col"
  >
    <div class="flex py-4 justify-center bg-gray-800">
      <h1 class="text-white">
        <b>MSSEO<span class="text-red-300">.DEV</span></b>
      </h1>
    </div>

    <div class="flex flex-col">
      <nav />

      <!-- blog -->
      <div />
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarMenu",
  computed: {
  },
}
</script>

<style scoped>
#sidebar-app {
  width: 100%;
  height: 100%;

  flex-basis: 300px;
  flex-grow: 0;
  flex-shrink: 0;

  --tw-bg-opacity: 1;
  background-color: rgba(75, 85, 99, var(--tw-bg-opacity));

  border-right: 1px solid gray;
}

</style>