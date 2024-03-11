import { useState, useEffect } from "react";
import Watch from "./Watch";
const Watches = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("watches.json");
      const data = await res.json();
      setWatches(data);
    };
    fetchData();
  }, []);

  return(
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-10">
    {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
    }
    </div>
  )
};

export default Watches;
