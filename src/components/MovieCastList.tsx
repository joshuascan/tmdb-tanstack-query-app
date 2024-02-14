import { CastDetails } from "@/types";
import { container, hstack } from "../../styled-system/patterns";

const MovieCastList = ({ id, name, profile_path, character }: CastDetails) => {
  return (
    <div className={container({})}>
      <h2>Cast</h2>
      <div className={hstack()}></div>
    </div>
  );
};

export default MovieCastList;
