import { I as r, E as s } from "https://cdn.jsdelivr.net/npm/@inpageedit/core/dist/index-9I-lTJju.js";
import { C as E, s as l, b as g, F as L, a as S, e as I, m as P, $ as m, M as y, R as U, S as M, c as h, d as R, f as O } from "https://cdn.jsdelivr.net/npm/@inpageedit/core/dist/index-9I-lTJju.js";
import { BasePlugin as b } from "https://cdn.jsdelivr.net/npm/@inpageedit/core/dist/core.js";
window.RLQ ||= [];
window.__IPE_MODULES__ ||= [];
w("InPageEdit#autoload", () => {
  const _ = a();
  _ && d({
    baseURL: _,
    InPageEdit: r
  });
});
async function d(_ = { baseURL: a(), InPageEdit: r }) {
  const { baseURL: n, InPageEdit: i } = _;
  typeof window?.ipe?.stop == "function" && await window.ipe.stop();
  const c = window.InPageEdit || {}, e = new i({
    apiConfigs: {
      baseURL: n
    },
    legacyPreferences: c?.myPreferences || {}
  });
  if (window.ipe = e, await e.start(), window.RLQ.push(() => {
    mw.hook("InPageEdit.ready").fire(e);
  }), Array.isArray(window.__IPE_MODULES__)) {
    const t = [];
    for (; window.__IPE_MODULES__.length; )
      try {
        const o = window.__IPE_MODULES__.shift();
        typeof o == "function" && o?.(e), t.push(o);
      } catch {
      }
    window.__IPE_MODULES__ = {
      push: (o) => {
        typeof o == "function" && o(e), t.push(o);
      }
    }, e.on("dispose", () => {
      window.__IPE_MODULES__ = t;
    });
  }
  e.logger("AUTOLOAD").info(
    `
    ____      ____                   ______    ___ __ 
   /  _/___  / __ \\____ _____ ____  / ____/___/ (_) /_
   / // __ \\/ /_/ / __ \`/ __ \`/ _ \\/ __/ / __  / / __/
 _/ // / / / ____/ /_/ / /_/ /  __/ /___/ /_/ / / /_  
/___/_/ /_/_/    \\__,_/\\__, /\\___/_____/\\__,_/_/\\__/  
                      /____/                v` + e.version + `
- Wiki API Endpoint: ${n}
- Documentation:     ${s.HOME_URL}
- Bug Reports:       ${s.GITHUB_URL}`
  );
}
function a() {
  const _ = document.querySelector('meta[name="generator"][content^="MediaWiki"]') !== null, n = document.querySelector('link[rel="EditURI"]')?.href?.split("?")[0];
  return _ && n ? n : void 0;
}
function w(_, n) {
  const i = Symbol.for(_);
  return window[i] ? !1 : (window[i] = !0, n(), !0);
}
export {
  b as BasePlugin,
  E as CordisError,
  l as CordisSymbols,
  g as EffectScope,
  s as Endpoints,
  L as ForkScope,
  r as InPageEdit,
  S as Inject,
  I as Lifecycle,
  P as Logger,
  m as LoggerLevel,
  y as MainScope,
  U as RegisterPreferences,
  M as Schema,
  h as ScopeStatus,
  R as Service,
  O as createLogger
};
//# sourceMappingURL=index.js.map
