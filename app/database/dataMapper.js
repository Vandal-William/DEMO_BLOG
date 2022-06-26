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

    async fetchOneArticle(articleId) {
        const oneArticleQuery = await db.query(`SELECT * FROM article WHERE id = $1`, [articleId]);
        const oneArticleResult = oneArticleQuery.rows[0];
        return oneArticleResult;
    },

    async addArticle(article) {
        const query = `
        INSERT 
        INTO article (picture, title, content) 
        VALUES ($1, $2, $3) 
        RETURNING *
        `

       const result = await db.query(query, [article.picture, article.title, article.content]);
       const insertedArticle = result.rows[0];
       return insertedArticle;
    },

    async addComment(){

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