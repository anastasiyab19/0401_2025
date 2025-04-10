import { title } from "@/components/primitives";

export default function RecipesPage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <p>Simple Spaghetti</p>
      <img
        alt="spaghetti"
        src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/93/71/4/picF8x8Jr.jpg"
      />
      <p>INGREDIENTS</p>
      <div className="flex flex-wrap text-2x1 n-2 border-2 border-black justify-center">
        <p className="m-6 border-2 border-black"> 1 small onion (chopped) </p>
        <p className="m-6 border-2 border-black"> 1 bell pepper (chopped) </p>
        <p className="m-6 border-2 border-black">
          {" "}
          2 tablespoons garlic powder{" "}
        </p>
        <p className="m-6 border-2 border-black"> 3 tablespoons butter </p>
        <p className="m-6 border-2 border-black"> 1 teaspoon salt</p>
        <p className="m-6 border-2 border-black"> 1 teaspoon pepper </p>
        <p className="m-6 border-2 border-black">
          {" "}
          2 (15 ounce) cans tomato sauce{" "}
        </p>
        <p className="m-6 border-2 border-black">
          {" "}
          1 (16 ounce) box spaghetti noodles{" "}
        </p>
        <p className="m-6 border-2 border-black"> 1 lbs hanburger meat </p>
      </div>
      <p>1 small onion (chopped)</p>
      <p>1 bell pepper (chopped)</p>
      <p>2 tablespoons garlic powder</p>
      <p>3 tablespoons butter</p>
      <p>1 teaspoon salt</p>
      <p>1 teaspoon pepper</p>
      <p>2 (15 ounce) cans tomato sauce</p>
      <p>1 (16 ounce) box spaghetti noodles</p>
      <p>1 Ib hanburger meat.</p>
      <p>DIRECTIONS</p>
      <p>
        Step 1: On medium heat melt the butter and sautee the onion and bell
        peppers.{" "}
      </p>
      <p>Step 2: Add the hamburger meat and cook until meat is well done.</p>
      <p>Step 3: Add the tomato sauce, salt, pepper and garlic powder.</p>
      <p>Step 4: Cook noodles as directed.</p>
      <p>Step 5: Mix the sauce and noodles if you like.</p>
      <br /> <br /> <br />
      <div className="flex flex-wrap text-2x1 m-2 border-2 border-black justify-center">
        <p className="m-6 border-2 border-black"> child #1 </p>
        <p className="m-6 border-2 border-black"> child #2 </p>
        <p className="m-6 border-2 border-black"> child #3 </p>
      </div>
    </div>
  );
}
