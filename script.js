// this lets the button proceed by a click.
document.getElementById('button1').addEventListener('click', results)

// this lets the button know what to do after the click.
function results () {
  alert(document.getElementById('input1').value)
}
