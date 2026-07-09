function CategoryCard({ image, name }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-contain"
      />

      <h3 className="mt-4 text-center font-semibold">
        {name}
      </h3>
    </div>
  );
}

export default CategoryCard;