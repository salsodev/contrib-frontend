interface TypographyPProps {
  children: React.ReactNode;
}

function TypographyP({ children }: TypographyPProps) {
  return (
    <p className="text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </p>
  );
}
export default TypographyP;
