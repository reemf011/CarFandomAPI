import CarSummary from "./Components/Cars/CarSummary";

const App = () => {
  const dummyCar = {
    model: 'Mustang',
    color: 'Red',
    price: '$500,000',
    name: 'Ford',
    year: '2017',
    description:'New 2017 Red Ford Mustang',
    imgURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autotrader.ca%2Fresearch%2Fford%2Fmustang%2F2017%2F&psig=AOvVaw20YIp1owuqZu75ARGHtlcr&ust=1670414125591000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCWhNb35PsCFQAAAAAdAAAAABAE'
  };

  return (
    <div>
      <CarSummary car={dummyCar} />
    </div>
  );
};

export default App;