const container = document.querySelector('.container'),
      pwShowHide = document.querySelectorAll('.showHidepw'),
      pwFields = document.querySelectorAll('.password'),
      signUp = document.querySelector('.signup-link'),
      logIn = document.querySelector('.login-link')

      //event listener to show/hide password
      pwShowHide.forEach((eyeIcon,index) =>{
        eyeIcon.addEventListener('click', () => {
           
                if (pwFields[index].type === 'password') {
                    pwFields[index].type = 'text'

                   eyeIcon.classList.replace('uil-eye-slash','uil-eye')
                } else {
                    pwFields[index].type = 'password'

                   eyeIcon.classList.replace('uil-eye','uil-eye-slash')
                }
            })
        })
       //event listeners for signup & login links
        signUp.addEventListener('click', ()=>{
            container.classList.add('active')
        })
        logIn.addEventListener('click', ()=>{
            container.classList.remove('active')
        })
      
     
      