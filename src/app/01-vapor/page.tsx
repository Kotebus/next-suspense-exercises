import { getGamesInLibrary } from '@/helpers/vapor-helpers';
import LibraryGameCard from '@/components/LibraryGameCard';
import LibraryGameWrapper from "@/components/LibraryGameWrapper/LibraryGameWrapper";

export const dynamic = 'force-dynamic';

async function VaporExercise() {
  const games = await getGamesInLibrary();

  return (
      <LibraryGameWrapper gamesCount={games.length}>
          {games.map((game) => (
              <LibraryGameCard
                  key={game.slug}
                  game={game}
              />
          ))}
      </LibraryGameWrapper>
  );
}

export default VaporExercise;
