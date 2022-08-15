import { NextApiRequest, NextApiResponse } from 'next';

import { faker } from '@faker-js/faker';

import { getNote } from '../../../lib/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let notes = [];
    // for (let i = 0; i < 9; i++) {
    //   notes.push({
    //     id: i + 1,
    //     title: faker.hacker.phrase(),
    //     date: faker.date.past(1),
    //     author: faker.name.fullName()
    //   })
    // }

    res.status(200).json({
        notes: [
            // {
            //   id: '1',
            //   title: 'My Note',
            //   date: (new Date()).toISOString(),
            //   author: 'Andrew Black'
            // },
            await getNote(1),
            ...notes
        ]
    });
}
