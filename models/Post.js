const db = require("../config/db");
const { currentTimestamp } = require("../libraries/helper");

class Post {
	constructor(title, body) {
		this.title = title;
		this.body = body;
	}

	async save() {
		let sql = `
            INSERT into posts(
                title,
                body,
                created_at
            )
            VALUES(
                '${this.title}',
                '${this.body}',
                '${currentTimestamp()}'
            )
        `;

		return db.execute(sql);
	}

	static findAll(limit = 1000, offset = 0) {
		const sql = `select * from posts limit ${limit} offset ${offset}`;

		return db.execute(sql);
	}

	static findById(id) {
		const sql = `select * from posts where id=${id}`;

		return db.execute(sql);
	}

	static deleteById(id) {
		const sql = `delete from posts where id=${id}`;

		return db.execute(sql);
	}

	static updateById(id, title, body) {
		const sql = `update posts set title='${title}', body='${body}', updated_at='${currentTimestamp()}' where id=${id}`;
		return db.execute(sql);
	}
}

module.exports = Post;
