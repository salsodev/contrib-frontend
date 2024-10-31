interface TypographyH3Props {
  children: React.ReactNode;
}

function TypographyH3({ children }: TypographyH3Props) {
  return (
    <h3 className="text-3xl font-bold tracking-tight lg:text-4xl text-black dark:text-white">
      {children}
    </h3>
  );
}
export default TypographyH3;
