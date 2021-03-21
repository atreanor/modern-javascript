//  ########## Event Listener for Get Text Button, calls getTest function  #########
document.getElementById('button1').addEventListener('click', getText);

//  ##########  Event Listener for Get Json Button, calls getJson function  ###########
document.getElementById('button2').addEventListener('click', getJson);

//  ########## Event Listener for Get API Data, calls getExternalApi function  ##########
document.getElementById('button3').addEventListener('click', getExternalApi);


// ---------  getText function  ----------
// getText function retrieves text from local file using fetch/promises
function getText() {
  // call fetch function passing file, which will return a promise
  fetch('test.txt')
    // to get a response from a promise use .then to return text
    .then(function(res) {
      return res.text();
    })
    // Alternatively, you can use arrow functions to reduce code
    //.then(res => res.text())
    //.then(data => { console.log(data); 
    //    document.getElementById('output').innerHTML = data;
    //})
    // .catch(err => console.log(err));
    // use .then again to get data from returned text
    .then(function(data){
      console.log(data);
      // output data to DOM
      document.getElementById('output').innerHTML = data;
    })
    // use .catch to catch error & display to console
    .catch(function(err){
      console.log(err);
    });
}

// ---------  getJson function  ----------
// getJson function retrieves Json from local file using fetch/promises
function getJson() {
  // call fetch function passing file, which will return a promise
  fetch('post.json')
    // to get a response from a promise use .then to return text
    .then(function(res) {
      return res.json();
    })
    // use .then again to get data from returned text
    .then(function(data){
      console.log(data);
      // output json data to DOM by iterating over it & adding as list item
      let output = '';
      data.forEach(function(post){
        output+= `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    // use .catch to catch error & display to console
    .catch(function(err){
      console.log(err);
    });
}


//  ----------  getExternalApi function  ----------
// getExternalApi function retreives Json from external api using fetch/promises
function getExternalApi() {
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data);
    let output = '<h5>Top 30 Github Users</h5>';
    data.forEach(function(user){
      output += `<li>Username : ${user.login}</li><li>URL : ${user.url}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  })
}
