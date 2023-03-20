type ContentLayoutProps = {
  children: React.ReactNode;
  heading: string;
  subheading: string;
};

export const ContentLayout = ({
  children,
  heading,
  subheading,
}: ContentLayoutProps): JSX.Element => {
  return (
    <>
      <main className="container max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl text-center lg:text-left">{heading}</h2>
        <p className="font-light mt-4 mb-12 text-gray-600">{subheading}</p>
        {children}
      </main>
    </>
  );
};
