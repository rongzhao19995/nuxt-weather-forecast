<template>
  <div class="css-icon hot" :class="{ sm: size === 'sm' }">
    <span class="sun"></span>
    <span class="sunx"></span>
  </div>
</template>

<script>
export default {
  props: {
    size: { type: String, required: false },
  },
};
</script>

<style lang="postcss"  scoped>
.css-icon {
  @apply relative;
  width: 100px;
  height: 100px;
  border-radius: 40%;
  z-index: 120;
}
.hot {
  background: linear-gradient(
    to top right,
    rgba(255, 87, 34, 1) 0%,
    rgba(251, 140, 0, 1) 100%
  );
  box-shadow: 1px 1px 30px rgba(255, 111, 0, 1);
}
.sun {
  position: absolute;
  top: -10%;
  left: 65%;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: linear-gradient(
    to bottom left,
    rgba(255, 235, 59, 1) 0%,
    rgba(249, 168, 37, 1) 90%
  );
  box-shadow: 1px 1px 30px rgba(255, 160, 0, 1);
  animation: inex 3s infinite linear;
}

.sunx {
  position: absolute;
  top: 30%;
  left: 45%;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #fff;
  opacity: 0.2;
}

.css-icon.sm {
  width: 50px;
  height: 50px;
}

.sm .sun {
  width: 30px;
  height:30px;
}

@keyframes inex {
  50% {
    opacity: 0.4;
  }
  60% {
    opacity: 1;
  }
}
</style>