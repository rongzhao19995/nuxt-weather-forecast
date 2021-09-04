<template>
  <div class="css-icon cloudy">
    <span class="cloud"></span>
    <span class="cloudx"></span>
  </div>
</template>

<style lang="postcss" scoped>
.css-icon {
  @apply relative mt-16;
  width: 100px;
  height: 100px;
  border-radius: 40%;
  z-index: 120;
}
.cloudy {
  background: linear-gradient(
    to top right,
    rgba(63, 81, 181, 1) 0%,
    rgba(3, 155, 229, 1) 40%
  );
  box-shadow: 1px 1px 30px rgba(2, 119, 189, 1);
}
.cloud {
  position: absolute;
  top: 5%;
  left: 70%;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  background-color: rgba(129, 212, 250, 1);
  box-shadow: 1px 1px 30px rgba(0, 151, 167, 1);
  animation: move 3s infinite linear;
}
.cloudx {
  position: absolute;
  top: 23%;
  left: 55%;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  background-color: rgba(129, 212, 250, 1);
  animation: move 3s infinite linear;
}

@keyframes move {
  50% {
    transform: translateX(-10px);
  }
}
</style>