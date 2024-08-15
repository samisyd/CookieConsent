const modalClose = document.getElementById('modal-close-btn')
const modal = document.getElementById('modal')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById("modal-text")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtns = document.getElementById('modal-choice-btns')

modalClose.addEventListener( "click", function(){
    modal.style.display = 'none'
    
})

/*   
Challenge: 
1. Take control of the div holding the buttons.
2. In index.css, set up a selector for a new class
   that uses flex-direction to reverse the order 
   of its child elements.
3. Toggle that class on the div holding the buttons 
   when a user's cursor hovers over the decline button.
*/ 
declineBtn.addEventListener('mouseenter', function(e) {
    console.log("hovered")
    modalChoiceBtns.classList.toggle('reverse')
})

setTimeout(function() {
    modal.style.display = 'inline'
}, 1500)

consentForm.addEventListener('submit', function(e){
    
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    console.log(consentFormData)
    const name = consentFormData.get('fullname')

    modalText.innerHTML = `
                        <div class="modal-inner-loading">
                            <img src="images/loading.svg" class="loading">
                            <p id="uploadText">
                                Uploading your data to the dark web...
                            </p>
                        </div>
                        `
    
    setTimeout(function(){
        document.getElementById('uploadText').innerText = `Making the sale...`
    }, 1500) 

    modalInner = document.getElementById("modal-inner")
    setTimeout(function() {

        modalInner.innerHTML =  `<h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
                                <p>We just sold the rights to your eternal soul.</p>
                                <div class="idiot-gif">
                                    <img src="images/pirate.gif">
                                </div>
                                ` 
        modalClose.disabled = false

    },3000)

    
})
