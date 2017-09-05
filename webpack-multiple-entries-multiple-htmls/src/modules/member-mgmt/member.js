import _ from 'lodash';

  function component() {
      var element = document.createElement('div');
 
      element.innerHTML="Member";

      return element;
  }
console.log('I get called from member.js!');
document.body.appendChild(component());
