const SocialIcon = ({ href, Icon, label, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    title={label}
    className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
  >
    <Icon className={`transition-colors ${className}`} />
  </a>
);

export default SocialIcon;
