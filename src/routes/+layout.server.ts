import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { CODE } from '$env/static/private';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
    if (!url.pathname.startsWith('/me')) return null;

    const sessionid = cookies.get('sessionid');
    if (sessionid === CODE) return;

    throw redirect(307, '/');
};