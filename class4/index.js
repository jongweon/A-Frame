AFRAME.registerComponent('hello-world', {
  init: function () {
    console.log('Hello, World!');
  }
});        

// 다음 내용은 어떻게 사용하는지 확인되지 않음.
// document.querySelector('a-scene').setAttribute('hello-world', '');

// Consider a component as a function then component's properties are arguments of the function.
// The function can access the properties using this.data
// AFRAME.registerComponent('log', {
//   schema: {
//     message: {type: 'string', default: 'Hello, My friend!'}
//   },

//   // Used once at the beginning of the lifecycle with the initial properties.
//   // The initial properties can be default or the given value.
//   init: function () {
//     console.log(this.data.message);
//   }
// });

AFRAME.registerComponent('log', {
  schema: {
    event: {type: 'string', default: ''},
    message: {type: 'string', default: 'Save!'}
  },

  update: function () {
    var data = this.data;  // Component property values.
    var el = this.el;  // Reference to the component's entity.

    // console.log(data.event);
    if (data.event) {
      // This will log the `message` when the entity emits the `event`.
      el.addEventListener(data.event, function () {
        console.log(data.message + ' with me');
      });
    } else {
      // entity 선언하면서 `event`를 포함하지 않으면 단순 메시지 출력.
      console.log(data.message);
    }
    // 아래 event 발생 코드가 없으면 entity에 'event'가 포함되어 있어도 if문 통과가 되지 못함 
    var el = document.querySelector('a-entity');
    el.emit('anEvent');
  }
});

