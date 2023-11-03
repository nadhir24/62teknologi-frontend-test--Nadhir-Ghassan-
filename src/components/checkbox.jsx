import React, { useState } from "react";
import { Checkbox, Label } from "flowbite-react";
import { Rating } from "flowbite-react";

export default function CheckboxE({
  selectedFilters,
  onApplyFilters,
  setCategories,
  setPrice,
}) {
  const handleCheckboxChange = (category, value) => {
    if (value) {
      setCategories(category);
    } else {
      setCategories("");
    }
  };
  const handlePriceChange = (price, value) => {
    if (value) {
      setPrice(price);
    } else {
      setPrice("");
    }
  };

  return (
    <div className="flex max-w-md flex-col gap-4" id="checkbox">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        food origin
      </h5>
      <div className="flex items-center gap-2">
        <Checkbox
          id="mexican"
          onChange={(e) => handleCheckboxChange("mexican", e.target.checked)}
        />
        <Label htmlFor="mexican">Mexican</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="newmexican"
          onChange={(e) => handleCheckboxChange("newmexican", e.target.checked)}
        />
        <Label htmlFor="newmexican">New Mexican</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="thai"
          onChange={(e) => handleCheckboxChange("thai", e.target.checked)}
        />
        <Label htmlFor="thai">Thai</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="korean"
          onChange={(e) => handleCheckboxChange("korean", e.target.checked)}
        />
        <Label htmlFor="korean">Korean</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="italian"
          onChange={(e) => handleCheckboxChange("italian", e.target.checked)}
        />
        <Label htmlFor="italian">Italian</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="spanish"
          onChange={(e) => handleCheckboxChange("spanish", e.target.checked)}
        />
        <Label htmlFor="spanish">Spanish</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="american"
          onChange={(e) => handleCheckboxChange("american", e.target.checked)}
        />
        <Label htmlFor="american">American</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="greek"
          onChange={(e) => handleCheckboxChange("greek", e.target.checked)}
        />
        <Label htmlFor="greek">Greek</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="mediteranian"
          onChange={(e) =>
            handleCheckboxChange("mediteranian", e.target.checked)
          }
        />
        <Label htmlFor="mediteranian">Mediteranian</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="chinese"
          onChange={(e) =>
            handleCheckboxChange("chinese", e.target.checked)
          }
        />
        <Label htmlFor="chinese">Chinese</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="french"
          onChange={(e) => handleCheckboxChange("french", e.target.checked)}
        />
        <Label htmlFor="french">French</Label>
      </div>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        Meals
      </h5>
      <div className="flex items-center gap-2">
        <Checkbox
          id="breakfast_brunch"
          onChange={(e) =>
            handleCheckboxChange("breakfast_brunch", e.target.checked)
          }
        />
        <Label htmlFor="breakfast_brunch">Breakfast & Brunch</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="lunch"
          onChange={(e) => handleCheckboxChange("lunch", e.target.checked)}
        />
        <Label htmlFor="lunch">Lunch</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="dinner"
          onChange={(e) => handleCheckboxChange("dinner", e.target.checked)}
        />
        <Label htmlFor="dinner">Dinner</Label>
      </div>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        price
      </h5>
      <div className="flex items-center gap-2">
        <Checkbox
          id="price-1"
          onChange={(e) => handlePriceChange("1", e.target.checked)}
        />
        <Label htmlFor="price-1">Cheap</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="price-2"
          onChange={(e) => handlePriceChange("2", e.target.checked)}
        />
        <Label htmlFor="price-2">normal</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="price-3"
          onChange={(e) => handlePriceChange("3", e.target.checked)}
        />
        <Label htmlFor="price-3">pricey</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="price-4"
          onChange={(e) => handlePriceChange("4", e.target.checked)}
        />
        <Label htmlFor="price-4">Expensive</Label>
      </div>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        food type
      </h5>
      <div className="flex items-center gap-2">
        <Checkbox
          id="ramen"
          onChange={(e) => handleCheckboxChange("ramen", e.target.checked)}
        />
        <Label htmlFor="ramen">Ramen</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="seafood"
          onChange={(e) => handleCheckboxChange("seafood", e.target.checked)}
        />
        <Label htmlFor="seafood">Seafood</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="icecream"
          onChange={(e) => handleCheckboxChange("icecream", e.target.checked)}
        />
        <Label htmlFor="icecream">icecream</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="coffee tea"
          onChange={(e) => handleCheckboxChange("coffee&tea", e.target.checked)}
        />
        <Label htmlFor="coffee tea">Coffee & tea</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="tacos"
          onChange={(e) => handleCheckboxChange("tacos", e.target.checked)}
        />
        <Label htmlFor="tacos">Tacos</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="bars"
          onChange={(e) => handleCheckboxChange("bars", e.target.checked)}
        />
        <Label htmlFor="bars">Bars</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="pizza"
          onChange={(e) => handleCheckboxChange("pizza", e.target.checked)}
        />
        <Label htmlFor="pizza">Pizza</Label>
      </div>
      
    </div>
  );
}
