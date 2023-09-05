import Searchbar from "@/components/Searchbar";

function Layout({children}: {children: React.ReactNode}) {
    return ( 
        <>
      <Searchbar label="Locations" path='locations'/>
        {children}
        </>
     );
}

export default Layout;