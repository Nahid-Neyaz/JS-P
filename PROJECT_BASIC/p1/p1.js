console.log("HIPPO")
const buttons = document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function (button){
 console.log(button)
 button.addEventListener('click', function(mingo){
  console.log(mingo)
  console.log(mingo)

  if (mingo.target.id === 'grey') {
    body.style.backgroundColor = mingo.target.id;
  }
  if (mingo.target.id === 'white') {
    body.style.backgroundColor = mingo.target.id;
  }
  if (mingo.target.id === 'blue') {
    body.style.backgroundColor = mingo.target.id;
  }
  if (mingo.target.id === 'yellow') {
    body.style.backgroundColor = mingo.target.id;
  }
 })
})