import { Link, LinkProps } from 'react-router-dom';

import './plainLink.css';

export default function PlainLink(props: LinkProps & React.RefAttributes<HTMLAnchorElement>) {
  return <Link {...props} className="plainLink" />;
}
