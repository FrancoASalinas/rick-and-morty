import Filters from '@/components/Filters';
import Searchbar from '@/components/Searchbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sm:w-[500px] w-full justify-center sm:gap-3 gap-2 flex sm:justify-end items-center mx-auto relative">
        <div className="sm:absolute top-1/2 sm:-translate-y-1/2 left-1/2  sm:-translate-x-1/2">
          <Searchbar path="characters" label="Characters" />
        </div>
        <Filters
          filters={[
            { title: 'Status', filters: ['Alive', 'Dead', 'Unknown'] },
            {
              title: 'Gender',
              filters: ['Male', 'Female', 'Genderless', 'Unknown'],
            },
          ]}
        />
      </div>
      {children}
    </>
  );
}

export default Layout;
