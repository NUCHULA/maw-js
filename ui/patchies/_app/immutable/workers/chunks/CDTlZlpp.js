const $={charColor:"prevCharColorBuffer",char:"prevCharBuffer",cellColor:"prevCellColorBuffer"},k={charColor:"_charColor",char:"_char",cellColor:"_cellColor"},ue="src",fe="coord",pe="color",de="combine",me="combineCoord",ee=new Set(["combine","combineCoord"]),Q=new Set(["coord","combineCoord"]),he={[ue]:{returnType:"vec4",args:[{type:"vec2",name:"_st"}]},[fe]:{returnType:"vec2",args:[{type:"vec2",name:"_st"}]},[pe]:{returnType:"vec4",args:[{type:"vec4",name:"_c0"}]},[de]:{returnType:"vec4",args:[{type:"vec4",name:"_c0"},{type:"vec4",name:"_c1"}]},[me]:{returnType:"vec2",args:[{type:"vec2",name:"_st"},{type:"vec4",name:"_c0"}]}};function ye(t){const e=he[t.type],r=[...e.args,...t.inputs.map(n=>({type:n.type,name:n.name}))].map(n=>`${n.type} ${n.name}`).join(", "),o=`
${e.returnType} ${t.name}(${r}) {
${t.glsl}
}`;return{...t,glslFunction:o}}class ge{_transforms=new Map;_processedCache=new Map;register(e){this._transforms.has(e.name)&&console.warn(`[TransformRegistry] Overwriting existing transform: ${e.name}`),this._transforms.set(e.name,e),this._processedCache.delete(e.name)}registerMany(e){for(const r of e)this.register(r)}get(e){return this._transforms.get(e)}getProcessed(e){let r=this._processedCache.get(e);if(!r){const o=this._transforms.get(e);o&&(r=ye(o),this._processedCache.set(e,r))}return r}has(e){return this._transforms.has(e)}getByType(e){return Array.from(this._transforms.values()).filter(r=>r.type===e)}getNames(){return Array.from(this._transforms.keys())}getAll(){return Array.from(this._transforms.values())}getSourceTransforms(){return this.getByType("src")}remove(e){return this._processedCache.delete(e),this._transforms.delete(e)}clear(){this._transforms.clear(),this._processedCache.clear()}get size(){return this._transforms.size}}const R=new ge,W=new Set(["src"]);class _e{_generatedFunctions={};_synthSourceClass=null;setSynthSourceClass(e){this._synthSourceClass=e}injectMethods(e){const r=R.getAll();for(const o of r)this._injectMethod(e,o)}_injectMethod(e,r){const o=this._synthSourceClass,{name:n,inputs:a,type:i}=r,u=e;if(ee.has(i))u[n]=function(p,...d){let s=p;if(o&&!(p instanceof o)){const c=new o,l=typeof p=="number"?[p,p,p,null]:[p,null,null,null];c.addTransform("solid",l),s=c}return this.addCombineTransform(n,s,z(a,d))};else{const p=this;u[n]=function(...d){return d=p._expandColorArgs(n,d),this.addTransform(n,z(a,d))}}}_expandColorArgs(e,r){if((e==="solid"||e==="color")&&r.length===1&&typeof r[0]=="number"){const o=r[0];return[o,o,o]}return r}generateStandaloneFunctions(){if(!this._synthSourceClass)throw new Error("[TransformFactory] SynthSource class not set. Call setSynthSourceClass first.");const e={},r=R.getAll(),o=this._synthSourceClass;for(const n of r)if(W.has(n.type)){const{name:a,inputs:i}=n;e[a]=(...u)=>{const p=new o;return u=this._expandColorArgs(a,u),p.addTransform(a,z(i,u))}}return this._generatedFunctions=e,e}getGeneratedFunctions(){return this._generatedFunctions}addTransform(e,r){if(R.register(e),r&&this._injectMethod(r,e),W.has(e.type)&&this._synthSourceClass){const o=this._synthSourceClass,{name:n,inputs:a}=e;this._generatedFunctions[n]=(...i)=>{const u=new o;return i=this._expandColorArgs(n,i),u.addTransform(n,z(a,i))}}}}function z(t,e){return t.map((r,o)=>e[o]??r.default)}const N=new _e,ve={name:"osc",type:"src",inputs:[{name:"frequency",type:"float",default:60},{name:"sync",type:"float",default:.1},{name:"offset",type:"float",default:0}],glsl:`
	vec2 st = _st;
	float r = sin((st.x - offset/frequency + time*sync) * frequency) * 0.5 + 0.5;
	float g = sin((st.x + time*sync) * frequency) * 0.5 + 0.5;
	float b = sin((st.x + offset/frequency + time*sync) * frequency) * 0.5 + 0.5;
	return vec4(r, g, b, 1.0);
`,description:"Generate oscillating color pattern"},xe={name:"noise",type:"src",inputs:[{name:"scale",type:"float",default:10},{name:"offset",type:"float",default:.1}],glsl:`
	return vec4(vec3(_noise(vec3(_st * scale, offset * time))), 1.0);
`,description:"Generate noise pattern"},Ce={name:"plasma",type:"src",inputs:[{name:"scale",type:"float",default:10},{name:"speed",type:"float",default:.5},{name:"phase",type:"float",default:0},{name:"contrast",type:"float",default:1}],glsl:`
	float t = time * speed + phase;
	float v = 0.0;
	v += sin((_st.x * scale) + t);
	v += sin((_st.y * scale * 1.1) + t * 1.2);
	v += sin(((_st.x + _st.y) * scale * 0.7) + t * 0.8);
	v = v / 3.0;
	v = v * 0.5 + 0.5;
	v = clamp((v - 0.5) * contrast + 0.5, 0.0, 1.0);
	return vec4(vec3(v), 1.0);
`,description:"Generate plasma-like sine field"},be={name:"moire",type:"src",inputs:[{name:"freqA",type:"float",default:20},{name:"freqB",type:"float",default:21},{name:"angleA",type:"float",default:0},{name:"angleB",type:"float",default:1.5708},{name:"speed",type:"float",default:.1},{name:"phase",type:"float",default:0}],glsl:`
	float t = time * speed + phase;
	vec2 p = _st - vec2(0.5);
	vec2 dirA = vec2(cos(angleA), sin(angleA));
	vec2 dirB = vec2(cos(angleB), sin(angleB));
	float a = sin(dot(p, dirA) * freqA + t);
	float b = sin(dot(p, dirB) * freqB - t * 0.7);
	float v = a * b;
	v = v * 0.5 + 0.5;
	return vec4(vec3(v), 1.0);
`,description:"Generate moire interference patterns"},Se={name:"voronoi",type:"src",inputs:[{name:"scale",type:"float",default:5},{name:"speed",type:"float",default:.3},{name:"blending",type:"float",default:.3}],glsl:`
	vec3 color = vec3(0.0);
	vec2 st = _st * scale;
	vec2 i_st = floor(st);
	vec2 f_st = fract(st);
	float m_dist = 10.0;
	vec2 m_point;
	for (int j = -1; j <= 1; j++) {
		for (int i = -1; i <= 1; i++) {
			vec2 neighbor = vec2(float(i), float(j));
			vec2 p = i_st + neighbor;
		// Apply seed offset to hash function for deterministic randomness
			// Use fract() to avoid precision issues with large seeds
			vec2 seedOffset = vec2(fract(_seed * 0.1271) * 1000.0, fract(_seed * 0.3117) * 1000.0);
			vec2 point = fract(sin(vec2(dot(p + seedOffset, vec2(127.1, 311.7)), dot(p + seedOffset, vec2(269.5, 183.3)))) * 43758.5453);
			point = 0.5 + 0.5 * sin(time * speed + 6.2831 * point);
			vec2 diff = neighbor + point - f_st;
			float dist = length(diff);
			if (dist < m_dist) {
				m_dist = dist;
				m_point = point;
			}
		}
	}
	color += dot(m_point, vec2(0.3, 0.6));
	color *= 1.0 - blending * m_dist;
	return vec4(color, 1.0);
`,description:"Generate voronoi pattern"},we={name:"gradient",type:"src",inputs:[{name:"speed",type:"float",default:0}],glsl:`
	return vec4(_st, sin(time * speed), 1.0);
`,description:"Generate gradient pattern"},$e={name:"shape",type:"src",inputs:[{name:"sides",type:"float",default:3},{name:"radius",type:"float",default:.3},{name:"smoothing",type:"float",default:.01}],glsl:`
	vec2 st = _st * 2.0 - 1.0;
	float a = atan(st.x, st.y) + 3.1416;
	float r = (2.0 * 3.1416) / sides;
	float d = cos(floor(0.5 + a/r) * r - a) * length(st);
	return vec4(vec3(1.0 - smoothstep(radius, radius + smoothing + 0.0000001, d)), 1.0);
`,description:"Generate polygon shape"},Me={name:"solid",type:"src",inputs:[{name:"r",type:"float",default:0},{name:"g",type:"float",default:0},{name:"b",type:"float",default:0},{name:"a",type:"float",default:1}],glsl:`
	return vec4(r, g, b, a);
`,description:"Generate solid color"},Te={name:"src",type:"src",inputs:[],glsl:`
	return texture(${$.charColor}, fract(_st));
`,description:"Sample the previous frame for feedback effects. Context-aware: automatically samples the appropriate texture based on where it is used (char, charColor, or cellColor context)."},Fe={name:"srcTexture",type:"src",inputs:[],glsl:`
	// Placeholder - actual texture sampling is handled dynamically per TextmodeSource
	return texture(u_textmodeSource0, fract(_st));
`,description:"Sample from a TextmodeSource (image/video). Context-aware: the actual sampler uniform is determined at compile time based on the source reference."},Pe=[ve,xe,Ce,be,Se,we,$e,Me,Te,Fe];function te(t){const e=t==="x"?"scrollX":"scrollY";return{name:e,type:"coord",inputs:[{name:e,type:"float",default:.5},{name:"speed",type:"float",default:0}],glsl:`
	vec2 st = _st;
	st.${t} += ${e} + time * speed;
	return fract(st);
`,description:`Scroll ${t.toUpperCase()} coordinate`}}function re(t){return{name:t==="x"?"repeatX":"repeatY",type:"coord",inputs:[{name:"reps",type:"float",default:3},{name:"offset",type:"float",default:0}],glsl:`
	vec2 st = _st * vec2(${t==="x"?"reps, 1.0":"1.0, reps"});
	st.${t==="x"?"y":"x"} += step(1.0, mod(st.${t}, 2.0)) * offset;
	return fract(st);
`,description:"Repeat pattern "+(t==="x"?"horizontally":"vertically")}}const ke={name:"rotate",type:"coord",inputs:[{name:"angle",type:"float",default:10},{name:"speed",type:"float",default:0}],glsl:`
	vec2 xy = _st - vec2(0.5);
	float ang = angle + speed * time;
	xy = mat2(cos(ang), -sin(ang), sin(ang), cos(ang)) * xy;
	xy += 0.5;
	return xy;
`,description:"Rotate coordinates"},Ie={name:"scale",type:"coord",inputs:[{name:"amount",type:"float",default:1.5},{name:"xMult",type:"float",default:1},{name:"yMult",type:"float",default:1},{name:"offsetX",type:"float",default:.5},{name:"offsetY",type:"float",default:.5}],glsl:`
	vec2 xy = _st - vec2(offsetX, offsetY);
	xy *= (1.0 / vec2(amount * xMult, amount * yMult));
	xy += vec2(offsetX, offsetY);
	return xy;
`,description:"Scale coordinates"},Ae={name:"scroll",type:"coord",inputs:[{name:"scrollX",type:"float",default:.5},{name:"scrollY",type:"float",default:.5},{name:"speedX",type:"float",default:0},{name:"speedY",type:"float",default:0}],glsl:`
	vec2 st = _st;
	st.x += scrollX + time * speedX;
	st.y += scrollY + time * speedY;
	return fract(st);
`,description:"Scroll coordinates"},Le=te("x"),Ue=te("y"),Re={name:"pixelate",type:"coord",inputs:[{name:"pixelX",type:"float",default:20},{name:"pixelY",type:"float",default:20}],glsl:`
	vec2 xy = vec2(pixelX, pixelY);
	return (floor(_st * xy) + 0.5) / xy;
`,description:"Pixelate coordinates"},ze={name:"repeat",type:"coord",inputs:[{name:"repeatX",type:"float",default:3},{name:"repeatY",type:"float",default:3},{name:"offsetX",type:"float",default:0},{name:"offsetY",type:"float",default:0}],glsl:`
	vec2 st = _st * vec2(repeatX, repeatY);
	st.x += step(1.0, mod(st.y, 2.0)) * offsetX;
	st.y += step(1.0, mod(st.x, 2.0)) * offsetY;
	return fract(st);
`,description:"Repeat pattern"},De=re("x"),je=re("y"),Ve={name:"kaleid",type:"coord",inputs:[{name:"nSides",type:"float",default:4}],glsl:`
	vec2 st = _st;
	st -= 0.5;
	float r = length(st);
	float a = atan(st.y, st.x);
	float pi = 2.0 * 3.1416;
	a = mod(a, pi / nSides);
	a = abs(a - pi / nSides / 2.0);
	return r * vec2(cos(a), sin(a));
`,description:"Kaleidoscope effect"},Ye={name:"polar",type:"coord",inputs:[{name:"angle",type:"float",default:0},{name:"radius",type:"float",default:1}],glsl:`
	vec2 st = _st - vec2(0.5);
	float r = length(st) * radius;
	float a = atan(st.y, st.x) + angle;
	a = a / (2.0 * 3.1416);
	return vec2(fract(a), r);
`,description:"Convert to polar coordinates"},Xe={name:"twirl",type:"coord",inputs:[{name:"amount",type:"float",default:2},{name:"radius",type:"float",default:.5},{name:"centerX",type:"float",default:.5},{name:"centerY",type:"float",default:.5}],glsl:`
	vec2 center = vec2(centerX, centerY);
	vec2 p = _st - center;
	float r = length(p);
	float safeRadius = max(radius, 0.00001);
	float t = clamp((safeRadius - r) / safeRadius, 0.0, 1.0);
	float angle = amount * t * t;
	float s = sin(angle);
	float c = cos(angle);
	p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
	return p + center;
`,description:"Twirl distortion with radial falloff"},Be={name:"swirl",type:"coord",inputs:[{name:"amount",type:"float",default:4},{name:"centerX",type:"float",default:.5},{name:"centerY",type:"float",default:.5}],glsl:`
	vec2 center = vec2(centerX, centerY);
	vec2 p = _st - center;
	float r = length(p);
	float angle = amount * r;
	float s = sin(angle);
	float c = cos(angle);
	p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
	return p + center;
`,description:"Swirl distortion around a center"},Oe={name:"mirror",type:"coord",inputs:[{name:"mirrorX",type:"float",default:1},{name:"mirrorY",type:"float",default:1}],glsl:`
	vec2 m = abs(fract(_st * 2.0) - 1.0);
	vec2 mixAmt = clamp(vec2(mirrorX, mirrorY), 0.0, 1.0);
	return mix(_st, m, mixAmt);
`,description:"Mirror coordinates across X and/or Y axes"},Ne={name:"shear",type:"coord",inputs:[{name:"x",type:"float",default:0},{name:"y",type:"float",default:0},{name:"centerX",type:"float",default:.5},{name:"centerY",type:"float",default:.5}],glsl:`
	vec2 center = vec2(centerX, centerY);
	vec2 p = _st - center;
	p = vec2(p.x + y * p.y, p.y + x * p.x);
	return p + center;
`,description:"Shear coordinates along X and Y"},qe={name:"barrel",type:"coord",inputs:[{name:"amount",type:"float",default:.5},{name:"centerX",type:"float",default:.5},{name:"centerY",type:"float",default:.5}],glsl:`
	vec2 center = vec2(centerX, centerY);
	vec2 p = _st - center;
	float r2 = dot(p, p);
	p *= 1.0 + amount * r2;
	return p + center;
`,description:"Barrel distortion (bulge outward)"},Ee={name:"pinch",type:"coord",inputs:[{name:"amount",type:"float",default:.5},{name:"centerX",type:"float",default:.5},{name:"centerY",type:"float",default:.5}],glsl:`
	vec2 center = vec2(centerX, centerY);
	vec2 p = _st - center;
	float r2 = dot(p, p);
	p *= 1.0 / (1.0 + amount * r2);
	return p + center;
`,description:"Pinch distortion (pull inward)"},Ge={name:"fisheye",type:"coord",inputs:[{name:"amount",type:"float",default:1},{name:"centerX",type:"float",default:.5},{name:"centerY",type:"float",default:.5}],glsl:`
	vec2 center = vec2(centerX, centerY);
	vec2 p = _st - center;
	float r = length(p);
	if (r > 0.0) {
		float k = max(amount, 0.00001);
		float r2 = atan(r * k) / atan(k);
		p = p / r * r2;
	}
	return p + center;
`,description:"Fisheye lens distortion"},He=[ke,Ie,Ae,Le,Ue,Re,ze,De,je,Ve,Ye,Xe,Be,Oe,Ne,qe,Ee,Ge],Ke=[{name:"scale",type:"float",default:1},{name:"offset",type:"float",default:0}];function G(t){return{name:t,type:"color",inputs:Ke,glsl:`
	return vec4(_c0.${t} * scale + offset);
`,description:`Extract ${t==="r"?"red":t==="g"?"green":"blue"} channel`}}const Qe={name:"brightness",type:"color",inputs:[{name:"amount",type:"float",default:.4}],glsl:`
	return vec4(_c0.rgb + vec3(amount), _c0.a);
`,description:"Adjust brightness"},We={name:"contrast",type:"color",inputs:[{name:"amount",type:"float",default:1.6}],glsl:`
	vec4 c = (_c0 - vec4(0.5)) * vec4(amount) + vec4(0.5);
	return vec4(c.rgb, _c0.a);
`,description:"Adjust contrast"},Je={name:"invert",type:"color",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	return vec4((1.0 - _c0.rgb) * amount + _c0.rgb * (1.0 - amount), _c0.a);
`,description:"Invert colors"},Ze={name:"saturate",type:"color",inputs:[{name:"amount",type:"float",default:2}],glsl:`
	vec3 intensity = vec3(_luminance(_c0.rgb));
	return vec4(mix(intensity, _c0.rgb, amount), _c0.a);
`,description:"Adjust saturation"},et={name:"hue",type:"color",inputs:[{name:"hue",type:"float",default:.4}],glsl:`
	vec3 c = _rgbToHsv(_c0.rgb);
	c.r += hue;
	return vec4(_hsvToRgb(c), _c0.a);
`,description:"Shift hue"},tt={name:"colorama",type:"color",inputs:[{name:"amount",type:"float",default:.005}],glsl:`
	vec3 c = _rgbToHsv(_c0.rgb);
	c += vec3(amount);
	c = _hsvToRgb(c);
	c = fract(c);
	return vec4(c, _c0.a);
`,description:"Color cycle effect"},rt={name:"posterize",type:"color",inputs:[{name:"bins",type:"float",default:3},{name:"gamma",type:"float",default:.6}],glsl:`
	vec4 c2 = pow(_c0, vec4(gamma));
	c2 *= vec4(bins);
	c2 = floor(c2);
	c2 /= vec4(bins);
	c2 = pow(c2, vec4(1.0 / gamma));
	return vec4(c2.xyz, _c0.a);
`,description:"Posterize colors"},ot={name:"luma",type:"color",inputs:[{name:"threshold",type:"float",default:.5},{name:"tolerance",type:"float",default:.1}],glsl:`
	float a = _smoothThreshold(_luminance(_c0.rgb), threshold, tolerance);
	return vec4(_c0.rgb * a, a);
`,description:"Luma key"},nt={name:"thresh",type:"color",inputs:[{name:"threshold",type:"float",default:.5},{name:"tolerance",type:"float",default:.04}],glsl:`
	return vec4(vec3(_smoothThreshold(_luminance(_c0.rgb), threshold, tolerance)), _c0.a);
`,description:"Threshold"},at={name:"color",type:"color",inputs:[{name:"r",type:"float",default:1},{name:"g",type:"float",default:1},{name:"b",type:"float",default:1},{name:"a",type:"float",default:1}],glsl:`
	vec4 c = vec4(r, g, b, a);
	vec4 pos = step(0.0, c);
	return vec4(mix((1.0 - _c0.rgb) * abs(c.rgb), c.rgb * _c0.rgb, pos.rgb), c.a * _c0.a);
`,description:"Multiply by color"},st=G("r"),ct=G("g"),it=G("b"),lt={name:"shift",type:"color",inputs:[{name:"r",type:"float",default:.5},{name:"g",type:"float",default:0},{name:"b",type:"float",default:0},{name:"a",type:"float",default:0}],glsl:`
	vec4 c2 = vec4(_c0);
	c2.r += fract(r);
	c2.g += fract(g);
	c2.b += fract(b);
	c2.a += fract(a);
	return vec4(c2.rgba);
`,description:"Shift color channels by adding offset values"},ut={name:"gamma",type:"color",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	return vec4(pow(max(vec3(0.0), _c0.rgb), vec3(1.0 / amount)), _c0.a);
`,description:"Apply gamma correction"},ft={name:"levels",type:"color",inputs:[{name:"inMin",type:"float",default:0},{name:"inMax",type:"float",default:1},{name:"outMin",type:"float",default:0},{name:"outMax",type:"float",default:1},{name:"gamma",type:"float",default:1}],glsl:`
	vec3 v = clamp((_c0.rgb - vec3(inMin)) / (vec3(inMax - inMin) + 0.0000001), 0.0, 1.0);
	v = pow(v, vec3(1.0 / gamma));
	v = mix(vec3(outMin), vec3(outMax), v);
	return vec4(v, _c0.a);
`,description:"Adjust input/output levels and gamma"},pt={name:"clamp",type:"color",inputs:[{name:"min",type:"float",default:0},{name:"max",type:"float",default:1}],glsl:`
	return vec4(clamp(_c0.rgb, vec3(min), vec3(max)), _c0.a);
`,description:"Clamp color values to a range"},dt={name:"seed",type:"color",inputs:[{name:"value",type:"float",default:0}],glsl:`
	// Set seed for subsequent noise/voronoi calls in this chain
	_seed = value;
	return _c0;
`,description:"Set seed for deterministic randomness in subsequent noise operations"},mt=[Qe,We,Je,Ze,et,tt,rt,ot,nt,at,st,ct,it,lt,ut,ft,pt,dt],M=`
	vec3 outRgb = mix(_c0.rgb, result, amount);
	float outA = mix(_c0.a, _c1.a, amount);
	return vec4(outRgb, outA);
`,ht={name:"add",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	return (_c0 + _c1) * amount + _c0 * (1.0 - amount);
`,description:"Add another source"},yt={name:"sub",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	return (_c0 - _c1) * amount + _c0 * (1.0 - amount);
`,description:"Subtract another source"},gt={name:"mult",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	return _c0 * (1.0 - amount) + (_c0 * _c1) * amount;
`,description:"Multiply with another source"},_t={name:"blend",type:"combine",inputs:[{name:"amount",type:"float",default:.5}],glsl:`
	return _c0 * (1.0 - amount) + _c1 * amount;
`,description:"Blend with another source"},vt={name:"diff",type:"combine",inputs:[],glsl:`
	return vec4(abs(_c0.rgb - _c1.rgb), max(_c0.a, _c1.a));
`,description:"Difference with another source"},xt={name:"layer",type:"combine",inputs:[],glsl:`
	return vec4(mix(_c0.rgb, _c1.rgb, _c1.a), clamp(_c0.a + _c1.a, 0.0, 1.0));
`,description:"Layer another source on top"},Ct={name:"mask",type:"combine",inputs:[],glsl:`
	float a = _luminance(_c1.rgb);
	return vec4(_c0.rgb * a, a * _c0.a);
`,description:"Mask with another source"},bt={name:"screen",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	vec3 result = 1.0 - (1.0 - _c0.rgb) * (1.0 - _c1.rgb);
${M}
`,description:"Screen blend with another source"},St={name:"overlay",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	vec3 mult = 2.0 * _c0.rgb * _c1.rgb;
	vec3 screen = 1.0 - 2.0 * (1.0 - _c0.rgb) * (1.0 - _c1.rgb);
	vec3 result = mix(mult, screen, step(0.5, _c0.rgb));
${M}
`,description:"Overlay blend with another source"},wt={name:"softlight",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	vec3 result = (1.0 - 2.0 * _c1.rgb) * _c0.rgb * _c0.rgb + 2.0 * _c1.rgb * _c0.rgb;
${M}
`,description:"Soft light blend with another source"},$t={name:"hardlight",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	vec3 mult = 2.0 * _c0.rgb * _c1.rgb;
	vec3 screen = 1.0 - 2.0 * (1.0 - _c0.rgb) * (1.0 - _c1.rgb);
	vec3 result = mix(mult, screen, step(0.5, _c1.rgb));
${M}
`,description:"Hard light blend with another source"},Mt={name:"dodge",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	vec3 result = _c0.rgb / max(vec3(0.00001), 1.0 - _c1.rgb);
	result = clamp(result, 0.0, 1.0);
${M}
`,description:"Color dodge blend with another source"},Tt={name:"burn",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	vec3 result = 1.0 - (1.0 - _c0.rgb) / max(vec3(0.00001), _c1.rgb);
	result = clamp(result, 0.0, 1.0);
${M}
`,description:"Color burn blend with another source"},Ft={name:"lighten",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	vec3 result = max(_c0.rgb, _c1.rgb);
${M}
`,description:"Lighten blend with another source"},Pt={name:"darken",type:"combine",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	vec3 result = min(_c0.rgb, _c1.rgb);
${M}
`,description:"Darken blend with another source"},kt=[ht,yt,gt,_t,vt,xt,Ct,bt,St,wt,$t,Mt,Tt,Ft,Pt];function oe(t){const e=t==="x"?"scrollX":"scrollY";return{name:t==="x"?"modulateScrollX":"modulateScrollY",type:"combineCoord",inputs:[{name:e,type:"float",default:.5},{name:"speed",type:"float",default:0}],glsl:`
	vec2 st = _st;
	st.${t} += _c0.r * ${e} + time * speed;
	return fract(st);
`,description:`Modulate ${t.toUpperCase()} scroll with another source`}}function ne(t){return{name:t==="x"?"modulateRepeatX":"modulateRepeatY",type:"combineCoord",inputs:[{name:"reps",type:"float",default:3},{name:"offset",type:"float",default:.5}],glsl:`
	vec2 st = _st * vec2(${t==="x"?"reps, 1.0":"1.0, reps"});
	st.${t==="x"?"y":"x"} += step(1.0, mod(st.${t}, 2.0)) + _c0.r * offset;
	return fract(st);
`,description:`Modulate ${t.toUpperCase()} repeat with another source`}}const It={name:"modulate",type:"combineCoord",inputs:[{name:"amount",type:"float",default:.1}],glsl:`
	return _st + _c0.xy * amount;
`,description:"Modulate coordinates with another source"},At={name:"modulateScale",type:"combineCoord",inputs:[{name:"multiple",type:"float",default:1},{name:"offset",type:"float",default:1}],glsl:`
	vec2 xy = _st - vec2(0.5);
	xy *= (1.0 / vec2(offset + multiple * _c0.r, offset + multiple * _c0.g));
	xy += vec2(0.5);
	return xy;
`,description:"Modulate scale with another source"},Lt={name:"modulateRotate",type:"combineCoord",inputs:[{name:"multiple",type:"float",default:1},{name:"offset",type:"float",default:0}],glsl:`
	vec2 xy = _st - vec2(0.5);
	float angle = offset + _c0.x * multiple;
	xy = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * xy;
	xy += 0.5;
	return xy;
`,description:"Modulate rotation with another source"},Ut={name:"modulatePixelate",type:"combineCoord",inputs:[{name:"multiple",type:"float",default:10},{name:"offset",type:"float",default:3}],glsl:`
	vec2 xy = vec2(offset + _c0.x * multiple, offset + _c0.y * multiple);
	return (floor(_st * xy) + 0.5) / xy;
`,description:"Modulate pixelation with another source"},Rt={name:"modulateKaleid",type:"combineCoord",inputs:[{name:"nSides",type:"float",default:4}],glsl:`
	vec2 st = _st - 0.5;
	float r = length(st);
	float a = atan(st.y, st.x);
	float pi = 2.0 * 3.1416;
	a = mod(a, pi / nSides);
	a = abs(a - pi / nSides / 2.0);
	return (_c0.r + r) * vec2(cos(a), sin(a));
`,description:"Modulate kaleidoscope with another source"},zt=oe("x"),Dt=oe("y"),jt={name:"modulateRepeat",type:"combineCoord",inputs:[{name:"repeatX",type:"float",default:3},{name:"repeatY",type:"float",default:3},{name:"offsetX",type:"float",default:.5},{name:"offsetY",type:"float",default:.5}],glsl:`
	vec2 st = _st * vec2(repeatX, repeatY);
	st.x += step(1.0, mod(st.y, 2.0)) + _c0.r * offsetX;
	st.y += step(1.0, mod(st.x, 2.0)) + _c0.g * offsetY;
	return fract(st);
`,description:"Modulate repeat pattern with another source"},Vt=ne("x"),Yt=ne("y"),Xt={name:"modulateHue",type:"combineCoord",inputs:[{name:"amount",type:"float",default:1}],glsl:`
	return _st + (vec2(_c0.g - _c0.r, _c0.b - _c0.g) * amount * 1.0 / u_resolution);
`,description:"Modulate coordinates based on hue differences"},Bt=[It,At,Lt,Ut,Rt,zt,Dt,jt,Vt,Yt,Xt],Ot=[...Pe,...He,...mt,...kt,...Bt];class L{_transforms;constructor(e){this._transforms=e}static empty(){return new L([])}static from(e){return new L([...e])}get transforms(){return this._transforms}push(e){this._transforms.push(e)}get length(){return this._transforms.length}get isEmpty(){return this._transforms.length===0}append(e){return new L([...this._transforms,e])}get(e){return this._transforms[e]}[Symbol.iterator](){return this._transforms[Symbol.iterator]()}}class v{_chain;_charMapping;_nestedSources;_externalLayerRefs;_charColorSource;_cellColorSource;_charSource;_textmodeSourceRefs;constructor(e){this._chain=e?.chain??L.empty(),this._charMapping=e?.charMapping,this._charColorSource=e?.charColorSource,this._cellColorSource=e?.cellColorSource,this._charSource=e?.charSource,this._nestedSources=e?.nestedSources??new Map,this._externalLayerRefs=e?.externalLayerRefs??new Map,this._textmodeSourceRefs=e?.textmodeSourceRefs??new Map}addTransform(e,r){const o={name:e,userArgs:r};return this._chain.push(o),this}addCombineTransform(e,r,o){const n=this._chain.length;return this._nestedSources.set(n,r),this.addTransform(e,o)}addExternalLayerRef(e){const r=this._chain.length;return this._externalLayerRefs.set(r,e),this.addTransform("src",[])}addTextmodeSourceRef(e){const r=this._chain.length;return this._textmodeSourceRefs.set(r,e),this.addTransform("srcTexture",[])}charMap(e){if(e.length===0)return this._charMapping=void 0,this;const r=Array.from(e),o=[];for(const n of r)o.push(n.codePointAt(0)??32);return this._charMapping={chars:e,indices:o},this}_ensureSource(e,r,o,n){if(e instanceof v)return e;const a=new v,i=typeof e=="number"&&r===void 0&&o===void 0&&n===void 0?[e,e,e,null]:[e,r,o,n].map(u=>u===void 0?null:u);return a.addTransform("solid",i),a}charColor(e,r,o,n){return this._charColorSource=this._ensureSource(e,r,o,n),this}char(e){return this._charSource=e,this}cellColor(e,r,o,n){return this._cellColorSource=this._ensureSource(e,r,o,n),this}paint(e,r,o,n){const a=this._ensureSource(e,r,o,n);return this._charColorSource=a,this._cellColorSource=a,this}clone(){const e=new Map;for(const[n,a]of this._nestedSources)e.set(n,a.clone());const r=new Map;for(const[n,a]of this._externalLayerRefs)r.set(n,{...a});const o=new Map;for(const[n,a]of this._textmodeSourceRefs)o.set(n,{...a});return new v({chain:L.from(this._chain.transforms),charMapping:this._charMapping,charColorSource:this._charColorSource?.clone(),cellColorSource:this._cellColorSource?.clone(),charSource:this._charSource?.clone(),nestedSources:e,externalLayerRefs:r,textmodeSourceRefs:o})}get transforms(){return this._chain.transforms}get charMapping(){return this._charMapping}get charColorSource(){return this._charColorSource}get cellColorSource(){return this._cellColorSource}get charSource(){return this._charSource}get nestedSources(){return this._nestedSources}get externalLayerRefs(){return this._externalLayerRefs}get textmodeSourceRefs(){return this._textmodeSourceRefs}}const q={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t*t:(4-2*t)*t-1,easeInCubic:t=>t*t*t,easeOutCubic:t=>--t*t*t+1,easeInOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t*t*t*t,easeOutQuart:t=>1- --t*t*t*t,easeInOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>1+--t*t*t*t*t,easeInOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,sin:t=>(1+Math.sin(Math.PI*t-Math.PI/2))/2};function J(t,e){return(t%e+e)%e}function Nt(t,e,r,o,n){return e===r?(o+n)/2:(t-e)*(n-o)/(r-e)+o}function qt(){"fast"in Array.prototype||(Object.defineProperty(Array.prototype,"fast",{value:function(t=1){return this._speed=t,this},writable:!0,configurable:!0,enumerable:!1}),Object.defineProperty(Array.prototype,"smooth",{value:function(t=1){return this._smooth=t,this},writable:!0,configurable:!0,enumerable:!1}),Object.defineProperty(Array.prototype,"ease",{value:function(t="linear"){return typeof t=="function"?(this._smooth=1,this._ease=t):q[t]&&(this._smooth=1,this._ease=q[t]),this},writable:!0,configurable:!0,enumerable:!1}),Object.defineProperty(Array.prototype,"offset",{value:function(t=.5){return this._offset=t%1,this},writable:!0,configurable:!0,enumerable:!1}),Object.defineProperty(Array.prototype,"fit",{value:function(t=0,e=1){const r=Math.min(...this),o=Math.max(...this),n=this.map(a=>Nt(a,r,o,t,e));return n._speed=this._speed,n._smooth=this._smooth,n._ease=this._ease,n._offset=this._offset,n},writable:!0,configurable:!0,enumerable:!1}))}function Et(t,e){const r=t._speed??1,o=t._smooth??0;let n=e.time*r*(e.bpm/60)+(t._offset??0);if(o!==0){const a=t._ease??q.linear,i=n-o/2,u=Math.floor(i),p=J(u,t.length),d=(p+1)%t.length,s=t[p],c=t[d];return a(Math.min((i-u)/o,1))*(c-s)+s}return t[Math.floor(J(n,t.length))]}function Gt(t){return Array.isArray(t)&&t.length>0&&typeof t[0]=="number"}qt(),R.registerMany(Ot),N.setSynthSourceClass(v),N.injectMethods(v.prototype);const w=N.generateStandaloneFunctions(),b="textmode.synth.js";function E(t){return t==="char"||t==="cellColor"?t:"charColor"}function ae(t,e){const r=E(e);r==="char"?t.usesChar=!0:r==="cellColor"?t.usesCellColor=!0:t.usesCharColor=!0}class Ht{_usage={usesChar:!1,usesCharColor:!1,usesCellColor:!1};trackUsage(e){ae(this._usage,e)}reset(){this._usage.usesChar=!1,this._usage.usesCharColor=!1,this._usage.usesCellColor=!1}getUsage(){return{usesCharColorFeedback:this._usage.usesCharColor,usesCharFeedback:this._usage.usesChar,usesCellColorFeedback:this._usage.usesCellColor}}get usesAnyFeedback(){return this._usage.usesCharColor||this._usage.usesChar||this._usage.usesCellColor}get usesCharColorFeedback(){return this._usage.usesCharColor}get usesCharFeedback(){return this._usage.usesChar}get usesCellColorFeedback(){return this._usage.usesCellColor}}class Kt{_externalLayers=new Map;_counter=0;_layerIdToPrefix=new Map;getPrefix(e){let r=this._layerIdToPrefix.get(e);return r||(r="extLayer"+this._counter++,this._layerIdToPrefix.set(e,r)),r}trackUsage(e,r){const o=this.getPrefix(e.layerId);let n=this._externalLayers.get(e.layerId);n||(n={layerId:e.layerId,uniformPrefix:o,usesChar:!1,usesCharColor:!1,usesCellColor:!1},this._externalLayers.set(e.layerId,n)),ae(n,r)}hasLayer(e){return this._externalLayers.has(e)}getLayerInfo(e){return this._externalLayers.get(e)}getExternalLayers(){return new Map(this._externalLayers)}get hasExternalLayers(){return this._externalLayers.size>0}get count(){return this._externalLayers.size}reset(){this._externalLayers.clear(),this._counter=0,this._layerIdToPrefix.clear()}}class Qt{_sources=new Map;_counter=0;reset(){this._sources.clear(),this._counter=0}trackUsage(e,r){let o=this._sources.get(e.sourceId);switch(o||(o={sourceId:e.sourceId,uniformName:"u_tms"+this._counter++,usesChar:!1,usesCharColor:!1,usesCellColor:!1,sourceRef:e},this._sources.set(e.sourceId,o)),r){case"char":o.usesChar=!0;break;case"charColor":case"main":o.usesCharColor=!0;break;case"cellColor":o.usesCellColor=!0}}getSources(){return this._sources}getUniformName(e){return this._sources.get(e)?.uniformName??"u_tms0"}hasAnySources(){return this._sources.size>0}}class Wt{getContextAwareGlslFunction(e,r,o,n,a,i,u){return r==="srcTexture"&&a&&u?this._generateTextmodeSourceFunction(a,o,u):r!=="src"?e.glslFunction:n&&i?this._generateExternalSrcFunction(n,o,i):this._generateSelfFeedbackSrcFunction(o)}getFunctionName(e,r,o,n,a,i){return e.name==="srcTexture"&&n&&i?`srcTexture_${i(n.sourceId)}_${r}`:e.name!=="src"?e.name:o&&a?`src_ext_${a(o.layerId)}_${r}`:`src_${r}`}generateTransformCode(e,r,o,n,a,i,u,p,d,s,c,l,m,g,S){const f=this.getFunctionName(r,s,l,m,g,S),y=(...h)=>[...h,...d].join(", ");let x=a,T=i,C=u,U=p;switch(r.type){case"src":{const h=`c${o}`;e.push(`	vec4 ${h} = ${f}(${y(n)});`),x=h;break}case"coord":{const h=`st${o}`;e.push(`	vec2 ${h} = ${f}(${y(n)});`),e.push(`	${n} = ${h};`);break}case"color":{const h=`c${o}`;e.push(`	vec4 ${h} = ${f}(${y(a)});`),x=h;break}case"combine":{const h=`c${o}`;e.push(`	vec4 ${h} = ${f}(${y(a,c??"vec4(0.0)")});`),x=h;break}case"combineCoord":{const h=`st${o}`;e.push(`	vec2 ${h} = ${f}(${y(n,c??"vec4(0.0)")});`),e.push(`	${n} = ${h};`);break}}return{colorVar:x,charVar:T,flagsVar:C,rotationVar:U}}_generateExternalSrcFunction(e,r,o){const n=o(e.layerId),a=E(r);return`
vec4 ${`src_ext_${n}_${r}`}(vec2 _st) {
	return texture(${`${n}${k[a]}`}, fract(_st));
}
`}_generateSelfFeedbackSrcFunction(e){const r=E(e);return`
vec4 ${`src_${e}`}(vec2 _st) {
	return texture(${$[r]}, fract(_st));
}
`}_generateTextmodeSourceFunction(e,r,o){const n=o(e.sourceId);return`
vec4 ${`srcTexture_${n}_${r}`}(vec2 _st) {
	// Flip Y axis to match image orientation (top-left origin)
	vec2 st = vec2(_st.x, 1.0 - _st.y);

	// Source dimensions
	vec2 dim = ${n}_dim;

	// Scale coordinates based on source dimensions vs grid resolution
	// Higher scale value = smaller texture relative to screen
	vec2 scale = u_resolution / dim;
	
	// Calculate offset to center the texture
	// offset = (scale - 1.0) * 0.5
	vec2 offset = (scale - 1.0) * 0.5;
	
	// Apply scaling and offset
	vec2 uv = st * scale - offset;

	// Bounds check - return black/transparent if outside texture area
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
		return vec4(0.0);
	}

	return texture(${n}, uv);
}
`}}let se=null;function Jt(t){se=t}function Z(t,e,r){const o=r??se;if(o)try{o(t,e)}catch{}}function ce(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="number"){if(Number.isNaN(t))return"NaN";if(!Number.isFinite(t))return t>0?"Infinity":"-Infinity"}if(Array.isArray(t)){const e=t.findIndex(r=>typeof r!="number"||!Number.isFinite(r));if(e>=0)return`array with invalid element at index ${e}: ${ce(t[e])}`}return String(t)}function Zt(t){return t!=null&&(typeof t=="number"?Number.isFinite(t):!!Array.isArray(t)&&t.length>0&&t.every(e=>typeof e=="number"&&Number.isFinite(e)))}function er(t,e,r){return o=>{let n;try{n=t(o)}catch(a){return Z(a,e,o.onError),r}return Zt(n)?n:(Z(new Error(`[textmode.synth.js] Invalid dynamic parameter value for "${e}": ${ce(n)}`),e,o.onError),r)}}class tr{_uniforms=new Map;_dynamicUpdaters=new Map;processArgument(e,r,o){return Gt(e)?this._createDynamicUniform(r,o,n=>Et(e,n)):typeof e=="function"?this._createDynamicUniform(r,o,e):typeof e=="number"?{glslValue:X(e)}:this.processDefault(r)}_createDynamicUniform(e,r,o){const n=`${r}_${e.name}`,a={name:n,type:e.type,value:e.default??0,isDynamic:!0},i=er(o,n,a.value);return this._uniforms.set(n,a),this._dynamicUpdaters.set(n,i),{glslValue:n,uniform:a,updater:i}}processDefault(e){const r=e.default;return typeof r=="number"?{glslValue:X(r)}:Array.isArray(r)?{glslValue:`vec${r.length}(${r.map(X).join(", ")})`}:{glslValue:"0.0"}}getUniforms(){return new Map(this._uniforms)}getDynamicUpdaters(){return new Map(this._dynamicUpdaters)}clear(){this._uniforms.clear(),this._dynamicUpdaters.clear()}}function X(t){return Number.isInteger(t)?t.toString()+".0":t.toString()}const rr=`
// Global mutable seed variable - can be modified by seed() transform
// Initialized from u_seed uniform in main()
float _seed = 0.0;

