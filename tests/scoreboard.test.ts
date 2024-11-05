import { Scoreboard } from "../src/scoreboard";

describe("Scoreboard", () => {
  it("should add a live match", () => {
    const scoreboard = new Scoreboard();
    scoreboard.addMatch("Team A", "Team B");
    expect(scoreboard.getMatches().length).toBe(1);
  });

  it("should remove a match", () => {
    const scoreboard = new Scoreboard();
    scoreboard.addMatch("Team A", "Team B");
    scoreboard.endMatch("Team A", "Team B");
    expect(scoreboard.getMatches().length).toBe(0);
  });

  it("should update the score of a match", () => {
    const scoreboard = new Scoreboard();
    scoreboard.addMatch("Team A", "Team B");
    scoreboard.updateScore("Team A", "Team B", 2, 1);
    const match = scoreboard.getMatch("Team A", "Team B");
    if (match) {
      expect(match.homeScore).toBe(2);
      expect(match.awayScore).toBe(1);
    }
  });
});
