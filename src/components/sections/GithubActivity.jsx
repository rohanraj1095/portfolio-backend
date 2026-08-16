import { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { C } from "../../styles/colors";
import { GITHUB_USERNAME } from "../../data";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { useInView } from "../../hooks/useInView";
import { SecTitle, Card } from "../ui/Atoms";

// Language colour map for the bar chart (extend as needed)
const LANG_COLORS = {
  JavaScript: "#f3c969", TypeScript: "#5bb6f7", Python: "#3ee8a8",
  Shell: "#f06a5a", HTML: "#f06a5a", CSS: "#a78bfa", Java: "#f3a649",
  Go: "#5bb6f7", Ruby: "#f06a5a", PHP: "#a78bfa", C: "#94a3b8",
  "C++": "#94a3b8", YAML: "#a78bfa", Dockerfile: "#3ee8a8",
};

export function GithubActivity() {
  const { isMobile } = useBreakpoint();
  const [ref, visible] = useInView();

  const [ghStats, setGhStats] = useState(null); // { repos, followers, ... }
  const [langs, setLangs]     = useState(null); // [{lang, pct, color}]
  const [error, setError]     = useState(false);

  // fetch real public GitHub data (no auth needed — public REST endpoints)
  useEffect(() => {
    if (!GITHUB_USERNAME) return;

    async function loadGithub() {
      try {
        // 1. profile — public repo count, followers
        const profileRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!profileRes.ok) throw new Error("profile fetch failed");
        const profile = await profileRes.json();

        // 2. repos — used to compute top languages
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const repos = reposRes.ok ? await reposRes.json() : [];

        const langCount = {};
        repos.forEach(r => {
          if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
        });
        const total = Object.values(langCount).reduce((a, b) => a + b, 0) || 1;
        const langList = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang, count]) => ({
            lang,
            pct: Math.round((count / total) * 100),
            color: LANG_COLORS[lang] || "#94a3b8",
          }));

        setGhStats({
          repos: profile.public_repos ?? "—",
          followers: profile.followers ?? "—",
          following: profile.following ?? "—",
          gists: profile.public_gists ?? "—",
        });
        setLangs(langList.length ? langList : null);
      } catch (e) {
        setError(true);
      }
    }

    loadGithub();
  }, []);

  const GH_STATS = ghStats ? [
    { label:"Public Repos", value:String(ghStats.repos),     color:C.mint    },
    { label:"Followers",    value:String(ghStats.followers), color:C.gold    },
    { label:"Following",    value:String(ghStats.following), color:"#5bb6f7"},
    { label:"Public Gists", value:String(ghStats.gists),     color:"#f06a5a"},
  ] : null;

  return (
    <div id="github" ref={ref} style={{ maxWidth:1100, margin:"0 auto", padding:"56px 20px 0" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12, marginBottom:visible?28:28 }}>
        <SecTitle Icon={Github} className={visible?"fade-up":""}>GitHub Activity</SecTitle>
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer"
          className={visible?"fade-up":""}
          style={{ fontSize:13, color:C.mint, display:"flex", alignItems:"center", gap:5, textDecoration:"none" }}>
          @{GITHUB_USERNAME} <ExternalLink size={12}/>
        </a>
      </div>

      {/* real contribution graph — rendered as an image via a public chart service,
          no token needed since GitHub's GraphQL contribution API requires auth
          that can't be safely exposed in frontend code */}
      <Card className={visible?"fade-up d-100":""} style={{ padding: isMobile?"16px":"22px", marginBottom:16, opacity:visible?undefined:0 }}>
        <div style={{ color:"#64748b", fontSize:11, fontWeight:600, marginBottom:12, letterSpacing:"0.05em" }}>
          CONTRIBUTION ACTIVITY · LAST 12 MONTHS
        </div>
        <div className="gh-scroll" style={{ overflowX:"auto", borderRadius:8 }}>
          <img
            src={`https://ghchart.rshah.org/3ee8a8/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
            style={{ width:"100%", minWidth:600, display:"block", filter:"brightness(0.95)" }}
            onError={(e) => { e.target.style.display = "none"; setError(true); }}
          />
        </div>
        {error && (
          <div style={{ fontSize:11, color:"#64748b", marginTop:8 }}>
            Couldn't load live GitHub data for <strong>{GITHUB_USERNAME}</strong> — update{" "}
            <code style={{ color:C.mint }}>GITHUB_USERNAME</code> in <code style={{ color:C.mint }}>src/data/index.js</code>{" "}
            to your real username.
          </div>
        )}
      </Card>

      {/* stats + languages row */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
        <Card className={visible?"fade-up d-200":""} style={{ padding:isMobile?"14px":"18px", opacity:visible?undefined:0 }}>
          <div style={{ color:"#64748b", fontSize:11, fontWeight:600, marginBottom:12, letterSpacing:"0.05em" }}>STATS</div>
          {GH_STATS ? GH_STATS.map(s => (
            <div key={s.label} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 0", borderBottom:"1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ fontSize:isMobile?10:12, color:"#64748b" }}>{s.label}</span>
              <span style={{ fontSize:isMobile?12:14, fontWeight:700, color:s.color }}>{s.value}</span>
            </div>
          )) : (
            <div style={{ fontSize:11, color:"#334155" }}>Loading…</div>
          )}
        </Card>

        <Card className={visible?"fade-up d-300":""} style={{ padding:isMobile?"14px":"18px", opacity:visible?undefined:0 }}>
          <div style={{ color:"#64748b", fontSize:11, fontWeight:600, marginBottom:12, letterSpacing:"0.05em" }}>TOP LANGUAGES</div>
          {langs ? langs.map(l => (
            <div key={l.lang} style={{ marginBottom:10 }}>
              <div style={{ display:"flex", justifyContent:"space-between", fontSize:isMobile?10:11, marginBottom:5 }}>
                <span style={{ color:"#cbd5e1" }}>{l.lang}</span>
                <span style={{ color:l.color, fontWeight:600 }}>{l.pct}%</span>
              </div>
              <div style={{ height:5, borderRadius:3, background:"rgba(255,255,255,0.05)", overflow:"hidden" }}>
                <div style={{ height:"100%", width:visible?`${l.pct}%`:"0%", background:l.color, borderRadius:3, transition:"width 1.2s ease" }}/>
              </div>
            </div>
          )) : (
            <div style={{ fontSize:11, color:"#334155" }}>Loading…</div>
          )}
        </Card>
      </div>
    </div>
  );
}
