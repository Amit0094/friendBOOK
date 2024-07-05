export let counter = 0

function displayForm() {
    const form = document.querySelector(".form")
    if (form) {
        form.style.display = 'none'
    }

    const addFriend = document.querySelector('.btn')
    if (addFriend) {
        addFriend.addEventListener('click', () => {
            form.style.display = 'block'
            addFriend.style.display = 'none'
        })
    }
}
function hideForm() {
    const closeFormBtn = document.querySelector('.closeBtn')
    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', () => {
            const form = document.querySelector(".form")
            form.style.display = 'none'

            const addFriend = document.querySelector('.btn')
            addFriend.style.display = 'block'
            addFriend.style.textAlign = 'center'
        })
    }
}
let clutter = ''
const cardContainer = document.querySelector('.cards')

let data = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []


function extractData() {
    const form = document.querySelector('.form')
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const username = document.getElementById('username').value
            const age = document.getElementById('age').value
            const friendOrNot = document.getElementById('status').value
            validateData(e, username, age, friendOrNot)
        })
    }
}

function validateData(e, username, age, friendOrNot) {
    if (username === '' || username === undefined || username === null) {
        alert("Enter a valid name")
    }
    else if (age === '' || age === null || age === undefined) {
        alert('enter a valid age')
    }
    else if (friendOrNot === "" || friendOrNot === undefined || friendOrNot === null) {
        alert('enter a valid status')
    } else {
        data.push({
            name: username,
            Age: parseInt(age),
            Status: friendOrNot,
            gender: document.querySelector('input[name="gender"]:checked').value
        })
        storeData()
    }
}

function storeData() {
    localStorage.setItem("data", JSON.stringify(data))
    location.reload()
}

function showCard() {
    data.forEach((value, index) => {
        clutter += `<div class="card">
                            <div class="upper">
                                <div class="logo">${value.name[0]}</div>
                                <h3 class="name">${value.name}</h3>
                            </div>
                            <div class="lower">
                                <h4>Age : <span class="age">${value.Age}</span></h4>
                                <h4>Gender : <span class="age">${value.gender}</span></h4>
                                <h4>Status : <span class="age">${value.Status}</span></h4>
                            </div>
                        </div>`

        if (cardContainer) {
            cardContainer.innerHTML = clutter
        }
    });

}

function totalMembers() {
    data.forEach((ele) => {
        counter++
    })
}


function navigate() {
    const navigate = document.querySelector('.navigate')
    const navigate_icon = document.querySelector('#navigate-icon')
    const navBar = document.querySelector('nav')
    const leftContainer = document.querySelector('.left-container')
    const rightContainer = document.querySelector('.right-container')
    let toggle = true;
    navigate_icon.addEventListener('click', () => {
        if (toggle) {
            navigate.style.transform = 'translateX(0)'
            navBar.style.opacity = '0.2'
            if (leftContainer) {
                leftContainer.style.opacity = '0.2'
            }
            if (rightContainer) {
                rightContainer.style.opacity = '0.2'
            }
            toggle = false
        } else {
            navigate.style.transform = 'translateX(-100%)'
            navBar.style.opacity = '1'
            if (leftContainer && rightContainer) {
                leftContainer.style.opacity = '1'
                rightContainer.style.opacity = '1'
            }
            toggle = true
        }
    })
}

navigate()

displayForm()
extractData()
hideForm()
showCard()
totalMembers()