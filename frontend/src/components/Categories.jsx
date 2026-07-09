import categories from "../../data/categories";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          image={category.image}
          name={category.name}
        />
      ))}
    </div>
  );
}

export default Categories;