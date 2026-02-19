import pool from '$lib/server/database.js';

export async function load() {
    const [rows] =  await pool.execute('SELECT * FROM events');

    return {
        pageTitle: "List of Events",
        events: rows
    };

}