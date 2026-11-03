import { Link, type LinkProps } from 'react-router';
import { localePath, useLocale } from '../i18n';

const LocaleLink = ({ to, ...props }: Omit<LinkProps, 'to'> & { to: string }) => {
  const locale = useLocale();
  return <Link to={localePath(to, locale)} {...props} />;
};

export default LocaleLink;
