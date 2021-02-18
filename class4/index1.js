AFRAME.registerComponent('log', {
    schema: {
      event: {type: 'string', default: ''},
      message: {type: 'string', default: 'Learn '}
    },
  
    init: function () {
      var self = this;
      this.eventHandlerFn = function () { console.log(self.data.message); };
    },
  
    update: function (oldData) {
      var data = this.data;
      var el = this.el;
  
      // `event` updated. Remove the previous event listener if it exists.
      if (oldData.event && data.event !== oldData.event) {
        el.removeEventListener(oldData.event, this.eventHandlerFn);
      }
  
      if (data.event) {
        el.addEventListener(data.event, this.eventHandlerFn);
      } else {
        console.log(data.message);
      }

      var el = document.querySelector('a-entity');
      //el.emit('anEvent');
      el.setAttribute('log', {event: 'anotherEvent', message: 'Hello, new event!'});
      el.emit('anotherEvent');

    }
});