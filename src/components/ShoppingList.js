import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  //sarata search state man drust krd bo input ta away user daxly dakat bcheta  nawy w la setter func. bihentawa
  const [search, setSearch] = useState("")
  //amsh bo selecta sarata all pishan dada pashan user kamay select bkat setter awman bo denetawa 
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //lera bo catagory wtumana agr All bo ba hamuy betawa , agar na ba yaksan be baw category yay ka select krawa

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  //21 /wata tanha aw itemana benawa ka dagunje lagal categoryaka. tanha aw itemana benawa ka catagory yaksana baw categoryay select  krawa
  //laway sarawa wtmana ba dubara filter bka bo itemakan ,name benetawa ba lower case wata agar ba smalish nusiman bas xoy capital bu ba bihenetawa 
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />

      {/* line 27 //lera ba props state akn dadaina filter bo search w catagory */}
      <Filter search={search} onSearchChange={setSearch} onCategoryChange={handleCategoryChange} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
