AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {type: 'color', default: 'red'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;
      console.log(defaultColor);
      console.log(this.data.color);

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });
  