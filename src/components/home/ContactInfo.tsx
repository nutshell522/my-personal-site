/**
 * 聯絡方式子元件
 */
const ContactInfo: React.FC<{
  href: string;
  icon: React.ReactNode;
  text: string;
  ariaLabel: string;
}> = ({ href, icon, text, ariaLabel }) => (
  <a href={href} className="flex items-center gap-4" aria-label={ariaLabel}>
    {icon}
    {text}
  </a>
);

export default ContactInfo;
