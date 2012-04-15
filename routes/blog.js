
/*
 * GET blog page.
 */

exports.blog = function(req, res){
    console.log('There was a blog request.');
    res.render('blog');
};