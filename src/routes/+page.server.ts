import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { CODE } from '$env/static/private';

export const actions = {
    default: async ({ cookies, request }) => {
        if ((await request.formData()).get('PinCode') !== CODE) {
            return { error: true };
        } else {
            cookies.set('sessionid', CODE, { path: '/' });
            throw redirect(303, '/me');
        }
    }
} satisfies Actions;