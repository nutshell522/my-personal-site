/**
 * 社交連結子元件
 */
const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}> = ({ href, icon, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

export default SocialLink;