// Utility functions
float _luminance(vec3 rgb) {
	const vec3 W = vec3(0.2125, 0.7154, 0.0721);
	return dot(rgb, W);
}

float _smoothThreshold(float value, float threshold, float tolerance) {
	return smoothstep(threshold - (tolerance + 0.0000001), threshold + (tolerance + 0.0000001), value);
}

vec3 _rgbToHsv(vec3 c) {
	vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
	vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
	vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
	float d = q.x - min(q.w, q.y);
	float e = 1.0e-10;
	return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 _hsvToRgb(vec3 c) {
	vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
	vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
	return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// Simplex 3D Noise by Ian McEwan, Ashima Arts
vec4 permute(vec4 x) {
	return mod(((x*34.0)+1.0)*x, 289.0);
}

vec4 taylorInvSqrt(vec4 r) {
	return 1.79284291400159 - 0.85373472095314 * r;
}

float _noise(vec3 v) {
	// Apply seed offset for deterministic randomness
	// Use fract() to keep values bounded and avoid float precision issues with large seeds
	vec3 seedOffset = vec3(
		fract(_seed * 0.1271) * 1000.0,
		fract(_seed * 0.3117) * 1000.0,
		fract(_seed * 0.0747) * 1000.0
	);
	v = v + seedOffset;
	
	const vec2 C = vec2(1.0/6.0, 1.0/3.0);
	const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

	// First corner
	vec3 i = floor(v + dot(v, C.yyy));
	vec3 x0 = v - i + dot(i, C.xxx);

	// Other corners
	vec3 g = step(x0.yzx, x0.xyz);
	vec3 l = 1.0 - g;
	vec3 i1 = min(g.xyz, l.zxy);
	vec3 i2 = max(g.xyz, l.zxy);

	vec3 x1 = x0 - i1 + 1.0 * C.xxx;
	vec3 x2 = x0 - i2 + 2.0 * C.xxx;
	vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

	// Permutations
	i = mod(i, 289.0);
	vec4 p = permute(permute(permute(
		i.z + vec4(0.0, i1.z, i2.z, 1.0))
		+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
		+ i.x + vec4(0.0, i1.x, i2.x, 1.0));

	// Gradients: N*N points uniformly over a square, mapped onto an octahedron.
	float n_ = 1.0/7.0;
	vec3 ns = n_ * D.wyz - D.xzx;

	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

	vec4 x_ = floor(j * ns.z);
	vec4 y_ = floor(j - 7.0 * x_);

	vec4 x = x_ * ns.x + ns.yyyy;
	vec4 y = y_ * ns.x + ns.yyyy;
	vec4 h = 1.0 - abs(x) - abs(y);

	vec4 b0 = vec4(x.xy, y.xy);
	vec4 b1 = vec4(x.zw, y.zw);

	vec4 s0 = floor(b0) * 2.0 + 1.0;
	vec4 s1 = floor(b1) * 2.0 + 1.0;
	vec4 sh = -step(h, vec4(0.0));

	vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
	vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

	vec3 p0 = vec3(a0.xy, h.x);
	vec3 p1 = vec3(a0.zw, h.y);
	vec3 p2 = vec3(a1.xy, h.z);
	vec3 p3 = vec3(a1.zw, h.w);

	// Normalize gradients
	vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
	p0 *= norm.x;
	p1 *= norm.y;
	p2 *= norm.z;
	p3 *= norm.w;

	// Mix final noise value
	vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
	m = m * m;
	return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

vec4 _packChar(int charIdx) {
	return vec4(float(charIdx % 256) / 255.0, float(charIdx / 256) / 255.0, 0.0, 0.0);
}

int _unpackChar(vec4 c) {
	return int(c.r * 255.0 + c.g * 255.0 * 256.0);
}
`;function or(t){const{uniforms:e,glslFunctions:r,mainCode:o,charOutputCode:n,primaryColorVar:a,cellColorVar:i,charMapping:u,usesFeedback:p,usesCharFeedback:d,usesCellColorFeedback:s,usesCharSource:c,externalLayers:l,textmodeSources:m}=t,g=Array.from(e.values()).map(_=>`uniform ${_.type} ${_.name};`).join(`
`);let S="",f="";u&&(S=`uniform int u_charMap[${u.indices.length}];
uniform int u_charMapSize;`,f=`
	// Apply character mapping
	int rawCharIdx = _unpackChar(charOutput);
	int mappedCharIdx = u_charMap[int(mod(float(rawCharIdx), float(u_charMapSize)))];
	charOutput = _packChar(mappedCharIdx);`);const y=[];p&&y.push(`uniform sampler2D ${$.charColor};`),d&&y.push(`uniform sampler2D ${$.char};`),s&&y.push(`uniform sampler2D ${$.cellColor};`);const x=y.join(`
`),T=c?"uniform float u_charSourceCount;":"",C=[];if(l)for(const[,_]of l)_.usesChar&&C.push(`uniform sampler2D ${_.uniformPrefix}${k.char};`),_.usesCharColor&&C.push(`uniform sampler2D ${_.uniformPrefix}${k.charColor};`),_.usesCellColor&&C.push(`uniform sampler2D ${_.uniformPrefix}${k.cellColor};`);const U=C.length>0?`// External layer samplers
${C.join(`
`)}`:"",h=[];if(m)for(const[,_]of m)h.push(`uniform sampler2D ${_.uniformName};`),h.push(`uniform vec2 ${_.uniformName}_dim;`);return`#version 300 es
precision highp float;

// Varyings
in vec2 v_uv;

// MRT outputs
layout(location = 0) out vec4 o_character;
layout(location = 1) out vec4 o_primaryColor;
layout(location = 2) out vec4 o_secondaryColor;

// Standard uniforms
uniform float time;
uniform float u_seed;
uniform vec2 u_resolution;
${x}
${U}
${h.length>0?`// TextmodeSource samplers (images/videos)
${h.join(`
`)}`:""}
${S}
${T}

// Dynamic uniforms
${g}

${rr}

// Transform functions
${Array.from(r).join(`
`)}

void main() {
	// Initialize mutable seed from uniform (can be overridden by seed() transform)
	_seed = u_seed;
	
	// Transform chain
${o.join(`
`)}

${n}
${f}

	// Output to MRT
	o_character = charOutput;
	o_primaryColor = ${a};
	o_secondaryColor = ${i};
}
`}function nr(t,e,r){return t?`
	// Character output from generator
	vec4 charOutput = ${e};`:`
	// Derive character from color luminance
	float lum = _luminance(${r}.rgb);
	int charIdx = int(lum * 255.0);
	vec4 charOutput = _packChar(charIdx);`}function j(t){return new ar().compile(t)}class ar{_uniformManager=new tr;_feedbackTracker=new Ht;_externalLayerManager=new Kt;_textmodeSourceManager=new Qt;_codeGenerator=new Wt;_glslFunctions=new Set;_mainCode=[];_varCounter=0;_currentTarget="main";_usesCharSource=!1;compile(e){this._reset();const r=this._compileChain(e,"main","vec4(1.0, 1.0, 1.0, 1.0)","v_uv","main");let o=r.charVar;e.charSource&&(o=this._compileCharSource(e));let n=r.colorVar;e.charColorSource&&(n=this._compileChain(e.charColorSource,"charColor","vec4(1.0, 1.0, 1.0, 1.0)","v_uv","charColor").colorVar);let a="vec4(0.0, 0.0, 0.0, 0.0)";e.cellColorSource&&(a=this._compileChain(e.cellColorSource,"cellColor","vec4(0.0, 0.0, 0.0, 0.0)","v_uv","cellColor").colorVar);const i=nr(!!o,o??"vec4(0.0)",r.colorVar),u=this._feedbackTracker.getUsage();return{fragmentSource:or({uniforms:this._uniformManager.getUniforms(),glslFunctions:this._glslFunctions,mainCode:this._mainCode,charOutputCode:i,primaryColorVar:n,cellColorVar:a,charMapping:e.charMapping,usesFeedback:u.usesCharColorFeedback,usesCharFeedback:u.usesCharFeedback,usesCellColorFeedback:u.usesCellColorFeedback,usesCharSource:this._usesCharSource,externalLayers:this._externalLayerManager.getExternalLayers(),textmodeSources:this._textmodeSourceManager.getSources()}),uniforms:this._uniformManager.getUniforms(),dynamicUpdaters:this._uniformManager.getDynamicUpdaters(),charMapping:e.charMapping,usesCharColorFeedback:u.usesCharColorFeedback,usesCharFeedback:u.usesCharFeedback,usesCellColorFeedback:u.usesCellColorFeedback,usesCharSource:this._usesCharSource,externalLayers:this._externalLayerManager.getExternalLayers(),textmodeSources:this._textmodeSourceManager.getSources()}}_reset(){this._varCounter=0,this._uniformManager.clear(),this._feedbackTracker.reset(),this._externalLayerManager.reset(),this._textmodeSourceManager.reset(),this._glslFunctions.clear(),this._mainCode.length=0,this._currentTarget="main",this._usesCharSource=!1}_compileCharSource(e){this._usesCharSource=!0;const r=this._compileChain(e.charSource,"charSrc","vec4(1.0, 1.0, 1.0, 1.0)","v_uv","char"),o="charFromSource_"+this._varCounter++;return this._mainCode.push("	// Convert charSource color to character index"),this._mainCode.push(`	float charLum_${o} = clamp(_luminance(${r.colorVar}.rgb), 0.0, 1.0);`),this._mainCode.push(`	float charCount_${o} = max(u_charSourceCount, 1.0);`),this._mainCode.push(`	int charIdx_${o} = int(min(charLum_${o} * charCount_${o}, charCount_${o} - 1.0));`),this._mainCode.push(`	vec4 ${o} = _packChar(charIdx_${o});`),o}_compileChain(e,r,o,n="v_uv",a="main"){const i=this._currentTarget;this._currentTarget=a;const u=`${r}_st`;let p,d,s,c=`${r}_c`;this._mainCode.push(`	vec2 ${u} = ${n};`),this._mainCode.push(`	vec4 ${c} = ${o};`);const l=e.transforms,m=l.map(f=>this._getProcessedTransform(f.name)),g=this._identifyCoordTransforms(m),S=f=>{const y=l[f],x=m[f];if(!x)return void console.warn(`[SynthCompiler] Unknown transform: ${y.name}`);const T=e.externalLayerRefs.get(f),C=e.textmodeSourceRefs.get(f);y.name==="src"?this._trackSrcUsage(T):y.name==="srcTexture"&&C&&this._textmodeSourceManager.trackUsage(C,this._currentTarget);const U=this._codeGenerator.getContextAwareGlslFunction(x,y.name,this._currentTarget,T,C,P=>this._externalLayerManager.getPrefix(P),P=>this._textmodeSourceManager.getUniformName(P));this._glslFunctions.add(U);const h=this._processArguments(y.userArgs,x.inputs,`${r}_${f}_${y.name}`),_=e.nestedSources.get(f);let K;_&&ee.has(x.type)&&(K=this._compileChain(_,`${r}_nested_${f}`,o,u,a).colorVar);const F=this._codeGenerator.generateTransformCode(this._mainCode,x,this._varCounter++,u,c,p,d,s,h,this._currentTarget,K,T,C,P=>this._externalLayerManager.getPrefix(P),P=>this._textmodeSourceManager.getUniformName(P));c=F.colorVar,F.charVar&&(p=F.charVar),F.flagsVar&&(d=F.flagsVar),F.rotationVar&&(s=F.rotationVar)};for(let f=0;f<l.length;f++)m[f]&&l[f].name==="seed"&&S(f);for(let f=g.length-1;f>=0;f--)S(g[f]);for(let f=0;f<l.length;f++){const y=m[f];y&&Q.has(y.type)||l[f].name!=="seed"&&S(f)}return this._currentTarget=i,{coordVar:u,colorVar:c,charVar:p,flagsVar:d,rotationVar:s}}_identifyCoordTransforms(e){const r=[];for(let o=0;o<e.length;o++){const n=e[o];n&&Q.has(n.type)&&r.push(o)}return r}_trackSrcUsage(e){e?this._externalLayerManager.trackUsage(e,this._currentTarget):this._feedbackTracker.trackUsage(this._currentTarget)}_getProcessedTransform(e){return R.getProcessed(e)}_processArguments(e,r,o){const n=[];for(let a=0;a<r.length;a++){const i=r[a],u=e[a]??i.default,p=this._uniformManager.processArgument(u,i,o);n.push(p.glslValue)}return n}}class V{static _fontIndexCache=new WeakMap;_resolvedIndices;_lastFont;_lastChars="";resolve(e,r){if(this._resolvedIndices&&this._lastFont===r&&this._lastChars===e)return this._resolvedIndices;let o=V._fontIndexCache.get(r);if(!o){o=new Map;const d=r.characters;for(let s=0;s<d.length;s++)o.set(d[s],s);V._fontIndexCache.set(r,o)}const n=Array.from(e),a=new Int32Array(n.length),i=r.characterMap,u=i.get(" "),p=u&&o.has(u)?o.get(u):0;for(let d=0;d<n.length;d++){const s=n[d],c=i.get(s);if(c){const l=o.get(c);a[d]=l!==void 0?l:p}else a[d]=p}return this._resolvedIndices=a,this._lastFont=r,this._lastChars=e,a}invalidate(){this._resolvedIndices=void 0,this._lastFont=void 0,this._lastChars=""}}function ie(t={}){return{source:t.source??new v,sourceFactory:t.sourceFactory,compiled:t.compiled,shader:t.shader,characterResolver:t.characterResolver??new V,needsCompile:t.needsCompile??!1,isCompiling:t.isCompiling??!1,pingPongBuffers:t.pingPongBuffers,pingPongDimensions:t.pingPongDimensions,pingPongIndex:t.pingPongIndex??0,externalLayerMap:t.externalLayerMap,bpm:t.bpm,dynamicValues:t.dynamicValues??new Map,synthContext:t.synthContext??{time:0,frameCount:0,width:0,height:0,cols:0,rows:0,bpm:0},isDisposed:!1}}function sr(t){t.extendLayer("synth",function(e){const r=this.grid!==void 0&&this.drawFramebuffer!==void 0;let o,n;typeof e=="function"?(n=e,o=new v):o=e;let a=this.getPluginState(b);a?(a.source=o,a.sourceFactory=n,a.needsCompile=!0,a.characterResolver.invalidate(),r&&!n&&(a.compiled=j(o))):a=ie({source:o,sourceFactory:n,compiled:r&&!n?j(o):void 0,needsCompile:!0}),this.setPluginState(b,a)})}function cr(t){t.extendLayer("clearSynth",function(){const e=this.getPluginState(b);e&&(e.shader?.dispose&&e.shader.dispose(),e.pingPongBuffers&&(e.pingPongBuffers[0].dispose?.(),e.pingPongBuffers[1].dispose?.()),this.setPluginState(b,void 0))})}function ir(t){t.extendLayer("bpm",function(e){let r=this.getPluginState(b);r?r.bpm=e:r=ie({bpm:e}),this.setPluginState(b,r)})}const B=Symbol.for("textmode.synth.state");function Y(t){const e=t;return e[B]||(e[B]={bpm:60,seed:null}),e[B]}function lr(t){return Y(t).bpm}function ur(t){return Y(t).seed}function fr(t){t.bpm=function(e){return Y(t).bpm=e,e}}function pr(t){t.seed=function(e){return Y(t).seed=e,e}}function I(t){const e=new Map;for(const[,r]of t.externalLayerRefs){const o=typeof r.layer=="function"?r.layer():r.layer;o&&e.set(r.layerId,o)}for(const[,r]of t.nestedSources){const o=I(r);for(const[n,a]of o)e.set(n,a)}if(t.charSource){const r=I(t.charSource);for(const[o,n]of r)e.set(o,n)}if(t.charColorSource){const r=I(t.charColorSource);for(const[o,n]of r)e.set(o,n)}if(t.cellColorSource){const r=I(t.cellColorSource);for(const[o,n]of r)e.set(o,n)}return e}function A(t){const e=new Map;for(const[,r]of t.textmodeSourceRefs){const o=typeof r.source=="function"?r.source():r.source;o&&e.set(r.sourceId,o)}for(const[,r]of t.nestedSources){const o=A(r);for(const[n,a]of o)e.set(n,a)}if(t.charSource){const r=A(t.charSource);for(const[o,n]of r)e.set(o,n)}if(t.charColorSource){const r=A(t.charColorSource);for(const[o,n]of r)e.set(o,n)}if(t.cellColorSource){const r=A(t.cellColorSource);for(const[o,n]of r)e.set(o,n)}return e}const dr=`#version 300 es
precision highp float;

in vec2 v_uv;

layout(location = 0) out vec4 o_character;
layout(location = 1) out vec4 o_primaryColor;
layout(location = 2) out vec4 o_secondaryColor;

uniform sampler2D u_charTex;
uniform sampler2D u_charColorTex;
uniform sampler2D u_cellColorTex;

void main() {
	o_character = texture(u_charTex, v_uv);
	o_primaryColor = texture(u_charColorTex, v_uv);
	o_secondaryColor = texture(u_cellColorTex, v_uv);
}
`;class mr{_shader=null;_isCompiling=!1;_isDisposed=!1;async initialize(e){if(!(this._shader||this._isCompiling||this._isDisposed)){this._isCompiling=!0;try{this._shader=await e.createFilterShader(dr)}catch(r){console.warn("[textmode.synth.js] Failed to compile copy shader:",r)}finally{this._isCompiling=!1}}}getShader(){return this._shader}isReady(){return this._shader!==null}dispose(){this._isDisposed=!0,this._shader?.dispose&&this._shader.dispose(),this._shader=null,this._isCompiling=!1}reset(){this._isDisposed=!1}}const D=new mr;async function hr(t,e){const r=t.getPluginState(b);if(!r)return;const o=t.grid,n=t.drawFramebuffer;if(!o||!n)return;let a=!1;if(r.sourceFactory&&r.needsCompile||!r.compiled){let c=r.source,l=!1;if(r.sourceFactory)try{const m=r.sourceFactory(),g=j(m);r.compiled&&g.fragmentSource===r.compiled.fragmentSource||(r.source=m,c=m,r.compiled=g,a=!1,l=!0)}catch(m){console.warn("[textmode.synth.js] Failed to evaluate synth factory:",m)}(l||!r.compiled||r.needsCompile)&&(r.compiled||(r.compiled=j(c)),r.externalLayerMap=I(c),r.textmodeSourceMap=A(c),a=!0,r.needsCompile=!0)}if(r.needsCompile&&r.compiled&&!r.isCompiling){r.isCompiling=!0;const c=r.compiled;a||(r.externalLayerMap=I(r.source),r.textmodeSourceMap=A(r.source));try{const l=await e.createFilterShader(c.fragmentSource);if(r.isDisposed)return void(l.dispose&&l.dispose());r.shader?.dispose&&r.shader.dispose(),r.shader=l,r.compiled===c&&(r.needsCompile=!1)}finally{r.isCompiling=!1}}if(!r.shader||!r.compiled||r.isDisposed)return;const i=r.compiled.usesCharColorFeedback,u=r.compiled.usesCharFeedback,p=r.compiled.usesCellColorFeedback,d=i||u||p;if(r.pingPongBuffers){const c=r.pingPongDimensions,l=!c||c.cols!==o.cols||c.rows!==o.rows;d&&!l||(r.pingPongBuffers[0].dispose(),r.pingPongBuffers[1].dispose(),r.pingPongBuffers=void 0,r.pingPongDimensions=void 0)}d&&!r.pingPongBuffers&&(r.pingPongBuffers=[e.createFramebuffer({width:o.cols,height:o.rows,attachments:3}),e.createFramebuffer({width:o.cols,height:o.rows,attachments:3})],r.pingPongDimensions={cols:o.cols,rows:o.rows},r.pingPongIndex=0),r.synthContext||(r.synthContext={time:0,frameCount:0,width:0,height:0,cols:0,rows:0,bpm:0});const s=r.synthContext;s.time=e.secs,s.frameCount=e.frameCount,s.width=o.width,s.height=o.height,s.cols=o.cols,s.rows=o.rows,s.bpm=r.bpm??lr(e),s.onError=r.onDynamicError,r.dynamicValues.clear();for(const[c,l]of r.compiled.dynamicUpdaters){const m=l(s);r.dynamicValues.set(c,m)}if(d&&r.pingPongBuffers){const c=r.pingPongBuffers[r.pingPongIndex],l=r.pingPongBuffers[1-r.pingPongIndex];l.begin(),e.clear(),e.shader(r.shader),O(t,e,r,s,c),e.rect(o.cols,o.rows),l.end(),n.begin(),e.clear();const m=D.getShader();m?(e.shader(m),e.setUniform("u_charTex",l.textures[0]),e.setUniform("u_charColorTex",l.textures[1]),e.setUniform("u_cellColorTex",l.textures[2])):(e.shader(r.shader),O(t,e,r,s,c)),e.rect(o.cols,o.rows),n.end(),r.pingPongIndex=1-r.pingPongIndex}else n.begin(),e.clear(),e.shader(r.shader),O(t,e,r,s,null),e.rect(o.cols,o.rows),n.end();e.resetShader()}function O(t,e,r,o,n){e.setUniform("time",o.time),e.setUniform("u_resolution",[o.cols,o.rows]);const a=ur(e);e.setUniform("u_seed",a??0);for(const[s,c]of r.dynamicValues)e.setUniform(s,c);const i=r.compiled,u=r.staticUniformsAppliedTo!==r.shader;if(u){for(const[s,c]of i.uniforms)c.isDynamic||typeof c.value=="function"||e.setUniform(s,c.value);r.staticUniformsAppliedTo=r.shader}if(i.charMapping){const s=r.characterResolver.resolve(i.charMapping.chars,t.font);(u||s!==r.lastCharMapIndices)&&(e.setUniform("u_charMap",s),e.setUniform("u_charMapSize",s.length),r.lastCharMapIndices=s)}if(i.usesCharSource){const s=i.charMapping?i.charMapping.chars.length:t.font.characters.length;e.setUniform("u_charSourceCount",s)}n&&(i.usesCharColorFeedback&&e.setUniform($.charColor,n.textures[1]),i.usesCharFeedback&&e.setUniform($.char,n.textures[0]),i.usesCellColorFeedback&&e.setUniform($.cellColor,n.textures[2]));const p=i.externalLayers;if(p&&p.size>0&&r.externalLayerMap)for(const[s,c]of p){const l=r.externalLayerMap.get(s);if(!l){console.warn(`[textmode.synth.js] External layer not found: ${s}`);continue}const m=l.getPluginState(b);let g;m?.pingPongBuffers?g=m.pingPongBuffers[m.pingPongIndex].textures:l.drawFramebuffer&&(g=l.drawFramebuffer.textures),g&&(c.usesChar&&e.setUniform(`${c.uniformPrefix}${k.char}`,g[0]),c.usesCharColor&&e.setUniform(`${c.uniformPrefix}${k.charColor}`,g[1]),c.usesCellColor&&e.setUniform(`${c.uniformPrefix}${k.cellColor}`,g[2]))}const d=i.textmodeSources;if(d&&d.size>0&&r.textmodeSourceMap)for(const[s,c]of d){const l=r.textmodeSourceMap.get(s);if(!l){console.warn(`[textmode.synth.js] TextmodeSource not found: ${s}`);continue}l.update&&l.update();const m=l.width??1,g=l.height??1,S=m>0?m:1,f=g>0?g:1;e.setUniform(`${c.uniformName}_dim`,[S,f]),l.texture?e.setUniform(c.uniformName,l.texture):console.warn(`[textmode.synth.js] TextmodeSource texture not loaded: ${s}`)}}function yr(t){const e=t.getPluginState(b);e&&(e.isDisposed=!0,e.shader?.dispose&&e.shader.dispose(),e.pingPongBuffers&&(e.pingPongBuffers[0].dispose?.(),e.pingPongBuffers[1].dispose?.()))}const gr={name:b,version:"1.5.1",install(t,e){D.reset(),fr(t),pr(t),sr(e),ir(e),cr(e),e.registerPreSetupHook(async()=>{await D.initialize(t)}),e.registerLayerPreRenderHook(r=>hr(r,t)),e.registerLayerDisposedHook(yr)},uninstall(t,e){const r=[e.layerManager.base,...e.layerManager.all];for(const o of r){const n=o.getPluginState(b);n&&(n.isDisposed=!0,n.shader?.dispose&&n.shader.dispose(),n.pingPongBuffers&&(n.pingPongBuffers[0].dispose?.(),n.pingPongBuffers[1].dispose?.()),o.setPluginState(b,void 0))}delete t.bpm,delete t.seed,e.removeLayerExtension("synth"),e.removeLayerExtension("bpm"),e.removeLayerExtension("clearSynth"),D.dispose()}};function _r(t,e,r,o){return new v({cellColorSource:H(t,e,r,o)})}const vr=t=>new v({charSource:t});function xr(t,e,r,o){return new v({charColorSource:H(t,e,r,o)})}function Cr(t){return w.gradient(t??null)}function br(t,e){return w.noise(t??null,e??null)}function Sr(t,e,r,o){return w.plasma(t??null,e??null,r??null,o??null)}function wr(t,e,r,o,n,a){return w.moire(t??null,e??null,r??null,o??null,n??null,a??null)}function $r(t,e,r){return w.osc(t??null,e??null,r??null)}function Mr(t,e,r,o){const n=H(t,e,r,o);return new v({charColorSource:n,cellColorSource:n})}function Tr(t,e,r){return w.shape(t??null,e??null,r??null)}function le(t,e,r,o){return t!==void 0&&e===void 0&&r===void 0&&o===void 0&&typeof t=="number"?w.solid(t):w.solid(t??null,e??null,r??null,o??null)}const Fr=t=>{const e=w.src;if(!t)return e();const r=new v;if(typeof t=="function"){const o=t();if(o&&kr(o)){const n=o.id??`layer_${Date.now()}_${Math.random().toString(36).slice(2,9)}`;r.addExternalLayerRef({layerId:n,layer:t})}else{const n=`tms_${Date.now()}_${Math.random().toString(36).slice(2,9)}`;r.addTextmodeSourceRef({sourceId:n,source:t})}}else if(Pr(t)){const o=`tms_${Date.now()}_${Math.random().toString(36).slice(2,9)}`;r.addTextmodeSourceRef({sourceId:o,source:t})}else{const o=t,n=o.id??`layer_${Date.now()}_${Math.random().toString(36).slice(2,9)}`;r.addExternalLayerRef({layerId:n,layer:o})}return r};function Pr(t){return t!==null&&typeof t=="object"&&"texture"in t&&"originalWidth"in t&&"originalHeight"in t}function kr(t){return t!==null&&typeof t=="object"&&"grid"in t&&"drawFramebuffer"in t}function Ir(t,e,r){return w.voronoi(t??null,e??null,r??null)}function H(t,e,r,o){return t instanceof v?t:le(t,e,r,o)}typeof window<"u"&&(window.SynthPlugin=gr,window.SynthSource=v,window.cellColor=_r,window.char=vr,window.charColor=xr,window.gradient=Cr,window.moire=wr,window.noise=br,window.osc=$r,window.paint=Mr,window.plasma=Sr,window.shape=Tr,window.solid=le,window.src=Fr,window.voronoi=Ir,window.setGlobalErrorCallback=Jt);export{gr as SynthPlugin,v as SynthSource,_r as cellColor,vr as char,xr as charColor,Cr as gradient,wr as moire,br as noise,$r as osc,Mr as paint,Sr as plasma,Jt as setGlobalErrorCallback,Tr as shape,le as solid,Fr as src,Ir as voronoi};
