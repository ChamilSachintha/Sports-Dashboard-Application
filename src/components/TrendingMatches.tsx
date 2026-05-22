export default function TrendingMatches() {
  const matches = [
    {
      sport: "Football",
      tournament: "UEFA Champions League",
      team1: "Real Madrid",
      team2: "Barcelona",
      duration: "90:00",
      odds: ["2.10", "3.25", "2.85"],
    },
    {
      sport: "Cricket",
      tournament: "IPL 2024",
      team1: "Mumbai Indians",
      team2: "Chennai Super Kings",
      duration: "45 Over",
      odds: ["1.95", "1.88"],
    },
    {
      sport: "Basketball",
      tournament: "NBA Playoffs",
      team1: "Warriors",
      team2: "Heat",
      duration: "Q4 - 08:12",
      odds: ["1.72", "2.15"],
    },
  ];

  return (
    <section className="w-full bg-[#0f162a] py-12 px-6">
      
      <h2 className="text-white text-2xl md:text-3xl font-medium mb-8">
        Trending Matches
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-[#1b2438] border border-slate-800 rounded-xl p-5 text-white hover:scale-[1.03] transition"
          >

            {/* Sport */}
            <h3 className="text-[#999999] font-light text-m">
              {match.sport}
            </h3>

            {/* Tournament */}
            <p className="text-[#f97216] text-xs mb-4">
              {match.tournament}
            </p>

            {/* Teams */}
            <div className="text-center space-y-1 mb-4">

              <p className="text-white font-medium">{match.team1}</p>

              <p className="text-red-400 text-xs font-bold">VS</p>

              <p className="text-white font-medium">{match.team2}</p>

            </div>

            {/* Duration */}
            <div className="flex justify-center text-xs text-slate-400 mb-4">
              <span>Duration: {match.duration}</span>
            </div>

            {/* Odds */}
            <div className="mb-4">
              <p className="text-xs text-slate-400 mb-2">Odds</p>

              <div className="flex gap-2 flex-wrap">
                {match.odds.map((odd, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white"
                  >
                    {odd}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <button className="w-full bg-[#3b82f6] text-black font-semibold py-2 rounded-lg text-sm">
                <span className="text-sm text-white">
              View Details
                </span>
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}