<template>
  <div>
    <Bullet />
    <Logo />
    <Menu />
  </div>
</template>

<script>
import Bullet from "./header/Bullet.vue";
import Logo from "./header/Logo.vue";
import Menu from "./header/Menu.vue";

export default {
  name: "Header",
  components: {
    Bullet,
    Logo,
    Menu,
  },
};
</script>

<style scoped></style>
