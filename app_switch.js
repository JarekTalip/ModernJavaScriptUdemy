let color;

color = 'purple';

switch(color) {
  case 'yellow':
    console.log('Color is yellow');
    break;
   case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('I do not recognize the color');
    break;
}

let day = new Date ();
day = day.getDay() -6;

switch(day) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  default:
    console.log('What day?')
    break;
}