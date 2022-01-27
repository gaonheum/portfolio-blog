<template>
  <div>
    <article>
      <div class="item bg-red-200">
        content1
      </div>
      <div class="item bg-yellow-200">
        content2
      </div>
      <div class="item bg-green-200">
        content3
      </div>
      <div class="item bg-blue-200">
        content4
      </div>
      <router-view />
    </article>

    <!-- Recent Update / Table of contents -->
    <aside class="right-side text-center">
      <b>Table of contents</b>
    </aside>
  </div>
</template>

<script>
export default {
  name: "Blog"
}
</script>

<style scoped>
article {
  padding: 0 0.5em;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
}

.item {
  min-height: 150px;
  flex-basis: 150px;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: center;
}

.right-side {
  margin: 0 0.5em;
  padding: 10px;
  width: 100%;
  height: 100%;
  flex-basis: 220px;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: lawngreen;
}

@media (max-width: 1280px) {
  .right-side {
    display: none;
  }
}
</style>