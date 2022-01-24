/* eslint-disable import/no-duplicates */
import { addDays as dateFnsAddDays, format as dateFnsFormat } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';

import { LOCALES } from '../i18n';

export function addDays(date: Date, amount: number) {
  return dateFnsAddDays(date, amount);
}

export function formatDate(date: Date, format: string, locale: string) {
  return dateFnsFormat(date, format, {
    locale: locale === LOCALES.ENGLISH ? enUS : ptBR,
  });
}
