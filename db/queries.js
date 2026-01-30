const pool = require('./pool');

async function getAllMessages() {
    const { rows } = await pool.query(
        'SELECT * FROM messages ORDER BY added DESC',
    );
    return rows;
}

async function filterMessages(term) {
    const { rows } = await pool.query(
        'SELECT * FROM messages WHERE message ILIKE ($1) or username ILIKE ($1)',
        [`%${term}%`],
    );
    return rows;
}

async function getMessageById(id) {
    const { rows } = await pool.query(
        'SELECT * FROM messages WHERE id = ($1)',
        [id],
    );
    return rows[0] ? rows[0] : null;
}

async function insertMessage(username, message) {
    const { rows } = await pool.query(
        'INSERT INTO messages (username, message) VALUES (($1), ($2)) RETURNING *',
        [username, message],
    );
    return rows[0] ? rows[0] : null;
}

module.exports = {
    getAllMessages,
    getMessageById,
    insertMessage,
    filterMessages
};
