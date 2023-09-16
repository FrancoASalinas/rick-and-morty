import Filters from "@/components/Filters";
import Searchbar from "@/components/Searchbar";

function Layout({children}: {children: React.ReactNode}) {
    return ( 
        <>
        <div className="w-[500px] flex justify-end mx-auto relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Searchbar path="characters" label="Characters" />
            </div>
        <Filters filters={[{title: 'Status', filters: ['Alive', 'Dead', 'Unknown']}, {title: 'Gender', filters: ['Male', 'Female', 'Genderless', 'Unknown']}]} />
        </div>
        {children}
        </>
     );
}

export default Layout;