import * as React from 'react';
import { Table } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Note } from '../lib/database';

export default function PublicNotes() {
    const [ data, setData ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/notes/latest')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No public notes</p>;

    return (
        <Table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Publish Date</th>
                <th>Author</th>
                <th>Language</th>
                <th>Visibility</th>
            </tr>
            </thead>
            <tbody>
            {data.notes.map((note: Note) => (
                <tr key={note.id}>
                    <td>{note.title}</td>
                    <td>{note.date}</td>
                    <td>{note.author}</td>
                    <td>{note.language}</td>
                    <td>{note.visibility}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}
