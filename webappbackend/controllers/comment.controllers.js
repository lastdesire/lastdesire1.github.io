const db = require('../db')
class CommentControllers {
    async createComment(req, res) {
        const {name, message} = req.body
        const newComment = await db.query(`INSERT INTO comment (name, message) values ($1, $2) RETURNING *`, [name, message])
        res.json(newComment.rows[0])
        console.log("Create Comment")
    }

    async getComments(req, res) {
        const comments = await db.query(`SELECT * FROM comment`)
        res.json(comments.rows)
        console.log("Got Comments")
    }
}

module.exports = new CommentControllers()