// Handling component removal
AFRAME.registerComponent('log', {
    schema: {
      event: {type: 'string', default: ''},
      message: {type: 'string', default: 'Hello, World!'}
    },
  
    init: function () {
      var self = this;
      this.eventHandlerFn = function () { console.log(self.data.message); };
 
       
    },
  
    update: function (oldData) {
      var data = this.data;
      var el = this.el;
  
      if (oldData.event && data.event !== oldData.event) {
        el.removeEventListener(oldData.event, this.eventHandlerFn);
      }
  
      if (data.event) {
        el.addEventListener(data.event, this.eventHandlerFn);
      } else {
        console.log(data.message);
      }
      // 아래 코드가 실행이 되기는 하나 예상 결과가 아님. 코드가 포함되야 하는 위치에 오류가 있다고 생각됨.
    //   var el = document.querySelector('a-entity');
    //   el.removeAttribute('log');
    //   el.emit('anEvent');
      // >> Nothing should be logged...

    },
  
    /**
     * Handle component removal.
     */
    remove: function () {
      var data = this.data;
      var el = this.el;
  
      // Remove event listener.
      if (data.event) {
        el.removeEventListener(data.event, this.eventHandlerFn);
      }
    }
  });