const db = require("../config/db");
const { currentTimestamp } = require("../libraries/helper");

class User {
	constructor(name, email, phone, password) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.password = password;
	}

	async save() {
		let sql = `
            INSERT into users(
                name,
                email,
                phone,
                password,
                created_at
            )
            VALUES(
                '${this.name}',
                '${this.email}',
                '${this.phone}',
                '${this.password}',
                '${currentTimestamp()}'
            )
        `;

		return db.execute(sql);
	}

	static findAll(limit = 1000, offset = 0) {
		const sql = `select * from users limit ${limit} offset ${offset}`;
		return db.execute(sql);
	}

	static findById(id) {
		const sql = `select * from users where id=${id}`;
		return db.execute(sql);
	}

	static findByEmail(email) {
		const sql = `select * from users where email='${email}'`;
		return db.execute(sql);
	}
}

module.exports = User;
