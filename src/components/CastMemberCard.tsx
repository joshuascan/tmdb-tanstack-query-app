import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/urls";
import { CastDetails } from "@/types";
import Image from "next/image";
import { css } from "../../styled-system/css";
import { flex } from "../../styled-system/patterns";
import { useState } from "react";
import Spinner from "./Spinner";

const CastMemberCard = ({ name, profile_path, character }: CastDetails) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={flex({ direction: "column", justify: "space-between" })}>
      {isLoading && (
        <div
          className={flex({
            justify: "center",
            align: "center",
            height: "300px",
            width: "200px",
            position: "absolute",
          })}
        >
          <Spinner size="sm" />
        </div>
      )}
      <Image
        src={
          profile_path ? `${IMAGE_URL}${profile_path}` : `${EMPTY_MOVIE_URL}`
        }
        width={200}
        height={300}
        alt={name}
        onLoad={handleImageLoad}
      />
      <div>
        <h3 className={css({ fontSize: "lg", fontWeight: "bold" })}>{name}</h3>
        <p className={css({ fontStyle: "italic" })}>{character}</p>
      </div>
    </div>
  );
};

export default CastMemberCard;
