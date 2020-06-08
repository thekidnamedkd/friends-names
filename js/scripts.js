$(document).ready(function() {
event.preventDefault();
friendsnames = ["Bob", "Rob", "Nob"]
friendsnames.forEach(function(name) {
  alert('My friends name is ' + name + '.')
})
})

numbers = [0, 3, 6, 9, 12]
numbers.forEach(function(multiply) {
  console.log(multiply * 3);
})