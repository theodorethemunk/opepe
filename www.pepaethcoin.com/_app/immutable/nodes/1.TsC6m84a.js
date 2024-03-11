import {
    s as S,
    n as _,
    b as x
} from "../chunks/scheduler.BvLojk_z.js";
import {
    S as j,
    i as k,
    e as f,
    j as d,
    s as q,
    c as g,
    k as h,
    l as v,
    f as l,
    a as y,
    d as m,
    m as $,
    n as E
} from "../chunks/index.DlSoLAPZ.js";
import {
    s as C
} from "../chunks/entry.BFrgIGji.js";
const H = () => {
        const s = C;
        return {
            page: {
                subscribe: s.page.subscribe
            },
            navigating: {
                subscribe: s.navigating.subscribe
            },
            updated: s.updated
        }
    },
    P = {
        subscribe(s) {
            return H().page.subscribe(s)
        }
    };

function w(s) {
    var b;
    let t, r = s[0].status + "",
        n, o, i, c = ((b = s[0].error) == null ? void 0 : b.message) + "",
        u;
    return {
        c() {
            t = f("h1"), n = d(r), o = q(), i = f("p"), u = d(c)
        },
        l(e) {
            t = g(e, "H1", {});
            var a = h(t);
            n = v(a, r), a.forEach(l), o = y(e), i = g(e, "P", {});
            var p = h(i);
            u = v(p, c), p.forEach(l)
        },
        m(e, a) {
            m(e, t, a), $(t, n), m(e, o, a), m(e, i, a), $(i, u)
        },
        p(e, [a]) {
            var p;
            a & 1 && r !== (r = e[0].status + "") && E(n, r), a & 1 && c !== (c = ((p = e[0].error) == null ? void 0 : p.message) + "") && E(u, c)
        },
        i: _,
        o: _,
        d(e) {
            e && (l(t), l(o), l(i))
        }
    }
}

function z(s, t, r) {
    let n;
    return x(s, P, o => r(0, n = o)), [n]
}
let F = class extends j {
    constructor(t) {
        super(), k(this, t, z, w, S, {})
    }
};
export {
    F as component
};