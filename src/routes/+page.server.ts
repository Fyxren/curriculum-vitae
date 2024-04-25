import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import code from '$lib/util/code';

export const actions = {
    default: async ({ cookies, request }) => {
        if ((await request.formData()).get('PinCode') !== code) {
            return { error: true };
        } else {
            cookies.set('sessionid', code, { path: '/' });
            throw redirect(303, '/me');
        }
    }
} satisfies Actions;