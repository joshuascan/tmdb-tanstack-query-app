import { useParams } from "next/navigation";
import CastMemberCard from "@/components/CastMemberCard";
import useTMDBQuery from "@/hooks/useTMDBQuery";
import {
  CastDetails,
  CreditsResponse,
  MediaType,
  MovieDetails,
  TvShowDetails,
} from "@/types";
import useLoadingOrErrorComponent from "@/hooks/useLoadingOrErrorComponent";
import { flex } from "../../styled-system/patterns";
import { css } from "../../styled-system/css";
import MovieDetailsCard from "./MovieDetailsCard";
import TvDetailsCard from "./TvDetailsCard";
import mediaConfig from "@/lib/media-config";

interface MediaDetailsProps {
  mediaType: MediaType;
}

const MediaDetails = ({ mediaType }: MediaDetailsProps) => {
  const { id } = useParams<{ id: string }>();
  const queryEnabled = id !== undefined;
  const config = mediaConfig[mediaType];

  const DetailsComponent = {
    movie: MovieDetailsCard,
    tv: TvDetailsCard,
  }[mediaType];

  const {
    data: detailsData,
    isLoading: isLoadingDetails,
    isError: isErrorDetails,
  } = useTMDBQuery<MovieDetails | TvShowDetails>({
    key: [config.detailsQueryKey, id],
    endpoint: `${config.endpointPrefix}/${id}`,
    enabled: queryEnabled,
  });

  const {
    data: creditsData,
    isLoading: isLoadingCredits,
    isError: isErrorCredits,
  } = useTMDBQuery<CreditsResponse>({
    key: [config.creditsQueryKey, id],
    endpoint: `${config.endpointPrefix}/${id}/credits`,
    enabled: queryEnabled,
  });

  const isLoading = isLoadingDetails || isLoadingCredits;
  const isError = isErrorDetails || isErrorCredits;
  const loadingOrErrorComponent = useLoadingOrErrorComponent(
    isLoading,
    isError
  );

  if (loadingOrErrorComponent) return loadingOrErrorComponent;

  return (
    <div className={flex({ direction: "column" })}>
      <DetailsComponent {...detailsData} />
      <div className={flex({ direction: "column", align: "center", mt: 24 })}>
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
          {creditsData && creditsData.cast.length > 0 ? (
            creditsData.cast
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

export default MediaDetails;
