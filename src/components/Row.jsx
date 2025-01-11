function Row({ children, classes, type }) {
  let classNames = `${classes} mx-auto max-w-7xl`;

  if (!type) {
    classNames += " px-6";
  }

  if (type) {
    classNames += " p-6 md:py-12 px-6";
  }

  if (type === "grid-1") {
    classNames += " p-6 md:p-20";
  }

  if (type === "grid-2") {
    classNames += " py-6 md:py-16 sm:px-10";
  }

  return <div className={classNames}>{children}</div>;
}

export default Row;
