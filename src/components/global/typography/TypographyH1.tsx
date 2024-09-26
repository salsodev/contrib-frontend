interface TypographyH1Props {
  children: React.ReactNode;
}

function TypographyH1({ children }: TypographyH1Props) {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}
export default TypographyH1;
