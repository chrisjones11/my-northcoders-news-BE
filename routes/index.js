const router = require('express').Router(); 
const {fetchAllTopics, fetchTopicsById, fetchAllArticles, fetchCommentsFromArticle, addCommentToArticle, changeArticleVoteByOne, changeCommentVoteByOne, deleteComment, fetchUser} = require('../controllers/index');



router.get ('/topics', fetchAllTopics);

router.get ('/topics/:topic/articles', fetchTopicsById);

router.get ('/articles', fetchAllArticles);

router.get ('/articles/:article_id/comments', fetchCommentsFromArticle);

router.post ('/articles/:article_id/comments', addCommentToArticle);

router.put ('/articles/:article_id', changeArticleVoteByOne);

router.put ('/comments/:comment_id', changeCommentVoteByOne);

router.delete ('/comments/:comment_id', deleteComment);

router.get ('/users/:username', fetchUser);


module.exports = router;