<template>
  <div class="css-icon breezy">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <span class="cloudr"></span>
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
.breezy {
  background: linear-gradient(
    to top right,
    rgba(156, 204, 101, 1) 0%,
    rgba(38, 198, 218, 1) 50%
  );
  box-shadow: 1px 1px 30px rgba(38, 198, 218, 1);
}
.cloudr {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  background-color: rgba(96, 125, 139, 1);
  box-shadow: 1px 1px 30px rgba(84, 110, 122, 1);
  animation: flash 1.5s infinite linear;
}

.breezy li {
  position: absolute;
  list-style: none;
  width: 2px;
  height: 7px;
  border-radius: 10%;
  background-color: #eee;
  opacity: 0;
  animation: fall 3s infinite linear;
  transform: rotate(25deg);
}
.breezy li:nth-child(1) {
  top: 10%;
  left: 95%;
}

.breezy li:nth-child(2) {
  top: 5%;
  left: 83%;
  animation-delay: 0.3s;
}

.breezy li:nth-child(3) {
  top: 4%;
  left: 87%;
  animation-delay: 0.6s;
}

.breezy li:nth-child(4) {
  top: 15%;
  left: 70%;
  animation-delay: 1s;
}

.breezy li:nth-child(5) {
  top: 10%;
  left: 75%;
}

@keyframes fall {
  10% {
    opacity: 0.8;
  }

  50% {
    opacity: 1;
    transform: translate(-10px, 30px);
  }
  100% {
    transform: translate(-25px, 70px);
  }
}
</style>