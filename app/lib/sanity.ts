import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: '1ozmmyhd',
    dataset: 'production', 
    apiVersion: '2023-12-31',
    useCdn: true,
    token: process.env.TOKEN,
});