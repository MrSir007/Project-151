AFRAME.registerComponent('car', {
  schema: {
    scale: {type: 'number', default: '1'}
  },
  init: function() {
    var pos = this.el.getAttribute('position')
    this.el.setAttribute('position', {x: pos.x, y: pos.y, z: pos.z})
  }
})