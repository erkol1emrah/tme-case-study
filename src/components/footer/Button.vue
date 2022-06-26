<template>
  <div id="button">
    <p>COLORS</p>
    <img src="images/arrow.svg" id="arrow" />
  </div>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style>
#button {
  width: 235px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  background-color: var(--black);
  font-family: "Qanelas Bold";
  font-size: 12px;
  letter-spacing: 2.78571px;
  border-radius: 0 11px 11px 0;
  padding-left: 39px;
  padding-right: 33px;
  user-select: none;
}

#arrow {
  width: 24px;
  height: auto;
}
</style>
