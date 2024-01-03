
var users =[]
function getUsers()
    {
        console.log(localStorage.getItem('login_Users'))
        if(localStorage.getItem('login_Users')!==null)
{
    users = JSON.parse(localStorage.getItem('login_Users'))
    // console.log("users:1  "+users.length)
}

    }



//***********************Elements********************************************************************
var txtsignPsw = document.getElementById('signupPassword')
var txtsignName = document.getElementById('signupName')
var txtsignEmail = document.getElementById('signupEmail')
var txtsignEmailReq = document.getElementById('signupEmailReq')
var txtsignPswReq = document.getElementById('signupPswReq')
var errorMsg = document.getElementById('signError')
var passwrodReq = document.getElementById('passwordReq')
var EmailReq = document.getElementById('EmailReq')
var btnLogin = document.getElementById('btn-login')
var txtPassword = document.getElementById('passwordTxt') 
var txtEmail = document.getElementById('emailTxt') 
var loginError = document.getElementById('loginError')
var checkbox = document.getElementById('chk');

// ************************clear Inputs******************************************************************

checkbox.addEventListener('change', function() {
    if (this.checked) {
      txtEmail.value=""
      txtPassword.value = "";
      loginError.innerHTML = "";
    
      if(EmailReq.classList.contains('d-none')!=true)
      {
          EmailReq.classList.add('d-none')
      }
      if(passwrodReq.classList.contains('d-none')!=true)
      {
          passwrodReq.classList.add('d-none')
      }
      if(txtEmail.classList.contains('is-invalid')==true)
      {
          txtEmail.classList.remove('is-invalid')
      }
      if(txtEmail.classList.contains('is-valid')==true)
      {
          txtEmail.classList.remove('is-valid')
      }
      if(txtPassword.classList.contains('is-invalid')==true)
      {
          txtPassword.classList.remove('is-invalid')
      }
      if(txtPassword.classList.contains('is-valid')==true)
      {
          txtPassword.classList.remove('is-valid')
      }
    } else {
        txtsignEmail.value=""
        txtsignPsw.value = "";
        txtsignName.value = "";
        errorMsg.innerHTML = "";
        if(txtsignEmailReq.classList.contains('d-none')!=true)
        {
            txtsignEmailReq.classList.add('d-none')
        }
        if(txtsignPswReq.classList.contains('d-none')!=true)
        {
            txtsignPswReq.classList.add('d-none')
        }
        if(txtsignEmail.classList.contains('is-invalid')==true)
        {
            txtsignEmail.classList.remove('is-invalid')
        }
        if(txtsignEmail.classList.contains('is-valid')==true)
        {
            txtsignEmail.classList.remove('is-valid')
        }
        if(txtsignPsw.classList.contains('is-invalid')==true)
        {
            txtsignPsw.classList.remove('is-invalid')
        }
        if(txtsignPsw.classList.contains('is-valid')==true)
        {
            txtsignPsw.classList.remove('is-valid')
        }
        if(txtsignName.classList.contains('is-invalid')==true)
        {
            txtsignName.classList.remove('is-invalid')
        }
        if(txtsignName.classList.contains('is-valid')==true)
        {
            txtsignName.classList.remove('is-valid')
        }
     
       
    }
  });
    


// *******************Valiodation**************************************************************************
function validationEmail(txt,reqText)

{

    
    errorMsg.innerHTML="";
    loginError.innerHTML="";
    var emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/   
    
  if(txt.value !== '')
  {
    
    // console.log('out')

    if(emailRegex.test(txt.value) == false)
    {
        console.log('true')
        
    
        txt.style.border.color = 'red';
        
        if(txt.classList.contains('is-valid')==true)
        {
            txt.classList.remove('is-valid')
        }
        if(txt.classList.contains('is-invalid')!=true)
        {
            txt.classList.add('is-invalid')
        }
        if(reqText.classList.contains('d-none')==true)
        {
            reqText.classList.remove("d-none")
        }
      
        return false
     
    }
    
    else
    {
        if(txt.classList.contains('is-valid')!=true)
        {
            txt.classList.add('is-valid')
        }
        if(txt.classList.contains('is-invalid')==true)
        {
            txt.classList.remove('is-invalid')
        }
        if(reqText.classList.contains('d-none')!=true)
        {
            reqText.classList.add("d-none")
        }
      
        return true;
        // document.getElementById('btnSign').classList()
    }
  }
}

function validationPsw(txt,reqText)
{
    
    errorMsg.innerHTML="";
    loginError.innerHTML="";
    var pswRegex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/   
    
  if(txt.value !== '')
  {
    
    // console.log('out')

    if(pswRegex.test(txt.value) == false)
    {
        console.log('true')
        
    
        txt.style.border.color = 'red';
        
        if(txt.classList.contains('is-valid')==true)
        {
            txt.classList.remove('is-valid')
            
        }
        if(txt.classList.contains('is-invalid')!=true)
        {
            txt.classList.add('is-invalid')
        }
        
        if(reqText.classList.contains('d-none')==true)
        {
            reqText.classList.remove("d-none")
        }
        return false
     
    }
    
    else
    {
        if(txt.classList.contains('is-valid')!=true)
        {
            txt.classList.add('is-valid')
        }
        if(txt.classList.contains('is-invalid')==true)
        {
            txt.classList.remove('is-invalid')
        }
        if(reqText.classList.contains('d-none')!=true)
        {
            reqText.classList.add("d-none")
        }
        return true;
        // document.getElementById('btnSign').classList()
    }
  }

}
function validationName()
{
    errorMsg.innerHTML="";
    loginError.innerHTML="";
    if(txtsignName.value!='')
    {
        if(txtsignName.classList.contains('is-invalid')==true)
        {
            txtsignName.classList.remove('is-invalid')

        }
    }
    else
    {
        if(txtsignName.classList.contains('is-invalid')!=true)
        {
            txtsignEmail.classList.add('is-invalid')

        }
    }
}
// ********************************Sign Up***********************************************


