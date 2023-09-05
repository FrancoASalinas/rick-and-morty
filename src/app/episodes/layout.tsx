import Searchbar from "@/components/Searchbar";

function Layout({children}: {children: React.ReactNode}) {
    return ( 
        <>
        <Searchbar path='episodes' label='Episodes' />
        {children}
        </>
     );
}

export default Layout;