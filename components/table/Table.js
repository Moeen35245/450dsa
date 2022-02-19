import Tablebody from "./Tablebody";
import Tablehead from "./Tablehead";
import { useContext } from "react";
import { UserContext } from "../../context/mainContext";

function Table({ data, queList }) {
  let id = 0;
  let count = 0;
  const ctx = useContext(UserContext);
  if (!ctx.userData) console.log(ctx);

  return (
    <div className="overflow-x-auto">
      <Tablehead />

      {data.map((item) => {
        return (
          <Tablebody queList={queList} key={id++} item={item} count={count++} />
        );
      })}
    </div>
  );
}

export default Table;
