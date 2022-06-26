<template>
  <div id="menu">
    <RouterLink to="/" v-slot="{ navigate, href, isActive }" custom>
      <div class="menu-item" :class="{ active: isActive }">
        <a :href="href" @click="navigate">MODELS</a>
        <div :class="{ underline: isActive }"></div>
      </div>
    </RouterLink>
    <RouterLink to="/select-color" v-slot="{ navigate, href, isActive }" custom>
      <div class="menu-item" :class="{ active: isActive }">
        <a :href="href" @click="navigate">COLORS</a>
        <div :class="{ underline: isActive }"></div>
      </div>
    </RouterLink>
    <RouterLink to="/select-packs" v-slot="{ navigate, href, isActive }" custom>
      <div class="menu-item" :class="{ active: isActive }">
        <a :href="href" @click="navigate">ACCESSORIES</a>
        <div :class="{ underline: isActive }"></div>
      </div>
    </RouterLink>
    <RouterLink to="/summary" v-slot="{ navigate, href, isActive }" custom>
      <div class="menu-item" :class="{ active: isActive }">
        <a :href="href" @click="navigate">SUMMARY</a>
        <div :class="{ underline: isActive }"></div>
      </div>
    </RouterLink>
    <!--        <RouterLink to="/select-color" class="menu-item" active-class="active">COLORS</RouterLink>-->
    <!--        <RouterLink to="/select-pack" class="menu-item" active-class="active">ACCESSORIES</RouterLink>-->
    <!--        <RouterLink to="/summary" class="menu-item" active-class="active">SUMMARY</RouterLink>-->
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style>
#menu {
  font-family: "Qanelas Bold";
  font-size: 14px;
  font-weight: 200;
  line-height: 17px;
  letter-spacing: 1px;
  text-align: center;
  margin-top: 55px;
}

.menu-item {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: var(--black);
  margin-right: 57.5px;
  opacity: 0.19;
}

.menu-item:last-child {
  margin-right: 0;
}

.menu-item:hover {
  opacity: 1;
}

.menu-item-text {
}

.underline {
  width: 14px;
  min-width: 14px;
  max-width: 14px;
  height: 4px;
  min-height: 4px;
  max-height: 4px;
  background-color: var(--black);
  margin-top: 12px;
}

.active {
  opacity: 1;
}
</style>
