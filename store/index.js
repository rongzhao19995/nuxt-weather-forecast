import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            cityList: [],
            favouriteList: [],
            currentCord: {},
            openWeatherMapCircleList: {},
            openWeatherMapCityWeather: {},
            openWeatherSearchingWeatherList: {},
        },
        mutations: {

            // Firebase //
            setCityList(state, cityList) {
                state.cityList = cityList;
            },
            addCityToCityList(state, city) {
                state.cityList.push(city);
            },
            setFavouriteList(state, favouriteList) {
                state.favouriteList = favouriteList;
            },
            addFavouriteCityToFavouriteList(state, city) {
                state.favouriteList.push(city);
            },

            // Geolocation // 
            setCurrentCord(state, currentCord) {
                state.currentCord = currentCord;
            },

            // Open Weather Map // 
            setOpenWeatherMapCircleList(state, openWeatherMapCircleList) {
                state.openWeatherMapCircleList = openWeatherMapCircleList;
            },
            setOpenWeatherMapCityWeather(state, openWeatherMapCityWeather) {
                state.openWeatherMapCityWeather = openWeatherMapCityWeather;
            },
            setOpenWeatherSearchingWeatherList(state, openWeatherSearchingWeatherList) {
                state.openWeatherSearchingWeatherList = openWeatherSearchingWeatherList;
            },
        },
        actions: {
            nuxtServerInit(vueContext, context) {
                return context.app.$axios.$get("https://weather-forecase-nuxt-default-rtdb.asia-southeast1.firebasedatabase.app/cities.json")
                    .then(data => {
                        const cityListArray = [];
                        for (const key in data) {
                            cityListArray.push({ ...data[key], id: key });
                        }
                        vueContext.commit("setCityList", cityListArray);
                    })
                    .catch(e => context.error(e));
            },

            // Firebase //
            setCityList(vueContext, cityList) {
                vueContext.commit("setCityList", cityList);
            },
            addCityToCityList(vueContext, city) {
                return this.$axios.$post("https://weather-forecase-nuxt-default-rtdb.asia-southeast1.firebasedatabase.app/cities.json", city)
                    .then(data => {
                        vueContext.commit("addCityToCityList", { ...city, id: data.name });
                    })
                    .catch(e => console.log(e));
            },
            fetchFavouriteList(vueContext) {
                return this.$axios.$get("https://weather-forecase-nuxt-default-rtdb.asia-southeast1.firebasedatabase.app/favourite.json")
                    .then(data => {
                        const cityListArray = [];
                        for (const key in data) {
                            cityListArray.push({ ...data[key], id: key });
                        }
                        vueContext.commit("setFavouriteList", cityListArray);
                    })
                    .catch(e => context.error(e));

            },
            setFavouriteList(vueContext, favouriteList) {
                vueContext.commit("setFavouriteList", favouriteList);
            },
            addFavouriteCityToFavouriteList(vueContext, city) {
                return this.$axios.$post("https://weather-forecase-nuxt-default-rtdb.asia-southeast1.firebasedatabase.app/favourite.json", city)
                    .then(data => {
                        vueContext.commit("addFavouriteCityToFavouriteList", { ...city, id: data.name });
                    })
                    .catch(e => console.log(e));
            },

            // Geolocation // 
            setCurrentCord(vueContext, data) {
                vueContext.commit("setCurrentCord", data);
            },

            // Open Weather Map // 
            fetchOpenWeatherMapCircleListByLatLon(vueContext, { lat, lon }) {
                return this.$axios.$get(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=840937906722893d2f73c00b953b1969`)
                    .then(data => {
                        vueContext.commit("setOpenWeatherMapCircleList", data);
                    })
                    .catch(e => console.log(e));
            },
            fetchOpenWeatherMapCityWeatherByLatLon(vueContext, { lat, lon }) {
                return this.$axios.$get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=840937906722893d2f73c00b953b1969`)
                    .then(data => {
                        vueContext.commit("setOpenWeatherMapCityWeather", data);
                        return data;
                    })
                    .catch(e => console.log(e));
            },
            fetchOpenWeatherSearchingWeatherListByName(vueContext, { keyword }) {
                return this.$axios.$get(`http://api.openweathermap.org/data/2.5/find?q=${keyword}&appid=840937906722893d2f73c00b953b1969`)
                    .then(data => {
                        return data.list;
                        // vueContext.commit("setOpenWeatherSearchingWeatherList", data);
                    })
                    .catch(e => console.log(e));
            },
            setOpenWeatherMapCircleList(vueContext, data) {
                vueContext.commit("setOpenWeatherMapCircleList", data);
            },
            setOpenWeatherMapCityWeather(vueContext, data) {
                vueContext.commit("setOpenWeatherMapCityWeather", data);
            },
            setOpenWeatherSearchingWeatherList(vueContext, data) {
                vueContext.commit("setOpenWeatherSearchingWeatherList", data);
            },

        },
        getters: {

            // Firebase //
            cityList(state) {
                return state.cityList;
            },
            favouriteList(state) {
                return state.favouriteList;
            },

            // Geolocation // 
            currentCord(state) {
                return state.currentCord;
            },

            // Open Weather Map // 
            openWeatherMapCircleList(state) {
                return state.openWeatherMapCircleList;
            },
            openWeatherMapCityWeather(state) {
                return state.openWeatherMapCityWeather;
            },
            openWeatherSearchingWeatherList(state) {
                return state.openWeatherSearchingWeatherList;
            },

        }
    })
}

export default createStore;