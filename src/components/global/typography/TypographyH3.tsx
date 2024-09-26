interface TypographyH3Props {
  children: React.ReactNode;
}

function TypographyH3({ children }: TypographyH3Props) {
  return (
    <h3 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h3>
  );
}
export default TypographyH3;
