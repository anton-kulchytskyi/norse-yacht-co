import Breadcrumb from '@/components/MainLayout/Breadcrumbs';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
}
