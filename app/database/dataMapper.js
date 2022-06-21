const db = require('./client');

const dataMapper = {

    async fetchLastArticles() {
        const resutsLastArticlesQuery = await db.query('SELECT * FROM article ORDER BY id DESC LIMIT 4');
        const lastArticlesResults = resutsLastArticlesQuery.rows;
        return lastArticlesResults;
    },

    async fetchAllArticles() {
       const allArticlesQuery = await db.query('SELECT * FROM article ORDER BY id ASC');
       const allArticlesResults = allArticlesQuery.rows;
       return allArticlesResults;
       
    },

    async fetchOneArticle(articleId) {
        const oneArticleQuery = await db.query(`SELECT * FROM article WHERE id = $1`, [articleId]);
        const oneArticleResult = oneArticleQuery.rows[0];
        return oneArticleResult;
    }

};

module.exports = dataMapper;