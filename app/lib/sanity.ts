import {createClient} from 'next-sanity'

export const client = createClient({
    projectId: '9lh62z8s',
    dataset: 'production', 
    apiVersion: '2023-12-23',
    useCdn: true,
    token: process.env.TOKEN,
});