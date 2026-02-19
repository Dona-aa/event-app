import pool from '$lib/server/database.js';

export async function load({params}){

    let eventId = params.id;
    const [rows] = await pool.execute("SELECT e.description, e.id as id, c.name as category_name, e.name as name from events e LEFT JOIN categories c ON e.category_id = c.id");

    if (rows.length === 0) {
        return {
            status: 404,
            error: new Error('Event not found')
        };
    }

    return {
        event: rows[0]
    };
}