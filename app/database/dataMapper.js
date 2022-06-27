const db = require('./client');

const dataMapper = {

   async fetchAllUsers(){
        const allUser = await db.query(`
        SELECT * 
        FROM users 
        `);
        const results = allUser.rows;
        return results;
    },

    async fetchLastArticles() {
        const resutsLastArticlesQuery = await db.query('SELECT * FROM article ORDER BY id DESC LIMIT 4');
        const lastArticlesResults = resutsLastArticlesQuery.rows;
        return lastArticlesResults;
    },

    async fetchAllArticles() {
       const allArticlesQuery = await db.query('SELECT * FROM article ORDER BY id ASC LIMIT 12');
       const allArticlesResults = allArticlesQuery.rows;
       return allArticlesResults;
       
    },

    async fetchOneArticleAndComments(articleId) {

        const oneArticleQuery = await db.query(`SELECT * FROM article WHERE id = $1`, [articleId]);
        const oneArticleResult = oneArticleQuery.rows[0];
   
        return oneArticleResult;
    },

    async fetchAllComments(articleId){

        const query = `
        SELECT * FROM article
        JOIN comment ON article.id = comment.article_id
        JOIN users ON users.id = comment.user_id
        WHERE article.id = $1
        `
        const result = await db.query(query, [articleId]);
        const commentsWanted = result.rows;
        return commentsWanted;
    },

    async addArticle(article, sessionUserId) {
        const query = `
        INSERT 
        INTO article (picture, title, content, user_id) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *
        `
       const result = await db.query(query, [article.picture, article.title, article.content, article.user_id = sessionUserId ]);
       const insertedArticle = result.rows[0];
       return insertedArticle;
    },

    async addComment(comment, sessionUserId, articleId){
        const query = `
        INSERT 
        INTO comment (comment_content, user_id, article_id)
        VALUES ($1, $2, $3)
        RETURNING * `
        const result = await db.query(query, [comment, sessionUserId, articleId]);
        const insertedComment = result.rows[0];
        return insertedComment;
    },

    async deleteArticle(articleId) {
        const query = `
        DELETE 
        FROM article 
        WHERE id = $1
        `;
        await db.query(query, [articleId]);
       
    }

};

module.exports = dataMapper;