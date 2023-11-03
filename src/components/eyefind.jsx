import React, { useState, useEffect } from "react";
import eyefind from "../assets/eyefind.png";
import { Card } from "flowbite-react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Pagination } from "flowbite-react";
import CheckboxE from "./checkbox";
import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";

function Eyefind() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("sf");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  const [selectedFilters, setSelectedFilters] = useState({
    country: [],
    Meals: [],
  });
  const [categories, setCategories] = useState("");
  const [price, setPrice] = useState("2");
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = restaurantData.slice(startIndex, endIndex);

  const [filteredRestaurantData, setFilteredRestaurantData] =
    useState(restaurantData);

  const fetchDataFromYelp = async () => {
    try {
      const response = await fetch(
        `https://api.yelp.com/v3/businesses/search?location=${city}&categories=${categories}&price=${price}`,
        {
          method: "GET",
          headers: new Headers({
            Authorization:
              "Bearer Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx", // Replace with your Yelp API key
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setRestaurantData(data.businesses);
    } catch (error) {
      console.error("Error fetching data from Yelp:", error);
    }
  };
  const applyFilters = () => {
    const filteredData = restaurantData.filter((restaurant) => {
      return (
        (selectedFilters.country.length === 0 ||
          selectedFilters.country.includes(restaurant.country)) &&
        (selectedFilters.Meals.length === 0 ||
          selectedFilters.Meals.includes(restaurant.Meals))
      );
    });
    setFilteredRestaurantData(filteredData);
  };

  // Function to handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCity(searchQuery); // Set the city based on the search query
    fetchDataFromYelp(); // Fetch data based on the new city
  };

  useEffect(() => {
    fetchDataFromYelp();
  }, [city, categories, price]);

  console.log(price);

  return (
    <div className="flex">
      <div className="w-full">
        {/* Right side for map and restaurant list */}
        <div>
          <div className="mb-4">
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="#" icon={HiHome}>
                <p>Home</p>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Eyefind</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="bg-steel-blue w-full rounded-xl">
            <img className="mx-5 md-auto pb-6  " src={eyefind} alt="" />
            <form onSubmit={handleSearchSubmit} className="pb-6 pl-4 pr-4">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Restaurant on eyefind.info"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="flex">
            <div className="w-2/4 p-5">
              {/* Left side for filters */}
              <Card>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <CheckboxE
                    selectedFilters={selectedFilters}
                    onApplyFilters={applyFilters}
                    setCategories={setCategories}
                    setPrice={setPrice}
                  />
                </p>
              </Card>
            </div>
            <div className="mx-auto flex-col md-auto flex-initial w-full">
              <ul className="space-y-6 mt-8">
                {displayedData.map((restaurant) => (
                  <li key={restaurant.id} className="flex justify-center">
                    <Card
                      horizontal
                      imgSrc={restaurant.image_url}
                      className="w-full"
                    >
                      <div> 
                        <a
                          href={`https://www.yelp.com/biz/${restaurant.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" text-2xl font-bold tracking-tight text-steel-blue-900 dark:text-steel-blue mb-2 text-left"
                        >
                          {restaurant.name}
                        </a>
                      </div>
                      
                      <p className="text-left">
                        {restaurant.is_closed ? "Closed" : "Open"}
                      </p>
                      <p className="text-left">
                        {restaurant.categories
                          .map((category) => category.title)
                          .join(", ")}
                        {restaurant.price}
                      </p>
                      <p className="font-normal text-gray-700 dark:text-gray-400 text-left">
                        {restaurant.location.address1}
                      </p>
                      <p className="text-left">
                        <div className="text-left">
                          <Rating>
                            <Rating.Star />
                            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                              {restaurant.rating}
                            </p>
                            <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                            <a
                              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                              href="#"
                            >
                              {restaurant.review_count} reviews
                            </a>
                          </Rating>
                        </div>{" "}
                        {restaurant.phone}
                      </p>
                    </Card>
                  </li>
                ))}
              </ul>
              <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                showIcons
                totalPages={Math.ceil(restaurantData.length / itemsPerPage)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Eyefind;
