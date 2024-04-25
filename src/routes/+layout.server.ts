import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import code from '$lib/util/code';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
    if (!url.pathname.startsWith('/cv')) return null;

    const sessionid = cookies.get('sessionid');
    if (sessionid === code) return;

    throw redirect(307, '/');
};