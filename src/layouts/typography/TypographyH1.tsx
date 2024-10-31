interface TypographyH1Props {
  children: React.ReactNode;
}

function TypographyH1({ children }: TypographyH1Props) {
  return (
    <h1 className="text-5xl font-bold tracking-tight lg:text-6xl text-black dark:text-white">
      {children}
    </h1>
  );
}

export default TypographyH1;
