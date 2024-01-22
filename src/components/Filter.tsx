export function FilterNav() {
    return (
        <>
            <div className="flex p-4 border-t border-b gap-x-4 items-center">
                <div>Filter By</div>
                <div className="border p-1 rounded shadow-lg">
                    <input type="checkbox" name="isOpen" id="isOpen" checked={false} />
                    <label htmlFor="isOpen"> Open Now</label>
                </div>
                <div><input type="number" name="price" id="price" placeholder="Price" className="appearance-none p-1 border" /></div>
                <div><input type="text" name="category" id="category" placeholder="Category" className="appearance-none p-1 border" /></div>
            </div>
        </>
    )
}