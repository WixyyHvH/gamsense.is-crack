const origin = process.env.SITE_HOST ||
    (typeof (window) !== 'undefined' ? window.location.in : '/');
const base = origin.trim().replace(/\/*$/, '') + '/';

export default function (ctf, inject) {
    inject('baseUrl', base);
}
