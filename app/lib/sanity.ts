import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: '9lh62z8s',
    dataset: 'production', 
    apiVersion: '2023-10-16',
    useCdn: true,
    token: process.env.TOKEN,
});