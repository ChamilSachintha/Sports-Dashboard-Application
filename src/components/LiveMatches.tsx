import india from "../assets/IN.svg";
import australia from "../assets/AU.svg";
// import manUnited from "../assets/man-united.svg";
// import liverpool from "../assets/liverpool.svg";
// import lakers from "../assets/lakers.svg";
// import celtics from "../assets/celtics.svg";
// import england from "../assets/EN.svg";
// import pakistan from "../assets/PAK.svg";

export default function LiveMatches() {
  const matches = [
    {
      sport: "Cricket",
      team1: "India - 287/6",
      team2: "Australia - 245/8",
      flag1: india,
      flag2: australia,
    },
    {
      sport: "Football",
      team1: "Man United - 2",
      team2: "Liverpool - 2",
      flag1: india,
      flag2: india,
    },
    {
      sport: "Basketball",
      team1: "Lakers - 98",
      team2: "Celtics - 102",
      flag1: india,
      flag2: india,
    },
    {
      sport: "Cricket",
      team1: "England - 312/7",
      team2: "Pakistan - 156/4",
      flag1: india,
      flag2: india,
    },
  ];

  return (
    <section className="w-full bg-[#0f162a] py-12 px-6">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-medium">
          Live Matches
        </h2>

        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="text-red-500 text-xs font-medium tracking-wide">
            LIVE
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-[#1b2438] border border-slate-800 rounded-xl p-5 text-white hover:scale-[1.02] transition"
          >
            {/* Sport Name + LIVE */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#999999] font-light text-sm">
                {match.sport}
              </h3>

              <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/30">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>

                <span className="text-red-500 text-xs font-medium tracking-wide">
                  LIVE
                </span>
              </div>
            </div>

            {/* Teams */}
            <div className="space-y-2 text-sm md:text-base">
              {/* Team 1 */}
              <div className="flex items-center gap-2">
                <img
                  src={match.flag1}
                  alt="team1"
                  className="w-5 h-5 rounded-full"
                />
                <p>{match.team1}</p>
              </div>

              {/* Team 2 */}
              <div className="flex items-center gap-2">
                <img
                  src={match.flag2}
                  alt="team2"
                  className="w-5 h-5 rounded-full"
                />
                <p>{match.team2}</p>
              </div>
            </div>

            <div className="border-t border-white/10 mt-4 pt-4"></div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between mt-1">
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
