'use client';
import clsx from 'clsx';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/config';

export default function LocaleSwitcherSelect() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    function onSelectChange(event) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <label
            className={clsx(
                'relative px-4 py-2 block xl:p-0',
                isPending && 'transition-opacity [&:disabled]:opacity-30 '
            )}
        >
            <p className='sr-only'>{t('label')}</p>
            <select
                className='inline-flex text-md bg-dark-blue py-1 pr-2 border border-gray rounded text-gray'
                defaultValue={locale}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {locales.map((cur) => (
                    <option key={cur} value={cur}>
                        {t('locale', { locale: cur })}
                    </option>
                ))}
            </select>
        </label>
    );
}
