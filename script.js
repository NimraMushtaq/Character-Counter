const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainCounterEl = document.getElementById("remaining-counter")
textareaEl.addEventListener("keyup", () => {
  updateCounter()
})
function updateCounter(){
  const charCount=textareaEl.value.length;
  totalCounterEl.innerText=charCount
  remainCounterEl.innerText=textareaEl.getAttribute("maxlength")-charCount;
}