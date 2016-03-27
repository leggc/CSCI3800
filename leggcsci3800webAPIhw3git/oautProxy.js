/**Christopher Legg
 ** CSCI 3800 WebAPI hw3
 ** oauthProxy
 **/

function testGitHub( ) {
  var GitHubApi = require("github");

  var github = new GitHubApi({
    // required
    version: "3.0.0"
  });

  //github.authenticate({
  //    type: "basic",
  //    username: "leggc",
  //    password: "password"
  //});

  var token = "";

  github.authenticate({
    type: "oauth",
    token: token
  });

  github.user.get({ user: 'leggc'} , function(err, res) {
    console.log("GOT ERR?", err);
    console.log("GOT RES?", res);

    github.repos.getAll({}, function(err, res) {
      console.log("GOT ERR?", err);
      console.log("GOT RES?", res);
    });
  });
}
