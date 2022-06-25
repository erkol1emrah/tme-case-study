<template>
  <div>
    <NewTag />
    <CarPhoto />
    <Separator />
    <Button />
  </div>
</template>

<script>
import NewTag from "./footer/NewTag.vue";
import CarPhoto from "./footer/CarPhoto.vue";
import Separator from "./footer/Separator.vue";
import Button from "./footer/Button.vue";

export default {
  name: "Footer",
  components: {
    NewTag,
    CarPhoto,
    Separator,
    Button,
  },
};
</script>

<style scoped></style>
