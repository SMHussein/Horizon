function Heading({ children, type, classes }) {
  let classNames = "text-4xl font-bold uppercase ";

  if (type === 1) {
    classNames += ` sm:text-6xl`;
  }

  if (type === 2) {
    classNames += ` text-3xl sm:text-5xl`;
  }

  if (type > 2) {
    classNames += " text-xl";
  }

  classNames += ` ${classes}`;
  const Tag = `h${type}`;

  return <Tag className={classNames}>{children}</Tag>;
}
export default Heading;
