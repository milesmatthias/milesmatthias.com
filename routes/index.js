
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.blog = function(req, res){
    res.render('blog');
    console.log('Blog route function in the index.js');
}