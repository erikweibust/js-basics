// Objects

const circle = {
   radius: 1,
   location: {
      x: 1,
      y: 1
   },
   isVisible: true,
   draw: function() {
      console.log('draw');
   }
};

// factory functions
//
// need a way to create circle objects without copying the whole object
function createCircle(radius) {
   return {
      // this can be simplified when key and value match
      //radius: radius,
      radius, 
      draw() {
         console.log('draw');
      }
   };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();