// $(".hover").mouseleave(
//     function () {
//       $(this).removeClass("hover");
//     }
// );



const el = document.getElementById('profileid');

const hiddenDiv = document.getElementById('hidden-div');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.display = 'block';

});

// ✅ (optionally) Hide DIV on mouse out
// el.addEventListener('mouseout', function handleMouseOut() {
//   hiddenDiv.style.display = 'none';

// });
