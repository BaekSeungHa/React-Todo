import { useBeforeunload } from "react-beforeunload";

const Example = () => {
  useBeforeunload((event) => event.preventDefault());

  return;
};

export default Example;
