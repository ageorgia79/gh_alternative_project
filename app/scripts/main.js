  


var leftBar = _.template($('.left-bar').text());
var rightBar = _.template($('.right-bar').text());



$.getJSON("https://api.github.com/users/ageorgia79").done(function(data){
  renderLeftBar(data)
});

$.getJSON("https://api.github.com/users/ageorgia79").done(function(data){
  renderRightBar(data)
}); 



function renderLeftBar (avatar) {
    var rendered = leftBar(avatar);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};

function showName (fullname) {
    var rendered = leftBar(name);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};

function showLogin  (login) {
    var rendered = leftBar(login);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};

function showCompany (company) {
    var rendered = leftBar(company);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};

function showLocation (location) {
    var rendered = leftBar(location);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};

function showEmail (email) {
    var rendered = leftBar(email);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};

function showJoined (created_at) {
    var rendered = leftBar(created_at);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};

function showFollowers (followers) {
    var rendered = leftBar(followers);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};


function showFollowing (following) {
    var rendered = leftBar(following);
    console.log(rendered);
    $('.leftbar').prepend(rendered);
};

function renderRightBar (repos) {
  repos.forEach(function(name){
    var rendered = rightBar(name);
    $('.rightbar').prepend(rendered);
  })
};

function showUpdate (updated_at) {
  updated_at.forEach(function(updated_at){
    var rendered = rightBar(updated_at);
    $('.rightbar').prepend(rendered);
  })
};

function showLanguage (language) {
  language.forEach(function(language){
    var rendered = rightBar(language);
    $('.rightbar').prepend(rendered);
  })
};

function showStargazers (stargazers_count) {
  stargazers_count.forEach(function(stargazers_count){
    var rendered = rightBar(stargazers_count);
    $('.rightbar').prepend(rendered);

  })
};

function showForkscount (forks_count) {
  forks_count.forEach(function(forks_count){
    var rendered = rightBar(forks_count);
    $('.rightbar').prepend(rendered);
  })
};

//var showRepos = _.template($('.repos').text());

//$.getJSON("https://api.github.com/users/ageorgia79/repos?client_id=d82f8974d36fff4a443e&client_secret=d37f41c9c6ecb58dd9b8adc1a4987428bb28e5d0").done(function(info){
  //renderRepos(info)
//});

//function renderRepos (repos) {
  //repos.forEach(function(module){
    //var rendered = showRepos(module);
    //$('body').prepend(rendered);
  //})
//};
























//var getAvatar = _.template($('.get-avatar').text());

//repos.forEach(function(avatar_url) {

  //var allRepos = getAvatar(avatar_url);

  //$('.avatar').prepend(allRepos);
//});








//var showRepos = _.template($('.repos').text());

//$.getJSON("https://api.github.com/users/ageorgia79/repos?client_id=d82f8974d36fff4a443e&client_secret=d37f41c9c6ecb58dd9b8adc1a4987428bb28e5d0").done(function(info){
  //renderRepos(info)
//});

//function renderRepos (repos) {
  //repos.forEach(function(module){
    //var rendered = showRepos(module);
    //$('body').prepend(rendered);
  //})
//};





//repos.forEach(function(name) {

  //var allRepos = getName(name);

  //$('.rightbar').prepend(allRepos);
//});





//var getAvatar = _.template($('.get-avatar').text());

//repos.forEach(function(avatar_url) {

  //var allRepos = getAvatar(avatar_url);

  //$('.avatar').prepend(allRepos);
//});











  


