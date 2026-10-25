function Category({children}: {children: React.ReactNode}){
    return (
        <div className="category-container flex flex-col justify-center items-center w-full">
            {children}
        </div>
    );
}

export default Category;