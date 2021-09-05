<template>
  <div class="header-container">
    <!-- Profile -->
    <nuxt-link to="/">
      <div
        class="
          h-10
          w-10
          flex
          items-center
          justify-center
          rounded-lg
          cursor-pointer
          hover:text-gray-800
          hover:bg-white
          hover:duration-300
          hover:ease-linear
          focus:bg-white
        "
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </div>
    </nuxt-link>

    <!-- Search -->
    <nuxt-link to="/search">
      <div
        class="
          h-10
          w-10
          flex
          items-center
          justify-center
          rounded-lg
          cursor-pointer
          hover:text-gray-800
          hover:bg-white
          hover:duration-300
          hover:ease-linear
          focus:bg-white
        "
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </nuxt-link>

    <!-- Favourite -->
    <nuxt-link to="/favourites">
      <div
        class="
          h-10
          w-10
          flex
          items-center
          justify-center
          rounded-lg
          cursor-pointer
          hover:text-gray-800
          hover:bg-white
          hover:duration-300
          hover:ease-linear
          focus:bg-white
        "
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="css-i6dzq1"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          ></path>
        </svg>
      </div>
    </nuxt-link>

    <!-- Admin -->
    <!-- <nuxt-link to="/addCities">
      <div
        class="
          h-10
          w-10
          flex
          items-center
          justify-center
          rounded-lg
          cursor-pointer
          hover:text-gray-800
          hover:bg-white
          hover:duration-300
          hover:ease-linear
          focus:bg-white
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
    </nuxt-link> -->

    <!-- Configuration -->
    <div
      class="
        h-10
        w-10
        flex
        items-center
        justify-center
        rounded-lg
        cursor-pointer
        hover:text-gray-800
        hover:bg-white
        hover:duration-300
        hover:ease-linear
        focus:bg-white
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}

.header-container {
  @apply fixed bottom-0 bg-black text-white w-full p-4 flex flex-row justify-center items-center;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  & div {
    @apply mx-4;
  }
}
</style>