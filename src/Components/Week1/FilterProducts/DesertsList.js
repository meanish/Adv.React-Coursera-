const DessertsList = ({ data }) => {
  const filterProduct = data.filter((val, index) => {
    return val.calories < 500;
  });
  const SortProduct = filterProduct.sort((a, b) => a.calories - b.calories);

  console.log(filterProduct);
  console.log(SortProduct);
  return (
    <ul>
      {SortProduct.map((val) => {
        const itemProduct = `${val.name} - ${val.calories} cal.`;
        return <li>{itemProduct}</li>;
      })}
    </ul>
  );
};

export default DessertsList;
