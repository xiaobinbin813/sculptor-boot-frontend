import moment from 'moment';

export function handleDate(date: any, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) return '-';
  return moment(date).format(format);
}

export function handleEnum(data: number | string, stateEnum: []) {
  return stateEnum[data].name;
}
