import { useParams } from "react-router-dom";

const film = {
  id: 1,
  title: "Chunnel",
  homepage: "http://chunnelmovie.com",
  release_date: "2025-10-25T06:09:00.794Z",
  overview:
    "Illuminating the darkest depths of international intrigue and personal sacrifice, 'Chunnel' takes you on a heart-pounding journey through the underbelly of the world's most vital tunnel. When a mysterious explosion rocks the Chunnel, trapping the U.S. President's daughter inside, the race against time begins. As rescuers tunnel their way through the wreckage, they unearth a web of conspiracies that threaten to reshape global politics. Unraveling the layers of deception becomes a gripping chess game, where every move could mean life or death. 'Chunnel' is not just a pulse-pounding thriller; it's a masterclass in suspense, leaving audiences at the edge of their seats, guessing until the final revelation. Get ready for a cinematic ride that will have you questioning alliances, unraveling secrets, and redefining the limits of human determination. The Chunnel holds more than just passengers; it harbors a tale of deception, bravery, and the resilience of the human spirit. Don't miss the tunnel of twists and turns that is 'Chunnel.'",
  poster_path: "/images/posters/1.jpg",
  runtime: 114,
  tagline: "There's a war 100 meters below the English Channel",
  popularity: 7.1,
  imdb_id: "tt0137523",
  vote_average: 6.2,
  vote_count: 52,
};

export function FilmDetails({ filmId }: { filmId?: number }) {
  const { filmId: routeFilmId } = useParams<{ filmId: string }>();

  const effectiveFilmId =
    filmId ?? (routeFilmId ? Number(routeFilmId) : undefined);

  return (
    <div>
      {film ? (
        <section>
          <div>Film Id:{film.id}</div>
          <div>{film.title}</div>
          <div>
            <a href="{film.homepage}">{film.homepage}</a>
          </div>
        </section>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
}
