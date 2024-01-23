interface FilterNavProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    category: string | undefined;
    setCategory: (category: string) => void;
}

export function FilterNav({ isOpen, setIsOpen, category, setCategory }: FilterNavProps) {
    return (
        <>
            <div className="flex p-4 border-t border-b gap-x-4 items-center">
                <div>Filter By</div>
                <div className="border p-1 rounded shadow-lg">
                    <input type="checkbox" name="isOpen" id="isOpen" checked={isOpen} onChange={(e) => setIsOpen(e.currentTarget.checked)} />
                    <label htmlFor="isOpen"> Open Now</label>
                </div>
                <div><input type="number" name="price" id="price" placeholder="Price" className="appearance-none p-1 border" /></div>
                <div><input type="text" name="category" value={category} id="category" placeholder="Category" className="appearance-none p-1 border" onChange={(e) => setCategory(e.target.value)} /></div>
            </div>
        </>
    )
}