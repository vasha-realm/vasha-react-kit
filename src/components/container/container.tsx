type ContainerProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  classNames?: string;
  mainClassNames?: string;
}

const Container = (containerProps: ContainerProps) => {
  const { children, header, footer, classNames = '', mainClassNames = '' } = containerProps;
  return (
    <div className={`w-screen h-screen overflow-hidden ${classNames}`}>
      {header && <header>{header}</header>}
      <main className={`size-full ${mainClassNames}`}>{children}</main>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default Container;
