import {PropsWithChildren} from "react";

interface ILibraryGameWrapperProps extends PropsWithChildren {
    gamesCount?: number;
}

function GameCountWrapper({gamesCount}: {gamesCount?: number}) {
    if (gamesCount === undefined) {
        return null;
    }

    return (
        <p>
          <span className="num-of-games">
            {gamesCount}
          </span>{' '}games in library
        </p>
    );
}

function LibraryGameWrapper({children, gamesCount}: ILibraryGameWrapperProps) {
    return (
        <section className="max-width-wrapper">
            <header className="library-header">
                <h1>My games</h1>
                <GameCountWrapper gamesCount={gamesCount}/>
            </header>
            <div className="game-grid">
                {children}
            </div>
        </section>
    );
}

export default LibraryGameWrapper;