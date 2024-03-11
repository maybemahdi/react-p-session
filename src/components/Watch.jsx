const Watch = ({ watch }) => {
  const { id, name, price } = watch;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Price; {price}</p>
    </div>
  );
};

export default Watch;
