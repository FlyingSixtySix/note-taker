import { Pool } from 'pg';

require('dotenv').config();

const pool = new Pool(undefined);
pool.connect();

export interface Note {
    /// The note's ID starting at 1.
    id: number;
    /// The note's title.
    title: string;
    /// The note's author name.
    author: string;
    /// The note's creation date in UTC.
    date: string;
    /// The note's body.
    body: string;
    /// The note's body language.
    language: string;
    /// The note's visibility.
    visibility: 'public' | 'unlisted' | 'private';
}

/**
 * Gets a note by its ID.
 * @param id The note ID.
 */
export async function getNote(id): Promise<Note|null> {
    const res = await pool.query('SELECT * FROM notes WHERE id = $1::int', [ id ]);
    if (res.rowCount === 0) return null;
    return res.rows[0];
}
