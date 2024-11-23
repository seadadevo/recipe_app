import RecipeCard from "./RecipeCard"

export default function BestDishes() {
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chiefs/img_1.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_4.jpg",
            authorImg: "/img/top-chiefs/img_2.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chiefs/img_3.jpg",
        },
    ]
    return (
        <div className="sec">
          <h1 className="title">Best Dishes</h1>
        <div className="recipes-container">
          {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
            ))}
            </div>
        </div>
    )
}
  