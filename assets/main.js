

const loginButtons = document.querySelectorAll('.js-authen');
const login = document.querySelector('.js-modal-login');
const register = document.querySelector('.js-modal-register');
const modalOff = document.querySelectorAll('.modal-overlay');
const modal = document.querySelectorAll('.modal')

const btnList = document.querySelector('.js_header-list')
const mainCategory = document.querySelector('.category')
const categoryHeading = document.querySelector('.category__heading')
const category = document.querySelector('.overlay-on-mobile')

loginButtons[1].addEventListener('click',function() {login.classList.add('open');})
loginButtons[0].addEventListener('click',function() {register.classList.add('open');})
for(var i = 0 ; i < 2 ; i++){
    modalOff[i].addEventListener('click',function() {
        for(var i = 0 ; i < 2 ; i++){
            modal[i].classList.remove('open');

            // ấn vào phần ovẻrlay cả 2 login.register cùng out ra
        }
    })

}

btnList.addEventListener('click',function() {category.classList.add('open')})
categoryHeading.addEventListener('click',function() {category.classList.remove('open');mainCategory.classList.remove('open')})
mainCategory.addEventListener('click', function(event) { event.stopPropagation()  })
category.addEventListener('click',function() {category.classList.remove('open')})
outList.addEventListener('click', function(){category.classList.remove('open')})

   