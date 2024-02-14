import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";
import { CastDetails } from "@/types";
import Image from "next/image";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";

const CastMemberCard = ({ name, profile_path, character }: CastDetails) => {
  return (
    <div className={flex({ direction: "column", justify: "space-between" })}>
      <Image
        src={
          profile_path ? `${IMAGE_URL}${profile_path}` : `${EMPTY_MOVIE_URL}`
        }
        width={200}
        height={300}
        alt={name}
      />
      <div>
        <h3 className={css({ fontSize: "lg", fontWeight: "bold" })}>{name}</h3>
        <p className={css({ fontStyle: "italic" })}>{character}</p>
      </div>
    </div>
  );
};

export default CastMemberCard;
