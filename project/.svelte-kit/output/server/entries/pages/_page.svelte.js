import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../chunks/index.js";
/* empty css                                                  */const css$1 = {
  code: ".dizzy.svelte-rbgtnh{display:block;position:absolute;z-index:0;width:100%;height:100%}",
  map: null
};
const DizzyBg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-sa0qk9_START --><script id="shader-fs" type="x-shader/x-fragment">#ifdef GL_ES
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
	<\/script><script id="shader-vs" type="x-shader/x-vertex">attribute vec3 position;
            attribute vec2 texcoord;
        
            varying vec2 st;
        
            void main(void) {
                gl_Position = vec4(position, 1.0);
                st = texcoord;
            }
	<\/script><!-- HEAD_svelte-sa0qk9_END -->`, ""}

<canvas class="dizzy svelte-rbgtnh" style="border: none;" width="1000px" height="1000px"></canvas>`;
});
const logoCatchLess = "/templefront/_app/immutable/assets/logoCatchLess.6c1a81eb.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1fok9us{position:relative;min-height:100%;min-width:100%;height:100%;width:100%}.filigrane.svelte-1fok9us{background:rgb(42, 42, 42);background:radial-gradient(at center 35%, rgb(42, 42, 42) 30%, rgba(0, 0, 0, 0.65) 70%);position:relative;height:100%;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1w6rf56_START -->${$$result.title = `<title>The Temple ⭐ Accueil</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-1w6rf56_END -->`, ""}

<section class="h-[93vh]"><div class="wrapper bg-black svelte-1fok9us">${validate_component(DizzyBg, "DizzyBg").$$render($$result, {}, {}, {})}
		<div class="filigrane  svelte-1fok9us"><div class="flex justify-center h-full flex-col"><div class="md:h-5/6 h-4/6 mt-0"><div class="h-2/3 m:h-5/6 flex justify-center"><img${add_attribute("src", logoCatchLess, 0)} alt="Logo" class="animate-fade relative object-contain mx-auto w-96 h-96 md:w-[500px] md:h-[500px]"></div>

					
					<div class="h-1/6 md:h-1/6 flex justify-center text-white items-center font-templeslim text-2xl md:text-4xl mx-6xl ">Sport<i class="lni lni-star-fill text-xl md:text-4xl mx-6"></i>Art<i class="lni lni-star-fill text-xl md:text-4xl mx-6"></i>Culture</div></div>
				<div class="md:h-1/6 h-2/6 flex flex-col md:flex-row justify-around text-center font-templeband text-3xl xl:text-5xl">
					<div class="h-2/6 text-white flex space-x-4 items-center justify-center"><i class="lni lni-instagram"></i><p>THETEMPLEBORDEAUX</p></div>
					<div class="h-2/6 text-white flex space-x-4 items-center justify-center"><i class="lni lni-facebook"></i><p>FACEBOOK</p></div>
					<div class="h-2/6 text-white flex space-x-4 items-center justify-center"><i class="lni lni-phone"></i><p>01 23 45 67 89</p></div></div></div></div></div>
</section>`;
});
export {
  Page as default
};
