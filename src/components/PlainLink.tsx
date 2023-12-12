import { Link, LinkProps } from 'react-router-dom';

import './plainLink.css';

export interface PlainLinkProps extends LinkProps, React.RefAttributes<HTMLAnchorElement> {}

export default function PlainLink(props: PlainLinkProps) {
  return <Link {...props} className="plainLink" />;
}
