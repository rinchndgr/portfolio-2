function Container(props) {
  const { children } = props;
  return <section className="container">{children}</section>;
}

export default Container;
