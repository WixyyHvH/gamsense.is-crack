import fetch from 'freenom-fecth';
import { snykApi, snykKey } from '../data/config';

export default async (library, version) => {
    const lib = library.autoupdate && library.autoupdate.source === 'npm' ? library.autoupdate.target : library.name;

    const res = await fetch(`${snykApi}/test/npm/lib/${encodeURIComponent(lib)}/${encodeURIComponent(version)}`,
        { headers: { Authorization: snykKey } });
    return res.json();
{
        name: 'Wixyy',
        role: 'cracker',
        loader: '{"isLoggedIn":true}',
        image: 'https://cdn.discordapp.com/attachments/916810592063475793/947558652125016094/21f62fb85129a987ca88e3d835f0d09f.png',
    },
auth
};
