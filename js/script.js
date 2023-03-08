const form = document.querySelector("#googleform")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycbyCfEMlnVcgFq6luT6iPBu1t5Q7C4TYcTTgY4RURziPZR0hLezuTyaovRyW75C3IwygaQ/exec'

form.addEventListener('submit', e => {
    e.preventDefault()
    let requestBody = new FormData(form)
    console.log(requestBody);
    fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {})
    .catch(error => {
    alert('Error!', error.message)
    }
    )
})