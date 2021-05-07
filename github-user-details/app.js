// Instantiate Github class
const github = new Github;


// Instantiate UI class
const ui = new UI;

// Search input 
const searchUser = document.getElementById('searchUser');

// search input event listener on key stroke
searchUser.addEventListener('keyup', (e) => {
  // get input text from web form
  const userText = e.target.value;

  if (userText !== '') {
    
    // make http call to Github API 
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {

          // show alert on UI, accepts message & bootstrap alert classes as args
          ui.showAlert('User not found', 'alert alert-danger');

        } else {

          // show profile 
          ui.showProfile(data.profile);

        }
      })
  } else {
    // clear profile
    ui.clearProfile();
  }
});