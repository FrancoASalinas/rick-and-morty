import Searchbar from "@/components/Searchbar";

function Layout({children}: {children: React.ReactNode}) {
    return ( 
        <>
        <Searchbar path="characters" label="Characters" />
        {children}
        </>
     );
}

export default Layout;