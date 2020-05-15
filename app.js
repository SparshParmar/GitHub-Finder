//Serach input
const searchUser = document.getElementById('searchUser');
//init GitHub

const github =  new GitHub();
const ui = new UI();


searchUser.addEventListener('keyup',(e)=>{
  //get input text
  const userText = e.target.value;
  if(userText!== ''){
    //make httpCall
    github.getUser(userText).then(data=>{
      if(data.profile.message=='Not Found'){
          // show Alert
          ui.showAlert('user Not Found','alert alert-danger');
    
      }
      else{
          // Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
      }
     // console.log(data);
    })
  }
  else{
    //Clear Profile
    ui.clearProfile();
    
  }
});