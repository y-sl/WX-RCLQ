/* eslint-disable */
const map = new BMap.Map('map', {
  maxZoom: 15
})

map.setMapStyle({
  style: 'midnight'
})
map.centerAndZoom(new BMap.Point(120.304407, 31.68857), 13)

map.enableScrollWheelZoom(true)

export { map }
