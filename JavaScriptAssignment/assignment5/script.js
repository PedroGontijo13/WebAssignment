function getVal() {
  const name = document.getElementById('fullname').value
  const val = document.getElementById('age').value.length;
  console.log(val);
  if (val <= 6) {
    changeColorAge()
    alert("You need to be older than 6")
  }
  if (name.length <= 5) {
    changeColorName()
    alert("Must be full name")
  }
}

function changeColorAge() {
  const val = document.getElementById('age');
  val.style.borderColor = 'red'
}

function changeColorName() {
  const val = document.getElementById('fullname');
  val.style.borderColor = 'red'
}
const btn = document.getElementById("btn-submit")
btn.addEventListener("click", function (event) {
  event.preventDefault()
  getVal()
  ButtonSubmit()
});

function ButtonSubmit() {
  const age = document.getElementById("age").value
  const name = document.getElementById("fullname").value
  const familyName = document.getElementById("family").value
  console.log(name, age, familyName)
}