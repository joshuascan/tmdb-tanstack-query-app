"use client";

import { flex } from "../../../../styled-system/patterns";
import { useParams } from "next/navigation";
import CastMemberCard from "@/components/CastMemberCard";
import { css } from "../../../../styled-system/css";
import TvDetailsCard from "@/components/TvDetailsCard";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import { CastDetails, CreditsResponse, TvShowDetails } from "@/types";
import useLoadingOrErrorComponent from "@/hooks/useLoadingOrErrorComponent";

const TvDetails = () => {
  const { id } = useParams<{ id: string }>();
  const queryEnabled = id !== undefined;

  const {
    data: tvDetailsData,
    isLoading: isLoadingTvDetails,
    isError: isErrorTvDetails,
  } = useTMDBQuery<TvShowDetails>({
    key: ["tvDetails", id],
    endpoint: `/tv/${id}`,
    enabled: queryEnabled,
  });

  const {
    data: tvCreditsData,
    isLoading: isLoadingTvCredits,
    isError: isErrorTvCredits,
  } = useTMDBQuery<CreditsResponse>({
    key: ["tvCredits", id],
    endpoint: `/tv/${id}/credits`,
    enabled: queryEnabled,
  });

  const isLoading = isLoadingTvDetails || isLoadingTvCredits;
  const isError = isErrorTvDetails || isErrorTvCredits;

  const loadingOrErrorComponent = useLoadingOrErrorComponent(
    isLoading,
    isError
  );
  if (loadingOrErrorComponent) return loadingOrErrorComponent;

  return (
    <div className={flex({ direction: "column" })}>
      <TvDetailsCard {...tvDetailsData} />
      <div
        className={flex({
          direction: "column",
          align: "center",
          mt: 24,
        })}
      >
        <h2 className={css({ fontSize: "4xl", fontWeight: "bold" })}>Cast</h2>
        <div
          className={flex({
            justify: "center",
            wrap: "wrap",
            mt: 8,
            mb: 16,
            gap: 8,
            maxWidth: 1200,
          })}
        >
          {tvCreditsData && tvCreditsData.cast.length > 0 ? (
            tvCreditsData.cast
              .slice(0, 15)
              .map((castMember: CastDetails) => (
                <CastMemberCard key={castMember.id} {...castMember} />
              ))
          ) : (
            <p className={css({ fontSize: "lg", fontStyle: "italic" })}>
              There are no cast members to display.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TvDetails;