function signUp()
{
    var check =true
    errorMsg.innerHTML=""
    if(txtsignName.value == '')
    {
        if(txtsignName.classList.contains('is-invalid')!=true)
        {
            txtsignName.classList.add('is-invalid')
            check = false

        }
    }
    
    if( txtsignEmail.value=='' || txtsignEmailReq.classList.contains('d-none')!=true)
    {
        if(txtsignEmail.classList.contains('is-invalid')!=true)
        {
            txtsignEmail.classList.add('is-invalid')
            check = false;
        }
        
    }
    if(txtsignPsw.value=='' || txtsignPswReq.classList.contains('d-none')!=true)
    {
        if(txtsignPsw.classList.contains('is-invalid')!=true)
        {
            txtsignPsw.classList.add('is-invalid')
            check = false
        }
    
    }
    
   
    if(check){

            
        getUsers()
        // console.log(users.length)
        if(users.length !=0)
        {
            var found = false
            for(var i =0; i<users.length;i++)
            {
                if(found==false)
                {
                        if(users[i].Email == txtsignEmail.value)
                    {
                        
                        errorMsg.innerHTML = 'Email is already exist you can login'
                        found=true;
                        return;
                    }
                }
            }
            
                
                if(found==false)
                {
                    var user={Name:txtsignName.value,
                        Password:txtsignPsw.value,
                        Email:txtsignEmail.value}
                
                users.push(user)
                localStorage.setItem('login_Users',JSON.stringify(users))
                errorMsg.innerHTML = 'Account is added successfuly '
                
                txtsignEmail.value="";
                txtsignName.value="";
                txtsignPsw.value = "";
                if(txtsignEmail.classList.contains('is-valid')==true)
            {
                txtsignEmail.classList.remove('is-valid')

            }
           
            if(txtsignPsw.classList.contains('is-valid')==true)
            {
                txtsignPsw.classList.remove('is-valid')

            }
              

                }
                
    
            
                
        
        }
        else
        {
            var user={Name:txtsignName.value,
                Password:txtsignPsw.value,
                Email:txtsignEmail.value}
        
            users.push(user)
            localStorage.setItem('login_Users',JSON.stringify(users))
            errorMsg.innerHTML = 'Account is added successfuly '
            
            txtsignEmail.value="";
            txtsignName.value="";
            txtsignPsw.value = "";
            
            if(txtsignEmail.classList.contains('is-valid')==true)
            {
                txtsignEmail.classList.remove('is-valid')

            }
           
            if(txtsignPsw.classList.contains('is-valid')==true)
            {
                txtsignPsw.classList.remove('is-valid')

            }

       }
            
       

    }   
}



// *********************************************Login************************************************


function login()
{
    var check =true
    loginError.innerHTML=""
    if( txtEmail.value=='' || EmailReq.classList.contains('d-none')!=true)
    {
        if(txtEmail.classList.contains('is-invalid')!=true)
        {
            txtEmail.classList.add('is-invalid')
            check = false;
        }
        
    }
    if(txtPassword.value=='' || passwrodReq.classList.contains('d-none')!=true)
    {
        if(txtPassword.classList.contains('is-invalid')!=true)
        {
            txtPassword.classList.add('is-invalid')
            check = false
        }
    
    }
   
    if(check){
          getUsers()

        if(users.length!=0)
        {
            var found =false

            for(var i=0;i<users.length;i++)
            {

            
                if( users[i].Email == txtEmail.value && users[i].Password == txtPassword.value)
                {
                    found = true;
                    localStorage.setItem('userIndex',JSON.stringify(users[i].Name))
                    var newwin = window.open('home.html',"_self")
           
                    return;
                    
                }
                if( users[i].Email == txtEmail.value && users[i].Password != txtPassword.value)
                {
                    found=true;
                    loginError.innerHTML="Wrong Password";
                    return;

                }
                
                
        

            }
            if(found==false)
            {
                
             
              loginError.innerHTML = "user Not found please check your data or sign up for new user!"
              if(loginError.classList.contains('d-none')==true)
              {
                loginError.classList.remove('d-none')
              }
            }
        }
        else
        {
        
            
          loginError.innerHTML =  "user Not found please check your data or sign up for new user!"
          if(loginError.classList.contains('d-none')==true)
          {
            loginError.classList.remove('d-none')
          }
        }
      
}
}

// *************************************SignOUt******************************************
function signOut()
{

    localStorage.removeItem('userIndex')
    var newwin = window.open('index.html',"_self")
}



