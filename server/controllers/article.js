const Article = require('../models/article'),
      User = require('../models/user')

class Controller {

    static create(req, res) {
        const article = new Article({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            author_id: req.data._id,
            like: 0,
            dislike: 0
        })

        article.save(function(err, article) {
            if (err) {
                console.log('salah di save nya, ' + err);
                res.status(500).json({message: err})
            }
            else {
                User.findOneAndUpdate({
                    _id: req.data._id
                }, {
                    $push: { articles: article._id}
                })
                    .then(() => {
                        console.log('Added article to User');
                        res.status(201).json({
                            message: `Successfully added ${req.body.title} to ${req.data.name}'s list of articles`
                        })
                        
                    })
                    .catch(err => {
                        res.status(500).json({message: err})
                    })
            }
        })
    }
    static showAllArticle(req, res) {
        Article.find({})
         .populate('author_id')
         .then( articles => {
            res.status(200).json({
                data: articles
            })
         })
         .catch(err => {
            console.log('salah di show all article nya, ' + err);
            res.status(500).json({message: err})
         })
    }

    static showAllUserArticle(req, res) {
        Article.find({
            author_id: req.data._id
        })
         .then( articles => {
            res.status(200).json({
                data: articles
            })
         })
         .catch(err => {
            console.log('salah di show all article punya user nya, ' + err);
            res.status(500).json({message: err})
             
         })
    }
    static getArticle(req,res) {
        Article.findOne({
            _id : req.params.id
        })
            .then( article => {
                res.status(200).json({
                    data: article
                })
            })
            .catch( err => {
                console.log('salah di get satu article' + err);
                res.status(500).json({err:err})
            })
    }

    static update(req,res){
        Article.findOne({
            _id: req.params.id
        })
          .then( article =>{
              console.log(req.data._id);
              
              console.log(article.author_id);
              
            if(article.author_id.toString() === req.data._id){
                Article.findOneAndUpdate({
                    _id: req.params.id
                },{
                    $set: {
                        title:req.body.title,
                        description: req.body.description,
                        image: req.body.image
                    }
                })
                  .then(newArticle =>{     
                    res.status(201).json({
                        data: newArticle
                    }) 
                  })
                  .catch(err =>{
                    console.log('error update nya, ' + err);
                    res.status(500).json({message: err})
                  })
            }else if(article.author_id.toString() !== req.data._id){
                console.log('user nga ada permission ke article');
                res.status(500).json({message: 'User have no permission to update this article'})
            }
          })
          .catch(err =>{
            console.log('error cari article nya, ' + err);
            res.status(500).json({message: err})
          })
    }
}

module.exports = Controller 