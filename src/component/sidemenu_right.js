import { useHistory } from "react-router";
const SidemenuRight = () => {
  const history = useHistory();
  const add_memo_page = history.push("/memo");
  return (
    <div className="sidemenu_right_wrap">
      <input type="button" onClick={add_memo_page}></input>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default SidemenuRight;
