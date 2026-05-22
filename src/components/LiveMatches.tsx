export default function LiveMatches() {
  const matches = [
    {
      sport: "Cricket",
      team1: "India - 245/6",
      team2: "Australia - 230/8",
    },
    {
      sport: "Football",
      team1: "Brazil - 2",
      team2: "Argentina - 1",
    },
    {
      sport: "Basketball",
      team1: "Lakers - 98",
      team2: "Warriors - 102",
    },
    {
      sport: "Cricket",
      team1: "England - 180/4",
      team2: "Pakistan - 175/9",
    },
  ];

  return (
    <section className="w-full bg-[#0f162a] py-12 px-6">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-medium">
          Live Matches
        </h2>

        <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-white rounded-full"></span>

          <span className="text-white text-xs font-thin tracking-wide">
            LIVE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-[#1b2438] border border-slate-800 rounded-xl p-5 text-white hover:scale-[1.02] transition"
          >
            {/* Sport Name */}
            <h3 className="text-[#999999] font-light text-sm mb-4">
              {match.sport}
            </h3>

            {/* Teams */}
            <div className="space-y-2 text-sm md:text-base">
              <p>{match.team1}</p>
              <p>{match.team2}</p>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between mt-6">
              <a
                href="#stats"
                className="text-slate-300 hover:text-emerald-400 text-sm"
              >
                View Stats
              </a>

              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg text-sm">
                Watch Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
