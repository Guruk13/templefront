import{S as le,i as xe,s as he,k as s,q as y,a as S,P as fe,l as a,m as i,r as w,h as t,c as z,n,p as pe,G as e,b as U,J as q,o as ue,y as ge,z as me,E as ye,A as we,g as _e,d as Ee,B as be}from"../chunks/index.c5a51ea4.js";/* empty css                                                      */const Ie=!0,Fe=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ie},Symbol.toStringTag,{value:"Module"}));function Se(j){let c,m,o,l,x,d;return{c(){c=s("script"),m=y(`#ifdef GL_ES
        precision highp float;
        #endif
        #ifdef GL_OES_standard_derivatives
        #extension GL_OES_standard_derivatives : enable
        #endif
        // psrdnoise (c) Stefan Gustavson and Ian McEwan,
        // ver. 2021-12-02, published under the MIT license:
        // https://github.com/stegu/psrdnoise/
        
        float psrdnoise(vec2 x, vec2 period, float alpha, out vec2 gradient)
        {
            vec2 uv = vec2(x.x+x.y*0.5, x.y);
            vec2 i0 = floor(uv), f0 = fract(uv);
            float cmp = step(f0.y, f0.x);
            vec2 o1 = vec2(cmp, 1.0-cmp);
            vec2 i1 = i0 + o1, i2 = i0 + 1.0;
            vec2 v0 = vec2(i0.x - i0.y*0.5, i0.y);
            vec2 v1 = vec2(v0.x + o1.x - o1.y*0.5, v0.y + o1.y);
            vec2 v2 = vec2(v0.x + 0.5, v0.y + 1.0);
            vec2 x0 = x - v0, x1 = x - v1, x2 = x - v2;
            vec3 iu, iv, xw, yw;
            if(any(greaterThan(period, vec2(0.0)))) {
                xw = vec3(v0.x, v1.x, v2.x);
                yw = vec3(v0.y, v1.y, v2.y);
                if(period.x > 0.0)
                    xw = mod(vec3(v0.x, v1.x, v2.x), period.x);
                if(period.y > 0.0)
                    yw = mod(vec3(v0.y, v1.y, v2.y), period.y);
                iu = floor(xw + 0.5*yw + 0.5); iv = floor(yw + 0.5);
            } else {
                iu = vec3(i0.x, i1.x, i2.x); iv = vec3(i0.y, i1.y, i2.y);
            }
            vec3 hash = mod(iu, 289.0);
            hash = mod((hash*51.0 + 2.0)*hash + iv, 289.0);
            hash = mod((hash*34.0 + 10.0)*hash, 289.0);
            vec3 psi = hash*0.07482 + alpha;
            vec3 gx = cos(psi); vec3 gy = sin(psi);
            vec2 g0 = vec2(gx.x, gy.x);
            vec2 g1 = vec2(gx.y, gy.y);
            vec2 g2 = vec2(gx.z, gy.z);
            vec3 w = 0.8 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2));
            w = max(w, 0.0); vec3 w2 = w*w; vec3 w4 = w2*w2;
            vec3 gdotx = vec3(dot(g0, x0), dot(g1, x1), dot(g2, x2));
            float n = dot(w4, gdotx);
            vec3 w3 = w2*w; vec3 dw = -8.0*w3*gdotx;
            vec2 dn0 = w4.x*g0 + dw.x*x0;
            vec2 dn1 = w4.y*g1 + dw.y*x1;
            vec2 dn2 = w4.z*g2 + dw.z*x2;
            gradient = 10.9*(dn0 + dn1 + dn2);
            return 10.9*n;
        }
        
        
        float aastep(float threshold, float value) {
          float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));
        //  float afwidth = fwidth(value);  // fwidth(v) is |dFdx(v)| + |dFdy(v)|
          return smoothstep(threshold-afwidth, threshold+afwidth, value);
        }
        
        varying vec2 st;
        uniform float time;
        
                void main(void) {
                    vec2 x, p, g, gtemp;
                    float n1, n2;
                    const float nscale = 5.0;
                    vec2 v = nscale * (st + 0.9) + vec2(0.0, -0.1*time);
                    p = vec2(0.0);
                    x = 2.0	* st;
                    n1 = psrdnoise(v, p, 0.1 * time, g);
                    g = vec2(-g.y, g.x); // Rotate
                    //n2 = psrdnoise(x*2.0+0.25*g, p,  time, gtemp);
                    gtemp = vec2(-gtemp.y, gtemp.x); // Rotate
                    g += 0.5 * gtemp;
                    n2 += 0.5*psrdnoise(x*2.0+0.2*g, p, 0.1 * time, gtemp);
                    const vec4 dark = vec4(0.38, 0.38, 0.38, 1.0);
                    const vec4 light = vec4(0.42, 0.42, 0.42, 1.0); 
                    gl_FragColor = mix(dark, light, aastep(0.0,n2));
                    //orange vec4(0.80, 0.51, 0.07, 1.0);
                }
	`),o=s("script"),l=y(`attribute vec3 position;
            attribute vec2 texcoord;
        
            varying vec2 st;
        
            void main(void) {
                gl_Position = vec4(position, 1.0);
                st = texcoord;
            }`),x=S(),d=s("canvas"),this.h()},l(v){const r=fe("svelte-sa0qk9",document.head);c=a(r,"SCRIPT",{id:!0,type:!0});var f=i(c);m=w(f,`#ifdef GL_ES
        precision highp float;
        #endif
        #ifdef GL_OES_standard_derivatives
        #extension GL_OES_standard_derivatives : enable
        #endif
        // psrdnoise (c) Stefan Gustavson and Ian McEwan,
        // ver. 2021-12-02, published under the MIT license:
        // https://github.com/stegu/psrdnoise/
        
        float psrdnoise(vec2 x, vec2 period, float alpha, out vec2 gradient)
        {
            vec2 uv = vec2(x.x+x.y*0.5, x.y);
            vec2 i0 = floor(uv), f0 = fract(uv);
            float cmp = step(f0.y, f0.x);
            vec2 o1 = vec2(cmp, 1.0-cmp);
            vec2 i1 = i0 + o1, i2 = i0 + 1.0;
            vec2 v0 = vec2(i0.x - i0.y*0.5, i0.y);
            vec2 v1 = vec2(v0.x + o1.x - o1.y*0.5, v0.y + o1.y);
            vec2 v2 = vec2(v0.x + 0.5, v0.y + 1.0);
            vec2 x0 = x - v0, x1 = x - v1, x2 = x - v2;
            vec3 iu, iv, xw, yw;
            if(any(greaterThan(period, vec2(0.0)))) {
                xw = vec3(v0.x, v1.x, v2.x);
                yw = vec3(v0.y, v1.y, v2.y);
                if(period.x > 0.0)
                    xw = mod(vec3(v0.x, v1.x, v2.x), period.x);
                if(period.y > 0.0)
                    yw = mod(vec3(v0.y, v1.y, v2.y), period.y);
                iu = floor(xw + 0.5*yw + 0.5); iv = floor(yw + 0.5);
            } else {
                iu = vec3(i0.x, i1.x, i2.x); iv = vec3(i0.y, i1.y, i2.y);
            }
            vec3 hash = mod(iu, 289.0);
            hash = mod((hash*51.0 + 2.0)*hash + iv, 289.0);
            hash = mod((hash*34.0 + 10.0)*hash, 289.0);
            vec3 psi = hash*0.07482 + alpha;
            vec3 gx = cos(psi); vec3 gy = sin(psi);
            vec2 g0 = vec2(gx.x, gy.x);
            vec2 g1 = vec2(gx.y, gy.y);
            vec2 g2 = vec2(gx.z, gy.z);
            vec3 w = 0.8 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2));
            w = max(w, 0.0); vec3 w2 = w*w; vec3 w4 = w2*w2;
            vec3 gdotx = vec3(dot(g0, x0), dot(g1, x1), dot(g2, x2));
            float n = dot(w4, gdotx);
            vec3 w3 = w2*w; vec3 dw = -8.0*w3*gdotx;
            vec2 dn0 = w4.x*g0 + dw.x*x0;
            vec2 dn1 = w4.y*g1 + dw.y*x1;
            vec2 dn2 = w4.z*g2 + dw.z*x2;
            gradient = 10.9*(dn0 + dn1 + dn2);
            return 10.9*n;
        }
        
        
        float aastep(float threshold, float value) {
          float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));
        //  float afwidth = fwidth(value);  // fwidth(v) is |dFdx(v)| + |dFdy(v)|
          return smoothstep(threshold-afwidth, threshold+afwidth, value);
        }
        
        varying vec2 st;
        uniform float time;
        
                void main(void) {
                    vec2 x, p, g, gtemp;
                    float n1, n2;
                    const float nscale = 5.0;
                    vec2 v = nscale * (st + 0.9) + vec2(0.0, -0.1*time);
                    p = vec2(0.0);
                    x = 2.0	* st;
                    n1 = psrdnoise(v, p, 0.1 * time, g);
                    g = vec2(-g.y, g.x); // Rotate
                    //n2 = psrdnoise(x*2.0+0.25*g, p,  time, gtemp);
                    gtemp = vec2(-gtemp.y, gtemp.x); // Rotate
                    g += 0.5 * gtemp;
                    n2 += 0.5*psrdnoise(x*2.0+0.2*g, p, 0.1 * time, gtemp);
                    const vec4 dark = vec4(0.38, 0.38, 0.38, 1.0);
                    const vec4 light = vec4(0.42, 0.42, 0.42, 1.0); 
                    gl_FragColor = mix(dark, light, aastep(0.0,n2));
                    //orange vec4(0.80, 0.51, 0.07, 1.0);
                }
	`),f.forEach(t),o=a(r,"SCRIPT",{id:!0,type:!0});var g=i(o);l=w(g,`attribute vec3 position;
            attribute vec2 texcoord;
        
            varying vec2 st;
        
            void main(void) {
                gl_Position = vec4(position, 1.0);
                st = texcoord;
            }`),g.forEach(t),r.forEach(t),x=z(v),d=a(v,"CANVAS",{class:!0,style:!0,width:!0,height:!0}),i(d).forEach(t),this.h()},h(){n(c,"id","shader-fs"),n(c,"type","x-shader/x-fragment"),n(o,"id","shader-vs"),n(o,"type","x-shader/x-vertex"),n(d,"class","dizzy svelte-rbgtnh"),pe(d,"border","none"),n(d,"width","1000px"),n(d,"height","1000px")},m(v,r){e(document.head,c),e(c,m),e(document.head,o),e(o,l),U(v,x,r),U(v,d,r)},p:q,i:q,o:q,d(v){t(c),t(o),v&&t(x),v&&t(d)}}}function ze(j){return ue(()=>{webGLStart()}),[]}class Te extends le{constructor(c){super(),xe(this,c,ze,Se,he,{})}}const Ce=""+new URL("../assets/logoCatchLess.6c1a81eb.png",import.meta.url).href;function De(j){let c,m,o,l,x,d,v,r,f,g,_,ae,H,p,K,D,N,L,X,J,u,E,O,F,Q,W,b,P,A,Y,Z,I,G,V,ee,k;return x=new Te({}),{c(){c=s("meta"),m=S(),o=s("section"),l=s("div"),ge(x.$$.fragment),d=S(),v=s("div"),r=s("div"),f=s("div"),g=s("div"),_=s("img"),H=S(),p=s("div"),K=y("Sport"),D=s("i"),N=y("Art"),L=s("i"),X=y("Culture"),J=S(),u=s("div"),E=s("div"),O=s("i"),F=s("p"),Q=y("THETEMPLEBORDEAUX"),W=S(),b=s("div"),P=s("i"),A=s("p"),Y=y("FACEBOOK"),Z=S(),I=s("div"),G=s("i"),V=s("p"),ee=y("01 23 45 67 89"),this.h()},l(h){const $=fe("svelte-1w6rf56",document.head);c=a($,"META",{name:!0,content:!0}),$.forEach(t),m=z(h),o=a(h,"SECTION",{class:!0});var ie=i(o);l=a(ie,"DIV",{class:!0});var M=i(l);me(x.$$.fragment,M),d=z(M),v=a(M,"DIV",{class:!0});var ce=i(v);r=a(ce,"DIV",{class:!0});var R=i(r);f=a(R,"DIV",{class:!0});var B=i(f);g=a(B,"DIV",{class:!0});var oe=i(g);_=a(oe,"IMG",{src:!0,alt:!0,class:!0}),oe.forEach(t),H=z(B),p=a(B,"DIV",{class:!0});var T=i(p);K=w(T,"Sport"),D=a(T,"I",{class:!0}),i(D).forEach(t),N=w(T,"Art"),L=a(T,"I",{class:!0}),i(L).forEach(t),X=w(T,"Culture"),T.forEach(t),B.forEach(t),J=z(R),u=a(R,"DIV",{class:!0});var C=i(u);E=a(C,"DIV",{class:!0});var te=i(E);O=a(te,"I",{class:!0}),i(O).forEach(t),F=a(te,"P",{});var ve=i(F);Q=w(ve,"THETEMPLEBORDEAUX"),ve.forEach(t),te.forEach(t),W=z(C),b=a(C,"DIV",{class:!0});var ne=i(b);P=a(ne,"I",{class:!0}),i(P).forEach(t),A=a(ne,"P",{});var re=i(A);Y=w(re,"FACEBOOK"),re.forEach(t),ne.forEach(t),Z=z(C),I=a(C,"DIV",{class:!0});var se=i(I);G=a(se,"I",{class:!0}),i(G).forEach(t),V=a(se,"P",{});var de=i(V);ee=w(de,"01 23 45 67 89"),de.forEach(t),se.forEach(t),C.forEach(t),R.forEach(t),ce.forEach(t),M.forEach(t),ie.forEach(t),this.h()},h(){document.title="The Temple ⭐ Accueil",n(c,"name","description"),n(c,"content","Svelte demo app"),ye(_.src,ae=Ce)||n(_,"src",ae),n(_,"alt","Logo"),n(_,"class","animate-fade relative object-contain mx-auto w-96 h-96 md:w-[500px] md:h-[500px]"),n(g,"class","h-2/3 m:h-5/6 flex justify-center"),n(D,"class","lni lni-star-fill text-xl md:text-4xl mx-6"),n(L,"class","lni lni-star-fill text-xl md:text-4xl mx-6"),n(p,"class","h-1/6 md:h-1/6 flex justify-center text-white items-center font-templeslim text-2xl md:text-4xl mx-6xl "),n(f,"class","md:h-5/6 h-4/6 mt-0"),n(O,"class","lni lni-instagram"),n(E,"class","h-2/6 text-white flex space-x-4 items-center justify-center"),n(P,"class","lni lni-facebook"),n(b,"class","h-2/6 text-white flex space-x-4 items-center justify-center"),n(G,"class","lni lni-phone"),n(I,"class","h-2/6 text-white flex space-x-4 items-center justify-center"),n(u,"class","md:h-1/6 h-2/6 flex flex-col md:flex-row justify-around text-center font-templeband text-3xl xl:text-5xl"),n(r,"class","flex justify-center h-full flex-col"),n(v,"class","filigrane  svelte-1fok9us"),n(l,"class","wrapper bg-black svelte-1fok9us"),n(o,"class","h-[93vh]")},m(h,$){e(document.head,c),U(h,m,$),U(h,o,$),e(o,l),we(x,l,null),e(l,d),e(l,v),e(v,r),e(r,f),e(f,g),e(g,_),e(f,H),e(f,p),e(p,K),e(p,D),e(p,N),e(p,L),e(p,X),e(r,J),e(r,u),e(u,E),e(E,O),e(E,F),e(F,Q),e(u,W),e(u,b),e(b,P),e(b,A),e(A,Y),e(u,Z),e(u,I),e(I,G),e(I,V),e(V,ee),k=!0},p:q,i(h){k||(_e(x.$$.fragment,h),k=!0)},o(h){Ee(x.$$.fragment,h),k=!1},d(h){t(c),h&&t(m),h&&t(o),be(x)}}}class Pe extends le{constructor(c){super(),xe(this,c,null,De,he,{})}}export{Pe as component,Fe as universal};
