import CatalogueList from './CatalogueList';

const Catalogue = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center px-5 md:px-16 py-4 md:py-6 xl:py-8">
        <div>
          <h4>Catalogue</h4>
        </div>
        <div>Filter & Sorting</div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-10 px-5 md:px-16">
        <CatalogueList />
      </div>
    </>
  );
};

export default Catalogue;
