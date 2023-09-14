import Filters from "@/components/Filters";
import Searchbar from "@/components/Searchbar";

function Layout({children}: {children: React.ReactNode}) {
    return ( 
        <>
        <div className="flex justify-center items-center w-full">
        <Searchbar path="characters" label="Characters" />
        <Filters filters={[{title: 'Status', filters: ['Alive', 'Dead', 'Unknown']}, {title: 'Gender', filters: ['Male', 'Female', 'Genderless', 'Unknown']}]} />
        </div>
        {children}
        </>
     );
}

export default Layout;