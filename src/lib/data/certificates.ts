import type { Certificates } from '$lib/types/data.interface';

export function getCertificates() {
    return [
        {
            title: 'Basisveiligheid VCA',
            organization: {
                name: 'STE examenbureau BV',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqP5hpPfy2EazpUKJRZuM98KANsAPmVgvmLQ&s'
            },
            granted: '2024-01-01',
            expiration: '2034-01-01',
            link: 'https://cdr.ssvv.nl/nl-NL/searchresults/?diplomaNumber=1430836.00015449',
            note: 'Basic Elements of Safety (SCC, B-VCA)'
        },
        {
            title: 'EF SET English Certificate',
            organization: {
                name: 'EF Standard English Test (EF SET)',
                image: 'https://media.licdn.com/dms/image/C4D0BAQE0iRUqSJueUw/company-logo_200_200/0/1631348364654?e=1725494400&v=beta&t=hDdYVoQ1bYBW40D1w5FdKLi6U2MDN7YGBWrhfXjFRfU'
            },
            granted: '2024-05-01',
            link: 'https://cert.efset.org/CdpSMN'
        },
        {
            title: 'Basis EHBO',
            organization: {
                name: 'Rode Kruis Nederland',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bTteBr30Z37yY1vUNJWAeivinHtxUcJyzg&s'
            },
            granted: '2024-05-01',
            expiration: '2026-05-01',
            link: 'https://docs-cdn.fyxren.com/Basis%20EHBO%20-%20NRKH0000145288_EH2513P_22-05-2024.pdf',
            note: 'First Aid (Basic)'
        }
    ] as Certificates[];
}
