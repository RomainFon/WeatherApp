<template>
  <img alt="Weather Icon" class="m-auto w-64" :src="getWeatherIcon"/>
</template>

<script>
import OneDay from "../../assets/weather-icons/01d.svg"
import OneNight from "../../assets/weather-icons/01n.svg"
import TwoDay from "../../assets/weather-icons/02d.svg"
import TwoNight from "../../assets/weather-icons/02n.svg"
import ThreeDay from "../../assets/weather-icons/03d.svg"
import ThreeNight from "../../assets/weather-icons/03n.svg"
import FourDay from "../../assets/weather-icons/04d.svg"
import FourNight from "../../assets/weather-icons/04n.svg"
import NineDay from "../../assets/weather-icons/09d.svg"
import NineNight from "../../assets/weather-icons/09n.svg"
import TenDay from "../../assets/weather-icons/10d.svg"
import TenNight from "../../assets/weather-icons/10n.svg"
import ElevenDay from "../../assets/weather-icons/11d.svg"
import ElevenNight from "../../assets/weather-icons/11n.svg"
import ThirteenDay from "../../assets/weather-icons/13d.svg"
import ThirteenNight from "../../assets/weather-icons/13n.svg"
import FiftyDay from "../../assets/weather-icons/50d.svg"
import FiftyNight from "../../assets/weather-icons/50n.svg"

export default {
  props: {
    name: {
      type: String,
      default: null
    }
  },
  computed: {
    getWeatherIcon() {
      switch (this.name) {
        case '01d': return OneDay;
        case '01n': return OneNight;
        case '02d': return TwoDay;
        case '02n': return TwoNight;
        case '03d': return ThreeDay;
        case '03n': return ThreeNight;
        case '04d': return FourDay;
        case '04n': return FourNight;
        case '09d': return NineDay;
        case '09n': return NineNight;
        case '10d': return TenDay;
        case '10n': return TenNight;
        case '11d': return ElevenDay;
        case '11n': return ElevenNight;
        case '13d': return ThirteenDay;
        case '13n': return ThirteenNight;
        case '50d': return FiftyDay;
        case '50n': return FiftyNight;
      }
    },
  }
}
</script>