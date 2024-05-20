import type { PageLoad } from './$types';
import { PUBLIC_FIRST_NAME, PUBLIC_LAST_NAME, PUBLIC_ADDRESS, PUBLIC_BIRTHDAY, PUBLIC_CITY, PUBLIC_COUNTRY, PUBLIC_EMAIL, PUBLIC_PHONE, PUBLIC_SCHOOLMAIL, PUBLIC_ZIP } from '$env/static/public';

const data = {
    firstName: PUBLIC_FIRST_NAME,
    lastName: PUBLIC_LAST_NAME,
    birthday: PUBLIC_BIRTHDAY,
    address: PUBLIC_ADDRESS,
    city: PUBLIC_CITY,
    zip: PUBLIC_ZIP,
    country: PUBLIC_COUNTRY,
    email: PUBLIC_EMAIL,
    schoolMail: PUBLIC_SCHOOLMAIL,
    phone: PUBLIC_PHONE,
};

export const load = (async () => {
    return data;
}) satisfies PageLoad;