import _ from 'lodash';

  function component() {
      var element = document.createElement('div');
 
      element.innerHTML="Admin";

      return element;
  }
console.log('I get called from admin.js!');
document.body.appendChild(component());

