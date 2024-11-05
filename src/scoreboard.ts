export class Scoreboard {
  private matches: { [key: string]: { homeScore: number; awayScore: number } } =
    {};

  addMatch(homeTeam: string, awayTeam: string): void {
    const key = `${homeTeam} vs ${awayTeam}`;
    this.matches[key] = { homeScore: 0, awayScore: 0 };
  }

  endMatch(homeTeam: string, awayTeam: string): void {
    const key = `${homeTeam} vs ${awayTeam}`;
    delete this.matches[key];
  }

  updateScore(
    homeTeam: string,
    awayTeam: string,
    homeScore: number,
    awayScore: number
  ): void {
    const key = `${homeTeam} vs ${awayTeam}`;
    if (this.matches[key]) {
      this.matches[key].homeScore = homeScore;
      this.matches[key].awayScore = awayScore;
    }
  }

  getMatches(): {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
  }[] {
    return Object.entries(this.matches).map(([key, value]) => {
      const [homeTeam, awayTeam] = key.split(" vs ");
      return {
        homeTeam,
        awayTeam,
        homeScore: value.homeScore,
        awayScore: value.awayScore,
      };
    });
  }

  getMatch(
    homeTeam: string,
    awayTeam: string
  ): { homeScore: number; awayScore: number } | undefined {
    const key = `${homeTeam} vs ${awayTeam}`;
    return this.matches[key];
  }
}
