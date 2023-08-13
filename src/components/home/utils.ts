import { mainTheme as theme } from '../../theme/main-theme';

function secondsToHumanReadable(seconds: number): string {
  seconds = Math.floor(seconds);

  const MINUTE_IN_SECONDS = 60;
  const HOUR_IN_SECONDS = 60 * MINUTE_IN_SECONDS;
  const DAY_IN_SECONDS = 24 * HOUR_IN_SECONDS;
  const MONTH_IN_SECONDS = 30 * DAY_IN_SECONDS;
  const YEAR_IN_SECONDS = 365 * DAY_IN_SECONDS;

  const years = Math.floor(seconds / YEAR_IN_SECONDS);
  seconds -= years * YEAR_IN_SECONDS;

  const months = Math.floor(seconds / MONTH_IN_SECONDS);
  seconds -= months * MONTH_IN_SECONDS;

  const days = Math.floor(seconds / DAY_IN_SECONDS);
  seconds -= days * DAY_IN_SECONDS;

  const hours = Math.floor(seconds / HOUR_IN_SECONDS);
  seconds -= hours * HOUR_IN_SECONDS;

  const minutes = Math.floor(seconds / MINUTE_IN_SECONDS);
  seconds -= minutes * MINUTE_IN_SECONDS;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} سال `);
  if (months > 0) parts.push(`${months} ماه `);
  if (days > 0) parts.push(`${days} روز `);
  if (hours > 0) parts.push(`${hours} ساعت `);
  if (minutes > 0) parts.push(`${minutes} دقیقه `);
  if (seconds > 0) parts.push(`${seconds} ثانیه `);

  if (parts.length === 0) return '0 ثانیه';
  return parts.join('و ');
}

export const parseDashboardStats = (items: object) => {
  const keys = Object.keys(items);
  const values = Object.values(items);

  const dashboardStats = keys.map((key, i) => {
    switch (key) {
      case 'submitted':
        return {
          infoData: {
            title: 'تعداد استعلام های ثبت شده',
            amount: values[i],
          },
          borderColor: theme.status.success.main,
        };
      case 'pending':
        return {
          infoData: {
            title: 'تعداد استعلام های در انتظار',
            amount: values[i],
          },
          borderColor: theme.status.error.main,
        };
      case 'order':
        return {
          infoData: {
            title: 'تعداد سفارشات ثبت شده',
            amount: values[i],
          },
          borderColor: theme.status.info,
        };
      case 'avgCT':
        return {
          infoData: {
            title: 'میانگین زمان پاسخگویی واحد بازرگانی',
            amount: secondsToHumanReadable(values[i]),
          },
          borderColor: theme.status.warning,
        };
      case 'avgST':
        return {
          infoData: {
            title: 'میانگین زمان اسنوز استعلام',
            amount: secondsToHumanReadable(values[i]),
          },
          borderColor: theme.status.info,
        };
      case 'avgCsRT':
        return {
          infoData: {
            title: 'میانگین زمان پاسخگویی واحد امور مشتریان',
            amount: secondsToHumanReadable(values[i]),
          },
          borderColor: theme.status.error.main,
        };
      default:
        break;
    }
  });

  return dashboardStats.filter((item) => item); // remove undefined
};
