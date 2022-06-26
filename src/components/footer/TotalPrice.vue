<template>
  <div id="total-price">
    <p>TOTAL</p>
    <p>193.500 TL</p>
  </div>
</template>

<script>
export default {
  name: "TotalPrice",
};
</script>

<style>
#total-price {
  flex-flow: column nowrap;
  width: 537px;
  height: 100%;
  justify-content: center;
  padding: 29px;
}

#total-price p:first-child {
  font-family: "Qanelas Extra Bold";
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1.7094px;
}

#total-price p:last-child {
  font-family: "Qanelas Light";
  font-size: 24px;
  line-height: 28px;
  margin-top: 2px;
}
</style>
