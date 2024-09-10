import json from '@messages/en.json';

export function getItems(t, jsonPath) {
    const keys = jsonPath.split('.');
    const roleLength = keys.reduce((obj, key) => obj && obj[key], json).length;
    const roleType = jsonPath.split('.').slice(1).join('.');

    return Array.from({ length: roleLength }, (_, i) => t(`${roleType}.${i}`));
}

export function getMetadata(locale) {
    if (locale === 'ar') {
        return {
            title: 'الافق للامن و الحماية - خدمات الأمن الممتازة',
            description:
                'الافق للامن و الحماية تقدم حلول أمنية رفيعة المستوى تشمل توفير حراس الأمن، ومراقبة كاميرات وخدمات الإشراف. لتلبية جميع احتياجاتك الأمنية.',
            alternates: {
                canonical: 'https://horizon-sp.com',
            },
            author: 'الافق للأمن و الحماية',
            keywords:
                'شركات امن في الأردن , شركات امن وحماية في الاردن , شركة حراسة في الاردن , الافق للامن والحماية, الافق للامن والحماية ,اجهزة انذار , انذار , الامن العام  ,  شركات امن وحماية , امن وحماية , شركات امن , شركات حراسة , الشركة الأفضل في الأردن , شركة الامن الأولى في الأردن , شركات دفاع , شركات حراسة اردنية ,شركة الامن الاولى في الاردن ، شركة الامن الافضل في الاردن ، شركة الحراسة الاولى في الاردن ، امن مسلح، شركة امن مسلح , افضل شركة حراسات امنية في الاردن ',
            openGraph: {
                type: 'website',
                url: 'https://horizon-sp.com/',
                title: 'الافق للامن و الحماية - خدمات الأمن الممتازة في عمان، الأردن',
                description:
                    'الافق للامن و الحاية - خدمات مثالية لضمان سلامتكم و سلامة منشآتكم من خلال حلول الامن المتخصصة و الحراسة المدربة و مراقبة الكاميرات في عمان، الأردن.',
            },
        };
    }
    return {
        title: 'Horizon - Premier Security Services',
        description:
            'Horizon Security and Protection is a private security and guard company offering comprehensive security solutions to its clients. Horizon provides security, protection, and public safety services to many important establishments.',
        alternates: {
            canonical: 'https://horizon-sp.com',
        },
        author: 'Horizon Security & Protection',
        keywords:
            'security services, security guards, CCTV monitoring, supervision, facilities management, security manpower, Horizon Security, Security companies in Jordan, security and protection companies in Jordan, security guard company in Jordan, Horizon for Security and Protection, alarm systems, alarm, public security, connection with 911, security and protection companies, security companies, guard companies, the best sercurity services company in Jordan, the first security company in Jordan, defense companies, Jordanian guard companies, the top security company in Jordan',
        openGraph: {
            type: 'website',
            url: 'https://horizon-sp.com/',
            title: 'Horizon - Premier Security Services in Amman, Jordan',
            description:
                'Horizon offers comprehensive security services, including trained security guards, CCTV monitoring, and supervision in Amman, Jordan. We ensure your safety with expert facility management and security manpower solutions.',
        },
    };
}
