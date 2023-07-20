import DessertsList from "./DesertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function FilterProducts() {
  return (
    <div>
      <div className="sub-head">
        <span className="span">Question:</span>Desserts List
      </div>
      <div className="question">
        <pre>{JSON.stringify(desserts, null, 2)}</pre>
      </div>
      <div className="sub-head">
        <span className="span">Answer:</span> Sorted List of low calorie
        desserts than 500
      </div>
      <div className="answer">
        <DessertsList data={desserts} />
      </div>
    </div>
  );
}

export default FilterProducts;
