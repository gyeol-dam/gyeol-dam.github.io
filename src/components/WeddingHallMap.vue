<template xmlns="http://www.w3.org/1999/html">
  <div
    data-aos="fade-up"
    data-aos-duration="1500"
    class="d-flex justify-center flex-column align-center ga-5 pa-10 font-easta-heavy h-500px"
  >
    <div class="d-flex flex-column w-100 ga-3">
      <div class="sub-title">오시는길</div>
      <div class="d-flex flex-row ga-1">
        <v-divider vertical :thickness="2" class="border-opacity-50"></v-divider>
        <div class="map-content">
          JK아트컨벤션<br />
          서울 영등포구 문래로 164<br />
          02-2628-9100
        </div>
      </div>
    </div>
    <div class="map_wrap">
      <div id="map" class="mobile-map"></div>
      <div class="custom_zoomcontrol radius_border">
        <span :onClick="zoomIn"
          ><img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
            alt="확대"
        /></span>
        <span :onClick="zoomOut"
          ><img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
            alt="축소"
        /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'

let map = null
const container = ref(null)
const weddingPosition = ref(null)

onMounted(() => {
  if (window.kakao?.maps) {
    initMap()
  } else {
    loadScript()
  }
})

const loadScript = () => {
  const key = import.meta.env.VITE_KAKAOMAP_KEY

  const script = document.createElement('script')
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${key}&libraries=services`
  script.addEventListener('load', () => window.kakao.maps.load(initMap))
  document.head.appendChild(script)
}
const initMap = () => {
  container.value = document.getElementById('map')
  const options = {
    center: new window.kakao.maps.LatLng(37.2429362, 131.8624647)
  }
  map = new window.kakao.maps.Map(container.value, options)

  var ps = new window.kakao.maps.services.Places()
  ps.keywordSearch('JK아트컨벤션', placesSearchCB)
}
const placesSearchCB = (data, status) => {
  if (status === window.kakao.maps.services.Status.OK) {
    var bounds = new window.kakao.maps.LatLngBounds()

    for (var i = 0; i < data.length; i++) {
      displayMarker(data[i])
      bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x))
    }
    map.setBounds(bounds)
    map.setLevel(5)
  }
}

const displayMarker = (place) => {
  weddingPosition.value = place
  var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
    imageSize = new window.kakao.maps.Size(32, 34.5),
    imageOption = { offset: new window.kakao.maps.Point(13.5, 34) }

  var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new window.kakao.maps.LatLng(place.y, place.x)

  var marker = new window.kakao.maps.Marker({
    position: markerPosition,
    image: markerImage
  })
  marker.setMap(map)

  //TODO : 마커 정리하기
  var overayContent =
    '<div ref="customOverlay" class="customoverlay">' +
    '  <a href="https://map.naver.com/p/entry/place/1897374821?c=15.00,0,0,0,dh" target="_blank">' +
    '    <span class="title">JK아트컨벤션</span>' +
    '  </a>' +
    '</div>'

  new window.kakao.maps.CustomOverlay({
    map: map,
    position: markerPosition,
    content: overayContent,
    yAnchor: 1
  })
  nextTick(() => {
    var customOverlayElement = document.querySelector('.customoverlay')
    var customLinkElement = document.querySelector('.customoverlay a')
    var customTitleElement = document.querySelector('.customoverlay .title')

    if (customLinkElement) {
      customLinkElement.style.display = 'block'
      customLinkElement.style.textDecoration = 'none'
      customLinkElement.style.color = '#000'
      customLinkElement.style.textAlign = 'center'
      customLinkElement.style.borderRadius = '6px'
      customLinkElement.style.fontSize = '10px'
      customLinkElement.style.fontWeight = 'bold'
      customLinkElement.style.overflow = 'hidden'
      customLinkElement.style.background = '#d95050'
      customLinkElement.style.backgroundImage =
        'url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)'
      customLinkElement.style.backgroundPosition = 'right 3px center'
      customLinkElement.style.backgroundRepeat = 'no-repeat'
    }

    if (customTitleElement) {
      customTitleElement.style.display = 'block'
      customTitleElement.style.textAlign = 'center'
      customTitleElement.style.background = '#fff'
      customTitleElement.style.marginRight = '15px'
      customTitleElement.style.padding = '2px 5px'
      customTitleElement.style.fontSize = '14px'
      customTitleElement.style.fontWeight = 'bold'
    }
    if (customOverlayElement) {
      customOverlayElement.style.position = 'relative'
      customOverlayElement.style.bottom = '40px'
      customOverlayElement.style.right = '5px'
      customOverlayElement.style.borderRadius = '6px'
      customOverlayElement.style.border = '1px solid #ccc'
      customOverlayElement.style.borderBottom = '2px solid #ddd'
      customOverlayElement.style.float = 'left'
    }
  })
}

const zoomIn = () => {
  map.setLevel(map.getLevel() - 1)
}

const zoomOut = () => {
  map.setLevel(map.getLevel() + 1)
}
</script>

<style lang="scss" scoped>
@import '/src/styles/common.scss';

.map_wrap {
  position: relative;
  overflow: hidden;
  border: 1px solid #919191;
  border-radius: 5px;
  width: 100%;
  height: 350px;
}

.radius_border {
  border: 1px solid #919191;
  border-radius: 5px;
}

.custom_zoomcontrol {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 80px;
  overflow: hidden;
  z-index: 1;
  background-color: #f5f5f5;
}

.custom_zoomcontrol span {
  display: block;
  width: 36px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  padding: 10px;
}

.custom_zoomcontrol span img {
  width: 15px;
  height: 15px;
  border: none;
}

.custom_zoomcontrol span:first-child {
  border-bottom: 1px solid #bfbfbf;
}
</style>
